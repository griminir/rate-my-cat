function pickCat(clickedCat) {
  model.app.displayedCat = clickedCat;
}

function changePage(page) {
  model.app.page = page;
  updateView();
}

function makeInteractiveStars(cat) {

  let html = "";
  let numberOfStars = 10;
  for (let i=0; i < numberOfStars; i++) {
      html += /*HTML*/ `
      
      <div></div>
      
      `;
  }
  return html;
}

function getRatingAverage(catId) {
  let cat = model.data.cats.find(cat => cat.id === catId);
  let sum = 0;
  cat.rating.forEach(rating => sum += rating);
  sum = (sum/cat.rating.length).toFixed(1);
  if (sum == 10.0) {
    return 10;
  } else return sum;
}