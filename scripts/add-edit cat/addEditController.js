// add controller
function getInfo(value, property) {
  model.input.postCat.addNewCat[property] = value;
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
  let cats = model.data.cats;
  let postCat = model.input.postCat;
  const newCat = {
    id: cats[cats.length - 1].id + 1,
    owner: model.app.loggedInUser,
    name: postCat.addNewCat.name,
    age: getAge(),
    dateOfBirth: postCat.addNewCat.dateOfBirth,
    race: postCat.addNewCat.race,
    lore: postCat.addNewCat.lore,
    pics: postCat.addNewCat.pics,
    rating: [],
    updated: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };
  model.data.cats.push(newCat);
  model.input.postCat.showSlide = 0;
  changePage('feed');
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
  getCatDoB();
  getCatsLore();
  editView();
}

function getCatsLore() {
  let cat = model.data.cats.find(
    (cat) =>
      model.input.postCat.addMoreCatPics.name === cat.name &&
      model.app.loggedInUser === cat.owner
  );
  if (cat == undefined) {
    return '';
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

function updateInfo(value, property) {
  model.input.postCat.addMoreCatPics[property] = value;
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
  let addMoreCatPics = model.input.postCat.addMoreCatPics;
  let cat = model.data.cats.find(
    (cat) =>
      addMoreCatPics.name === cat.name && model.app.loggedInUser === cat.owner
  );
  cat.lore = addMoreCatPics.lore;
  cat.dateOfBirth = addMoreCatPics.dateOfBirth;
  cat.pics.push(addMoreCatPics.pics);
  cat.updated = new Date().toISOString().slice(0, 19).replace('T', ' ');
  model.input.postCat.showSlide = 0;
  changePage('feed');
}

function showSlideEditPage(x) {
  let postCat = model.input.postCat;
  let slidesStyle = document.getElementById('ACslides');
  model.input.postCat.showSlide += x;
  if (postCat.showSlide === -1) {
    model.input.postCat.showSlide = postCat.addMoreCatPics.pics.length - 1;
  } else if (postCat.showSlide === postCat.addMoreCatPics.pics.length) {
    model.input.postCat.showSlide = 0;
  }
  slidesStyle.style.transform = `translateX(-${postCat.showSlide}00%)`;
}
