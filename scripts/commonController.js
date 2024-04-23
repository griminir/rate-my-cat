function pickCat(clickedCat) {
  model.app.displayedCat = clickedCat;
  changePage("catProfile");
}

function changePage(page) {
  model.app.page = page;
  updateView();
}

function makeInteractiveStars(catId) {
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
      
        
        <div id="stars" onclick="giveRating(${i}, ${catId})"></div>
        `;
        exitFilledStars--;
      }else{
        html += /*HTML*/ `
        
        <div id="stars" onclick="giveRating(${i}, ${catId})" class="filled"></div>
      
      `;
      }
    } else {
      html += /*HTML*/ `
      
      <div id="stars" onclick="giveRating(${i}, ${catId})"></div>
      
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
  } else if (ratings.length === 0) {
    return 0;
  }else return sum;
}

function giveRating(rating, catId) {
  let myRating = model.data.ratings.find(
    (rating) =>
      rating.ratedByUser === model.app.loggedInUser &&
      rating.ratedCatId === catId
  );
  if (myRating) {
    myRating.rating = rating;
  } else {
    model.data.ratings.push(
      {
        ratedCatId: catId,
        ratedByUser: model.app.loggedInUser,
        rating: rating,
      }
    )
  };
  updateView();
  }

  function changeCatId() {
    let cats = model.data.cats;
    for (let i = 0; i < cats.length; i++) {
      let catIndex = cats.indexOf(cats[i]);
      model.data.cats[i].id = catIndex;
    }

  }


// function pickHoverRating(star, catId) {
//   model.input.feed.hoverRating.cat = catId;
//   model.input.feed.hoverRating.starNumber = star;
//   console.log(model.input.feed.hoverRating.starNumber);
//   updateView();
// }
