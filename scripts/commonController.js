function pickCat(clickedCat) {
  model.app.displayedCat = clickedCat;
  changePage("catProfile");
}

function changePage(page) {
  model.app.page = page;
  updateView();
}

function makeInteractiveStars(catId, catsRating) {
  let html = "";
  let numberOfStars = 1;
  let myRating = model.data.ratings.find(
    (rating) =>
      rating.ratedByUser === model.app.loggedInUser &&
      rating.ratedCatId === catId
  );
  const isRated = model.data.ratings.find(
    (rating) =>
      rating.ratedByUser === model.app.loggedInUser &&
      rating.ratedCatId === catId
  );

  let filledStars = myRating ? myRating.rating : 0;
  let exitFilledStars = 10 - filledStars;
  for (let i = 10; i >= numberOfStars; i--) {
    if (isRated) {
      if (exitFilledStars > 0) {
        html += /*HTML*/ `
      
        
        <div id="stars" onclick="giveRating(${i})"></div>
        `;
        exitFilledStars--;
      }else{
        html += /*HTML*/ `
        
        <div id="stars" onclick="giveRating(${i})" class="filled"></div>
      
      `;
      }
    } else {
      html += /*HTML*/ `
      
      <div id="stars" onclick="giveRating(${i})"></div>
      
      `;
    }
  }

  return html;
}


function getRatingAverage(catId) {
  let ratings = model.data.ratings.filter(
    (rating) => rating.ratedCatId === catId
  );
  let sum = 0;
  ratings.forEach((rating) => (sum += rating.rating));
  sum = (sum / ratings.length).toFixed(1);
  model.data.cats[catId].rating = sum;
  if (sum == 10.0) {
    return 10;
  } else return sum;
}

function giveRating(rating) {
  console.log(rating);
}

// function pickHoverRating(star, catId) {
//   model.input.feed.hoverRating.cat = catId;
//   model.input.feed.hoverRating.starNumber = star;
//   console.log(model.input.feed.hoverRating.starNumber);
//   updateView();
// }
