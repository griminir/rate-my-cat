
function feedView() {
    let feed = model.input.feed;

    document.getElementById('app').innerHTML = /*HTML*/ `

    <div class="FVContainer">
        <select class="FVPodiumDropDown" onchange="getCurrentPodium(this.selectedIndex)">${podiumSelect()}</select>
        
        <div>${feed.currentPodium}</div>

        <div class="FVPodiumContainer">
            <div class="FV">
                <div class="FVPodiumPic3"><img src="${feed.thirdPlace.catImg}"></div> 
                <div class="FVPodium3">3 plass</div>
            </div>
            <div>
                <div class="FVPodiumPic1"><img src="${feed.firstPlace.catImg}"></div>
                <div class="FVPodium1">1 plass</div>
            </div>
            <div>
                <div class="FVPodiumPic2"><img src="${feed.secondPlace.catImg}"></div>
                <div class="FVPodium2">2 plass</div>
            </div>
        </div>

            <div class="FVFeedContainer">${getFeedLoop()}</div>
    </div>
    `;

}

// id FVcatPic er bare midlertidig for å sjekke om funksjonen funker.
// byttes ut med data av katter fra modellen etterhvert.
// har nå bytta med hardkoda bilder inn i podiumet og endra class-navn til FVPodiumPic.
// har lagt inn de hardkoda bildene i modell nå, men mangler logikk på hvordan man skal vise top rated katter.
//må huske på å legge til navn også på podium, men vet ikke helt hvordan cssen blir.

