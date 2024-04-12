function editView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${makeHeader()}
      <div class="ACaddCatContainer">
          <h2>Add new pussy pics</h2>
              <div class="ACaddImages">
                  <span class="ACplus-button">+</span>
                  <input id="fileInput" class="ACfile-input" type='file' onchange="editPics(this.files)" accept="image/*" multiple>
              </div>
              <div id="previewPictures" class="ACpreviewPics">
                  ${makePreviewPics() ?? ''}
              </div>
          <div class="ACinputFields">
          <select id="dropdown-select" onchange="pickCat(this.value)">
            ${makePickYourCatHtml()}
            </select>
            ${getCatsDoB()}
              <label>Race:</label> 
              <button onclick='toggleRaces()'>Edit race</button>
                  <div id="catRaces" class="ACraces">
                  ${makeDropDownRaceHtml()}
                  </div>
          </div>
          <textarea class="ACcatLoreField" type='text' onchange="getLore(this.value)" placeholder="Add pussy lore"></textarea>
          <button onclick='postCat()'>Post my pussy</button>
      </div>
      `;
}

function makeDropDownRaceHtml() {
  let catRacesHtml = '';
  for (let race of model.data.catRaces) {
    catRacesHtml += /*HTML*/ `
          <label><input id="${race}" type="checkbox" onchange="addRace(this.value)" value="${race}"> ${race}</label><br>
          `;
  }
  return catRacesHtml;
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
