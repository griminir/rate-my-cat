function changePage(page) {
  model.app.page = page;
  updateView();
}

function makeInteractiveStars(cat, rating) {

  let html = "";
  let numberOfStars = 10;
  for (let i=0; i < numberOfStars; i++) {
      html += /*HTML*/ `
      
      <div></div>
      
      `;
  }
  return html;
}
