function addView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="addCatContainer">
    <h2>Add new pussy</h2>
    <div class="addImages">
    <input type='file' onchange=addPics()>
    </div>
    <div class="inputFields">
    <input type='text' onchange="getName(this.value)" placeholder="Name">
    <input type='date' onchange="getBirthday(this.value)" placeholder="Birthday">
    <label for="dog-names">Race:</label> 
    <button onclick='toggleRaces()'>Pick race</button>
    <div id="catRaces" class="races">
    ${makeDropDownRaceHtml()}
    </div>
    </div>
    <button onclick='addCatLore()'>Add pussy lore</button>
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

