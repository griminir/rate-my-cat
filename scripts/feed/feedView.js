function feedView() {
  let feed = model.input.feed;

  document.getElementById("app").innerHTML = /*HTML*/ `
  ${makeHeader()}
  
  <div class="FVContainer">
  <h2>${feed.podiums[feed.currentPodium].name}</h2>    
  <select class="FVPodiumDropDown" onchange="setCurrentPodium(this.value)">${makePodiumOptions()}</select>
  
  
  <div class="FVPodiumContainer">
  ${drawPodium()}
  </div>
  <h1><u>FEED</u></h1>
  <div class="FVFeedContainer">${getFeedLoop()}</div>
  </div>
  `;
}

function makePodiumOptions() {
  let html =
    /*HTML*/
    `<option selected value="3">${model.input.feed.podiums[3].name}</option>`;
  for (let i = 0; i < model.input.feed.podiums.length - 1; i++) {
    const podium = model.input.feed.podiums[i];
    html += /*HTML*/ `<option ${
      model.input.feed.currentPodium == i ? "selected" : ""
    } value="${i}">${podium.name}</option>`;
  }
  return html;
}

function drawPodium() {
  let stats = getAveragePodiumRating();
  let html = "";
  for (let i = 0; i < Math.min(3,stats.length); i++) {
    const catStats = stats[i];    
    const catId = catStats.catId;
    const catObj = model.data.cats.find(c=>c.id==catId);
    html += /*HTML*/ `
    <div class="FVPodium${i + 1}">
    <div class="FVPodiumPic"><img src="${catObj.pics[0]}"></div>
    <div class="FVPodiumNameNum${i + 1}">
    <div class="FVPodiumName${i + 1}">${catObj.name}</div>
    <div class="FVPodiumNum">${i + 1}</div>
    </div>
    </div>
    `;
  }
  return html;
}

function getAveragePodiumRating() {
  let statsForCats = {};
  for (let rating of getArrayForPodium()) {
    let catObj = statsForCats[rating.ratedCatId];
    if (!catObj) {
      catObj = { count: 0, sum: 0, catId: rating.ratedCatId };
      statsForCats[rating.ratedCatId] = catObj;
    }
    catObj.count++;
    catObj.sum += rating.rating;
  }
  
  const stats = Object.values(statsForCats);
  stats.sort((a,b)=>{
    const averageA = a.sum / a.count;
    const averageB = b.sum / b.count;
    return averageB - averageA;
  });
  return stats;
}

// function getPodiumAverageRating() {
//   // er dette en controller funksjon?
//   let copyOfCats = combineRatings(getArrayForPodium()); // cats er nå en kopi av model.data.cats med en ny property som heter ratings og er et array, som har den siste perioden med ratings i seg
//   copyOfCats.forEach((cat) => {
//     const sum = cat.ratings.reduce((sum, rating) => sum + rating, 0);
//     cat.averageRating = sum / cat.ratings.length; // her blir det laget en NY property igjen inni cats som heter averageRating som får average rating den siste perioden
//   });
//   // console.log(getTopThreeCats(cats));
//   return getTopThreeCats(copyOfCats);
// }

function combineRatings(ratings) {
  // er dette en controller funksjon?
  // ratings er et array med kattene som har blitt rate'a den siste x perioden av objekter
  let copyOfCats = JSON.parse(JSON.stringify(model.data.cats)); // kopi av cats arrayet
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i]; // rating blir satt til ett enkelt objekt med 4 properties
    for (let n = 0; n < copyOfCats.length; n++) {
      const cat = copyOfCats[n]; // cat blir til objektet som er katten, cat = oliver objektet
      if (rating.ratedCatId === cat.id) cat.ratings.push(rating.rating); // pusher rating objektet inn i oliver sitt objekt
      if (cat.ratings.length == 0) cat.ratings.push(0);
    }
  }
  return copyOfCats;
}

function getArrayForPodiumx() {
  // er dette en controller funksjon?
  const today = new Date(); // = Fri Apr 26 2024 11:01:48 GMT+0200 (Central European Summer Time)
  const dateToCheckFrom = new Date(
    today.getTime() -
      model.input.feed.podiums[model.input.feed.currentPodium].value *
        24 *
        60 *
        60 *
        1000
  ); //get time gir sekunder fra en dato i 1970-01-01 elns
  return [...model.data.ratings].filter(
    (rating) => new Date(rating.date) >= dateToCheckFrom
  );
}

function getArrayForPodium() {
  // er dette en controller funksjon?
  const timeNow = new Date().getTime();
  const dayCount =
    model.input.feed.podiums[model.input.feed.currentPodium].value;
  const timeFrom = timeNow - dayCount * 24 * 60 * 60 * 1000;
  return model.data.ratings.filter(
    (r) => new Date(r.date).getTime() >= timeFrom
  );
}

function getTopThreeCats(arr) {
  // er dette en controller funksjon?
  return [...arr]
    .sort(function (a, b) {
      return b.averageRating - a.averageRating;
    })
    .splice(0, 3);
}

function getFeedLoop() {
  let cats = model.data.cats;
  let html = "";

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
