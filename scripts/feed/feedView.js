
function feedView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="FVContainer">
    <select class="FVPodiumDropDown" onchange="getCurrentPodium(this.selectedIndex)">${podiumSelect()}</select>
    
    <div>${model.input.feed.currentPodium}</div>

    <div class="FVPodiumContainer">
        <div class="FVPodiumPic3"><img src="img/catPictures/bianca1.jpg"></div> 
        <div class="FVPodiumPic1"><img src="img/catPictures/bianca1.jpg"></div>
        <div class="FVPodiumPic2"><img src="img/catPictures/bianca1.jpg"></div>
        <div class="FVPodium3">3 plass</div>
        <div class="FVPodium1">1 plass</div>
        <div class="FVPodium2">2 plass</div>
        </div>

        <div class="FVFeedContainer">${getFeedLoop()}</div>
    </div>
    `;

}

// id FVcatPic er bare midlertidig for å sjekke om funksjonen funker.
// byttes ut med data av katter fra modellen etterhvert.
// har nå bytta med hardkoda bilder inn i podiumet og endra class-navn til FVPodiumPic.

