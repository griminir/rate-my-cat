function feedView() {
  let feed = model.input.feed;

  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}

    <div class="FVContainer">
        <select class="FVPodiumDropDown" onchange="getCurrentPodium(this.selectedIndex)">${podiumSelect()}</select>
        
        
        <div class="FVPodiumContainer">
        
        <div class="FVPodium2">
                <div class="FVPodiumPic2"><img src="${
                  feed.secondPlace.catImg
                }"></div>
                    <div class="FVPodiumNameNum2">
                        <div class="FVPodiumName2">${
                          feed.secondPlace.catName
                        }</div>
                        <div class="FVPodiumNum2">2</div>
                    </div>
            </div>
            
            <div class="FVPodium1">
                <div class="FVPodiumPic1"><img src="${
                  feed.firstPlace.catImg
                }"></div>
                    <div class="FVPodiumNameNum1">
                        <div class="FVPodiumName1">${
                          feed.firstPlace.catName
                        }</div>
                        <div class="FVPodiumNum1">1</div>
                    </div>
            </div>
            
            <div class="FVPodium3">
                <div class="FVPodiumPic3"><img src="${
                  feed.thirdPlace.catImg
                }"></div>
                    <div class="FVPodiumNameNum3">
                        <div class="FVPodiumName3">${
                          feed.thirdPlace.catName
                        }</div>
                        <div class="FVPodiumNum3">3</div>
                    </div>
            </div>
        </div>

            <div class="FVFeedContainer">${getFeedLoop()}</div>
    </div>
    `;
}
function getFeedLoop() {
  let cats = model.data.cats;
  let html = '';

  for (let i = 0; i < cats.length; i++) {
    html += /*HTML*/ `
        <div class="stylePolaroid">
            <div class="FVFeedCatPics"><img onclick="pickCat('${cats[i].id}');changePage('catProfile');" src="${
              cats[i].pics[cats[i].pics.length - 1]
            }"></div>
            <div class="FVFeedFirstText">
                <div class="FVFeedCatName">${cats[i].name}</div>
                <div class="FVFeedCatAgeRace">${cats[i].age}, ${cats[i].race} </div> 
                <div class="FVFeedCatRating">${
                  getRatingAverage(cats[i].id)
                }<span class="styleStar">&#11088;</span></div>
            </div>
            <div class="FVFeedCatInteractiveStars">${makeInteractiveStars(cats[i].id)}</div>
            <div class="FVFeedCatCommentBoxContainer"><textarea class="FVFeedCatCommentBox" placeholder="Enter your comment here..."></textarea></div>
        </div>
        `;
  }
  return html;
}

