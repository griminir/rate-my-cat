// add controller

function getName(catName) {
  model.input.postCat.addNewCat.name = catName;
}
function getBirthday(catBirthday) {
  model.input.postCat.addNewCat.dateOfBirth = catBirthday;
}
// function getRace(catRace) {
//   model.input.postCat.addNewCat.race = catRace;
// }
function getLore(catLore) {
  model.input.postCat.addNewCat.lore = catLore;
}
function addPics(filesInput) {
  for (let i = 0; i < filesInput.length; i++) {
    model.input.postCat.addNewCat.pics.push(URL.createObjectURL(filesInput[i]));
  }
  addView();
  let showPics = document.getElementById('previewPictures');
  showPics.style.display = 'block';
}

function postCat() {
  const newCat = {
    id: findMaxId() + 1,
    owner: model.app.loggedInUser,
    name: model.input.postCat.addNewCat.name,
    age: getAge(),
    dateOfBirth: model.input.postCat.addNewCat.dateOfBirth,
    race: model.input.postCat.addNewCat.race,
    lore: model.input.postCat.addNewCat.lore,
    pics: model.input.postCat.addNewCat.pics,
    rating: [],
    updated: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };
  model.data.cats.push(newCat);
  model.app.page = 'feed';
  model.input.postCat.showSlide = 0;

  // console log to see
  console.log(model.data.cats);
  updateView();
}

function findMaxId() {
  let maxId = -1;
  for (let cat of model.data.cats) {
    if (cat.id > maxId) maxId = cat.id;
  }
  return maxId;
}

function getAge() {
  // Parse the birthdate string into a Date object
  let dob = new Date(model.input.postCat.addNewCat.dateOfBirth);

  // Get the current date
  let currentDate = new Date();

  // Calculate the time difference in milliseconds
  let timeDiff = currentDate.getTime() - dob.getTime();

  // Calculate the age based on the time difference
  let age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

  return age;
}

function toggleRaces() {
  let racesDiv = document.getElementById('catRaces');
  if (racesDiv.style.display === 'block') {
    racesDiv.style.display = 'none';
  } else {
    racesDiv.style.display = 'block';
  }
}

function addRace(race) {
  let checkBox = document.getElementById(race);
  if (checkBox.checked === true) {
    model.input.postCat.addNewCat.race.push(race);
  } else {
    let raceIndex = model.input.postCat.addNewCat.race.indexOf(race);
    model.input.postCat.addNewCat.race.splice(raceIndex, 1);
  }
}

function showSlide(x) {
  let slidesStyle = document.getElementById('ACslides');
  model.input.postCat.showSlide += x;
  if (model.input.postCat.showSlide === -1) {
    model.input.postCat.showSlide =
      model.input.postCat.addNewCat.pics.length - 1;
  } else if (
    model.input.postCat.showSlide === model.input.postCat.addNewCat.pics.length
  ) {
    model.input.postCat.showSlide = 0;
  }
  slidesStyle.style.transform = `translateX(-${model.input.postCat.showSlide}00%)`;
}

// edit controller

function pickLastCat(catName) {
  model.input.postCat.addMoreCatPics.name = catName;
  let cat = model.data.cats.find(
    (cat) =>
      model.input.postCat.addMoreCatPics.name === cat.name &&
      model.app.loggedInUser === cat.owner
  );
  getCatDoB();
  getCatsLore();
  editView();
  console.log(cat);
}

function getCatsLore() {
  let cat = model.data.cats.find(
    (cat) =>
      model.input.postCat.addMoreCatPics.name === cat.name &&
      model.app.loggedInUser === cat.owner
  );
  if (cat == undefined) {
    return undefined;
  } else {
    return cat.lore;
  }
}

function getCatDoB() {
  let cat = model.data.cats.find(
    (cat) =>
      model.input.postCat.addMoreCatPics.name === cat.name &&
      model.app.loggedInUser === cat.owner
  );
  if (cat == undefined) {
    return undefined;
  } else {
    return cat.dateOfBirth;
  }
}


function updateLore(catLore) {
  model.input.postCat.addMoreCatPics.lore = catLore;
}
function updateBirthday(catBirth) {
  model.input.postCat.addMoreCatPics.dateOfBirth = catBirth;
}

function editPics(filesInput) {
  for (let i = 0; i < filesInput.length; i++) {
    model.input.postCat.addMoreCatPics.pics.push(
      URL.createObjectURL(filesInput[i])
    );
  }
  document.getElementById('previewPictures').innerHTML =
    makePreviewPicsOnEditView();
  let showPics = document.getElementById('previewPictures');
  showPics.style.display = 'block';
}

function updateCat() {
  let cat = model.data.cats.find(
    (cat) =>
      model.input.postCat.addMoreCatPics.name === cat.name &&
      model.app.loggedInUser === cat.owner
  );
  cat.lore = model.input.postCat.addMoreCatPics.lore;
  cat.dateOfBirth = model.input.postCat.addMoreCatPics.dateOfBirth;
  cat.pics.push(model.input.postCat.addMoreCatPics.pics);
  cat.updated = new Date().toISOString().slice(0, 19).replace('T', ' ');
  model.app.page = 'feed';
  model.input.postCat.showSlide = 0;

  // log to see
  console.log(model.data.cats);
}

function showSlideEditPage(x) {
  let slidesStyle = document.getElementById('ACslides');
  model.input.postCat.showSlide += x;
  if (model.input.postCat.showSlide === -1) {
    model.input.postCat.showSlide =
      model.input.postCat.addMoreCatPics.pics.length - 1;
  } else if (
    model.input.postCat.showSlide ===
    model.input.postCat.addMoreCatPics.pics.length
  ) {
    model.input.postCat.showSlide = 0;
  }
  slidesStyle.style.transform = `translateX(-${model.input.postCat.showSlide}00%)`;
}

// to do:
// - Age doesnt update when updating cat/adding new pics

