// lage et sorted array av alle kattene som har blitt rate'a den siste uka
// finne average rating til hver katt som har blitt rate'a den siste uka
// kjør getTopThree på det arrayet

// function sortPodium() {
//   // return [...model.data.ratings].sort(function (a, b) {
//   //   return new Date(b.date) - new Date(a.date);
//   // });
//   return [...model.data.ratings].sort(function (a, b) {
//     return b.rating - a.rating;
//   });
// } // denne funksjonen returnerer et array ved hjelp av spread (...). Så sorterer den det "nye"
// arrayet ved å sjekke a og b (som er objekter i arrayet) opp mot hverandre. Den høyeste ratingen blir først.

// function getPodiumAverageRating() {
//   let combinedRatings = combineRatings(getArrayForPodium());
//   let averageRatedCats = [];
//   for (let cat of combinedRatings) {
//     // model.data.ratings.map((rating) => {
//     //   const cat = model.data.cats.find((cat) => cat.id === rating.ratedCatId);

//     let sum = 0;
//     let catsRating = [];
//     catsRating.push(cat.rating);
//     // catsRating.forEach((rating) => (sum += rating));
//     // sum = sum / catsRating.length;

//     averageRatedCats.push({
//       catId: cat.ratedCatId,
//       averageRating: catsRating.reduce((a, b) => a + b) / catsRating.length,
//     });
//   }
//   return getTopThreeCats(averageRatedCats);
// }

function getArrayForPodium() {
  const today = new Date(); // = Wed Apr 24 2024 12:40:10 GMT+0200 (Central European Summer Time)
  const dateToCheckFrom = new Date(
    today.getTime() -
      model.input.feed.podiums[model.input.feed.currentPodium] *
        24 *
        60 *
        60 *
        1000
  );
  return model.data.ratings.filter(
    (rating) => new Date(rating.date) >= dateToCheckFrom
  );
}

function combineRatings(ratings) {
  let cats = [...model.data.cats];
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    for (let n = 0; n < cats.length; n++) {
      const cat = array[n];
      if (rating.ratedCatId == cat.catId) cat.ratings.push(rating);
    }
  }
  return cats;
}

function getPodiumAverageRating() {
  let cats = combineRatings(getArrayForPodium());
  cats.forEach((cat) => {
    const sum = cat.ratings.reduce((cat, rating) => cat + rating, 0);
    cat.averageRating = sum / cat.ratings.length;
  });

  return getTopThreeCats(cats);
}

function getTopThreeCats(arr) {
  return arr
    .sort(function (a, b) {
      return b.averageRating - a.averageRating;
    })
    .splice(0, 3);
}
function makePodiumOptions() {
  let html =
    /*HTML*/
    `<option selected value="3">${model.input.feed.podiums[3].name}</option>`;
  for (let i = 0; i < model.input.feed.podiums.length - 1; i++) {
    const podium = model.input.feed.podiums[i];
    html += /*HTML*/ `<option ${
      model.input.feed.currentPodium == i ? 'selected' : ''
    } value="${i}">${podium.name}</option>`;
  }
  return html;
}

function drawPodium() {
  let html = '';
  let cats = getPodiumAverageRating();
  for (let i = 0; i < cats.length; i++) {
    html += /*HTML*/ `
  <div class="FVPodium${i + 1}">
    <div class="FVPodiumPic"><img src="${cats[i].pics[0]}"></div>
    <div class="FVPodiumNameNum${i + 1}">
      <div class="FVPodiumName${i + 1}">${cats[i].name}</div>
      <div class="FVPodiumNum">${i + 1}</div>
    </div>
  </div>
`;
  }
  return html;
}

function feedView() {
  let feed = model.input.feed;

  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}

    <div class="FVContainer">
    <h2>${
      model.input.feed.podiums[model.input.feed.currentPodium].name
    }</h2>    
    <select class="FVPodiumDropDown" onchange="setCurrentPodium(this.value)">${makePodiumOptions()}</select>
        
        
        <div class="FVPodiumContainer">
        ${drawPodium()}
        </div>
          <h1><u>FEED</u></h1>
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
