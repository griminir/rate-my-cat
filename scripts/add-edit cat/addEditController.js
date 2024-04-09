function getName(catName) {
  model.input.postCat.addNewCat.name = catName;
}
function getBirthday(catBirthday) {
  model.input.postCat.addNewCat.dateOfBirth = catBirthday;
}
function getRace(catRace) {
  model.input.postCat.addNewCat.race = catRace;
}

function postCat() {
  const newCat = {
    id: findMaxId() + 1,
    owner: model.app.loggedinuser,
    name: model.input.postCat.addNewCat.name,
    age: getAge(),
    dateOfBirth: model.input.postCat.addNewCat.dateOfBirth,
    race: model.input.postCat.addNewCat.race,
    lore: ``,
    pics: [],
  };
  model.data.cats.push(newCat);
  model.app.page = "feed";

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
  let racesDiv = document.getElementById("catRaces");
  if (racesDiv.style.display === "block") {
    racesDiv.style.display = "none";
  } else {
    racesDiv.style.display = "block";
  }
}

function addRace(race) {
    let checkBox = document.getElementById(race);
    if (checkBox.checked === true){
        model.input.postCat.addNewCat.race.push(race);
      } else {
         let raceIndex = model.input.postCat.addNewCat.race.indexOf(race);
         model.input.postCat.addNewCat.race.splice(raceIndex, 1);
      }
}

