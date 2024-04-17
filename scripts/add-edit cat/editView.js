function editView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${makeHeader()}
      <div class="ACaddCatContainer">
          <h2>Add new meow pics</h2>
              <div class="ACaddImages">
                  <span class="ACplus-button">+</span>
                  <input id="fileInput" class="ACfile-input" type='file' onchange="editPics(this.files)" accept="image/*" multiple>
              </div>
              <div id="previewPictures" class="ACpreviewPics">
              </div>
          <div class="ACinputFields">
          <select id="dropdown-select" onchange="pickLastCat(this.value)">
          <option type="checkbox">${model.input.postCat.addMoreCatPics.name}</option>
            ${makePickYourCatHtml()}
            </select>
            Birthday: <span id="catsDoB">
            <input class="ACinputItems" type='date' onchange="updateBirthday(this.value)" value="${getCatDoB()}">
            </span>
              <label>Race:</label> 
              <button onclick='toggleRaces()'>Edit race</button>
                  <div id="catRaces" class="ACraces">
                  ${makeDropDownRaceHtml()}
                  </div>
          </div>
          <textarea id="catLore" class="ACcatLoreField" type='text' onchange="updateLore(this.value)" placeholder="Add meow lore">
          ${getCatsLore() ?? 'Add meow lore'}
          </textarea>
          <button onclick='updateCat()'>Post my meow</button>
      </div>
      `;
}



function makeDropDownRaceHtml() {
  let catRacesHtml = '';
  for (let race of model.data.catRaces) {
    catRacesHtml += /*HTML*/ `
          <label><input id="${race}" type="checkbox" onchange="addRace(this.value)" value="${race}" ${checkRaceIfTrue(race)}> ${race}</label><br>
          `;
  }
  return catRacesHtml;
}

function checkRaceIfTrue(race) {
  if (model.input.postCat.addMoreCatPics.name === "Pick your cat") {
    return;
  } else {
    let cat = model.data.cats.find(
      (cat) =>
        model.input.postCat.addMoreCatPics.name === cat.name &&
        model.app.loggedInUser === cat.owner
    );
    if (cat.race.includes(race)) {
      return "checked";
    } 

  }
}

function makePickYourCatHtml() {
  let myCats = model.data.cats.filter(
    (cat) => cat.owner === model.app.loggedInUser
  );
  let myCatsHtml = '';
  for (let cat of myCats) {
    myCatsHtml += /*HTML*/ `
          <option id="${cat.name}" type="checkbox" value="${cat.name}"> ${cat.name}</option>
          `;
  }
  return myCatsHtml;
}

function makePreviewPicsOnEditView() {
  let previewPictures = '';
  for (let pics of model.input.postCat.addMoreCatPics.pics) {
    previewPictures += /*HTML*/ `
    <img class="ACimg" src="${pics}">
    `;
  }
  let previewDiv = /*HTML*/ `
  <div class="ACcarousel">
  <div class="ACbtn1" id="previous" onclick='showSlideEditPage(-1)'>❮</div>
  <div class="ACbtn2" id="next" onclick='showSlideEditPage(1)'>❯</div>
  <div id="ACslides">${previewPictures}</div>
  </div>
  `;
  return previewDiv;
}
