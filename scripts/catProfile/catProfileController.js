function getCommentLoop(catId) {
  let catIndex = model.data.cats.findIndex(cat => cat.id == catId);
  let comments = model.data.cats[catIndex].comments;
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
  let cat = model.data.cats.find(
    (cat) => cat.id === catId
  );
  if (cat.owner === model.app.loggedInUser || model.app.admin) {
    if (!model.input.viewCat.deleteCat) {
      alert(
        "Are you sure you want to delete this cat? click the delete button again to confirm"
      );
      model.input.viewCat.deleteCat = true;
    } else {
      trulyDeleteCat(catId);
      model.input.viewCat.deleteCat = false;
    }
  } else {
    alert("You can't delete someone else's cat!");
  }
}

function trulyDeleteCat(catId) {
  let cat = model.data.cats.find(
    (cat) => cat.id === catId
  );
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
  // delete reports about this cat
  for (let i = 0; i < model.data.admin.reports.length; i++) {
    if (model.data.admin.reports[i].reportedCatId === catId) {
      model.data.admin.reports.splice(i, 1);
      i--;
    }
  }
  model.app.displayedCat = null;
  
  // changeCatId();
  changePage("feed");
}

function postComment(catId) {
  const theCommenter = model.app.loggedInUser;
  let theComment = model.input.viewCat.comment.comment;
  let catIndex = model.data.cats.findIndex(cat => cat.id == catId);

  model.data.cats[catIndex].comments.push({
    commenter: theCommenter,
    comment: theComment,
  });
  model.input.viewCat.comment.comment = null;
  updateView();
}
function playMeowAudio() {
  let meow = new Audio("audio/funny-meow-110120.mp3");
  meow.volume = 0.1;
  meow.play();
}
