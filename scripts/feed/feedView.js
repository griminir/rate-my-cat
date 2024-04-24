// lage et sorted array av alle kattene som har blitt rate'a den siste uka
// finne average rating til hver katt som har blitt rate'a den siste uka
// kjør getTopThree på det arrayet

function sortPodium() {
  // return [...model.data.ratings].sort(function (a, b) {
  //   return new Date(b.date) - new Date(a.date);
  // });
  return [...model.data.ratings].sort(function (a, b) {
    return b.rating - a.rating;
  });
} // denne funksjonen returnerer et array ved hjelp av spread (...). Så sorterer den det "nye"
// arrayet ved å sjekke a og b (som er objekter i arrayet) opp mot hverandre. Den høyeste ratingen blir først.

function getArrayOfPastWeekRatedCats() {
  const today = new Date();
  const pastWeekStart = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  return model.data.ratings.filter(
    (rating) => new Date(rating.date) >= pastWeekStart
  );
}

function getWeeklyAverageRating() {
  const sortedArrayOfPastWeekCats = getArrayOfPastWeekRatedCats();
  let averageRatedCatsWeek = [];
  for (let cat of sortedArrayOfPastWeekCats) {
    let sum = 0;
    let catsRating = [];
    catsRating.push(cat.rating);
    catsRating.forEach((rating) => (sum += rating));
    sum = sum / catsRating.length;
    averageRatedCatsWeek.push({
      catId: cat.ratedCatId,
      averageRating: sum,
    });
  }
  return averageRatedCatsWeek
    .sort(function (a, b) {
      return b.averageRating - a.averageRating;
    })
    .splice(0, 3);
}

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
    <div class="FVFeedPolaroidLoop">
        <div class="stylePolaroid">
            <div class="FVFeedCatPics"><img onclick="pickCat('${
              cats[i].id
            }');" src="${cats[i].pics[cats[i].pics.length - 1]}"></div>
            <div class="FVFeedFirstText">
                <div class="FVFeedCatName">${cats[i].name}</div>
                <div class="FVFeedCatAgeRace">${cats[i].age}, ${
      cats[i].race[0]
    } </div> 
                <div class="FVFeedCatRating">${getRatingAverage(
                  cats[i].id
                )}<span class="styleStar">&#11088;</span></div>
            </div>
            <div class="styleCatInteractiveStars">${makeInteractiveStars(
              cats[i].id,
              getRatingAverage(cats[i].id)
            )}</div>
            <img onclick="pickCat('${
              cats[i].id
            }');" class="FVCommentBubble" src="${model.data.img[0]}"></div>
        </div>
        `;
  }
  return html;
}
