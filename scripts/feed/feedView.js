function feedView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="FVContainer">
    <select class="FVPodiumDropDown" onchange="getCurrentPodium(this.selectedIndex)">${podiumSelect()}</select>
    </div>
    <div>${model.input.feed.currentPodium}</div>

    <div class="FVPodiumContainer">
        <div id="FVcatPic1"></div>
        <div id="FVcatPic"></div>
        <div id="FVcatPic"></div>
        <div class="FVPodium3">3 plass</div>
        <div class="FVPodium1">1 plass</div>
        <div class="FVPodium2">2 plass</div>
        </div>

    <div class="FVContainer">
        <div>${getFeedLoop()}</div>
    </div>

    `;

}

// id FVcatPic er bare midlertidig for å sjekke om funksjonen funker.
// byttes ut med data av katter fra modellen etterhvert.

// neste: gjøre ferdig getFeedLoop