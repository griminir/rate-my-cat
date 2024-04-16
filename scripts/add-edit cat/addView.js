function addView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
  ${makeHeader()}
    <div class="ACaddCatContainer">
        <h2>Add new meow</h2>
            <div class="ACaddImages">
                <span class="ACplus-button">+</span>
                <input id="fileInput" class="ACfile-input" type='file' onchange="addPics(this.files)" accept="image/*" multiple>
            </div>
            <div id="previewPictures" class="ACpreviewPics">
                ${makePreviewPics() ?? ''}
            </div>
        <div class="ACinputFields">
            <input class="ACinputItems" type='text' onchange="getName(this.value)" placeholder="Name">
            <input class="ACinputItems" type='date' onchange="getBirthday(this.value)">
            <label>Race:</label> 
            <button onclick='toggleRaces()'>Pick race</button>
                <div id="catRaces" class="ACraces">
                ${makeDropDownRaceHtml()}
                </div>
        </div>
        <textarea class="ACcatLoreField" type='text' onchange="getLore(this.value)" placeholder="Add meow lore"></textarea>
        <button onclick='postCat()'>Post my meow</button>
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

function makePreviewPics() {
  let previewPictures = '';
  for (let pics of model.input.postCat.addNewCat.pics) {
    previewPictures += /*HTML*/ `
      <img class="ACimg" src="${pics}">
      `;
  }
  let previewDiv = /*HTML*/ `
    <div class="ACcarousel">
    <div class="ACbtn1" id="previous" onclick='showSlide(-1)'>❮</div>
    <div class="ACbtn2" id="next" onclick='showSlide(1)'>❯</div>
    <div id="ACslides">${previewPictures}</div>
    </div>
    `;
  return previewDiv;
}
