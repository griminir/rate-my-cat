function addView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="addCatContainer">
        <h2>Add new pussy</h2>
            <div class="addImages">
                <span class="plus-button">+</span>
                <input id="fileInput" class="file-input" type='file' onchange=addPics(this.files) accept="image/*" multiple>
            </div>
            <div class="previewPics">
                ${makePreviewPics() ?? ""}
            </div>
        <div class="inputFields">
            <input class="inputItems" type='text' onchange="getName(this.value)" placeholder="Name">
            <input class="inputItems" type='date' onchange="getBirthday(this.value)">
            <label>Race:</label> 
            <button onclick='toggleRaces()'>Pick race</button>
                <div id="catRaces" class="races">
                ${makeDropDownRaceHtml()}
                </div>
        </div>
        <textarea class="catLoreField" type='text' onchange="getLore(this.value)" placeholder="Add pussy lore"></textarea>
        <button onclick='postCat()'>Post my pussy</button>
    </div>
    `;
}

function makeDropDownRaceHtml() {
  let catRacesHtml = "";
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
      <img class="img" src="${pics}">
      `;
    }
    let previewDiv = /*HTML*/ `
    <div class="carousel">
    <div class="btn1" id="previous" onclick='showSlide(-1)'>❮</div>
    <div class="btn2" id="next" onclick='showSlide(1)'>❯</div>
    <div id="slides">${previewPictures}</div>
    </div>
    `;
    return previewDiv;
  }