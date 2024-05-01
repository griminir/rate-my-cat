function pickCat(clickedCat) {
  model.app.displayedCat = clickedCat;
  changePage('catProfile');
}

function changePage(page) {
  model.app.page = page;
  model.data.showSlide = 0;
  updateView();
}

function makeInteractiveStars(catId) {
  let html = '';
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
      } else {
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
  let catIndex = model.data.cats.findIndex((cat) => cat.id == catId);
  model.data.cats[catIndex].timesRated = ratings.length;
  let sum = 0;
  ratings.forEach((rating) => (sum += rating.rating));
  sum = (sum / ratings.length).toFixed(1);
  if (sum == 10.0) {
    return 10;
  } else if (ratings.length === 0) {
    return 0;
  } else return sum;
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
    if (model.app.isLoggedIn) {
      model.data.ratings.push({
        ratedCatId: catId,
        ratedByUser: model.app.loggedInUser,
        rating: rating,
        date: new Date(),
      });
    } else {
      playWahWahAudio();
      setTimeout(function () {
        alert('Please log in to rate a cat!');
      }, 100);
    }
  }
  updateView();
}

function playWahWahAudio() {
  let wah = new Audio('audio/wah-wah.mp3');
  wah.volume = 0.1;
  wah.play();
}

function updateCatAge() {
  model.data.cats.forEach(
    (cat) => (cat.dateOfBirth = getUpdateAge(cat.dateOfBirth))
  );
}

function getUpdateAge(birthday) {
  // Parse the birthdate string into a Date object
  let dob = new Date(birthday);

  // Get the current date
  let currentDate = new Date();

  // Calculate the time difference in milliseconds
  let timeDiff = currentDate.getTime() - dob.getTime();

  // Calculate the age based on the time difference
  let age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

  return age;
}
