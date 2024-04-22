function getCommentLoop(catId) {
  let comments = model.data.cats[catId].comments;
  html = "";

  for (let i = 0; i < comments.length; i++) {
    html += /*hmtl*/ `
    <div ><span class="CPCommenter">${comments[i].commenter}</span> <br>
    <span class="CPComment">${comments[i].comment}</span></div>
    `;
  }
  return html;
}

function deleteCat(catId) {
  let cat = model.data.cats.find((cat) => cat.owner === model.app.loggedInUser && cat.id === catId);
  if (cat.owner === model.app.loggedInUser || model.app.admin === true) {
    // delete cat from cats
    let catIndex = model.data.cats.indexOf(cat);
    model.data.cats.splice(catIndex, 1);
    // delete cats rating from ratings
    for (let rating of model.data.ratings) {
      if (rating.ratedCatId === catId) {
        let ratingIndex = model.data.ratings.indexOf(rating);
        model.data.ratings.splice(ratingIndex, 1);
      }
    }
  };
  model.app.displayedCat = null;
  changeCatId();
  changePage('feed');
}
