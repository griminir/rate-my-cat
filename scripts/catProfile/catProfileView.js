function catProfileView() {
  let cat = model.data.cats;
  let catId = model.app.displayedCat;
  // let catId = 2;

  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="CPContainer">
        <div class="CPLoreContainer">
            
            <div>
              <h3 class="CPLoreHeader">Meow Lore</h3><br>
              <span class="CPLoreText">${
                cat[catId].lore ?? 'This cat has done nothing of significance'
              }</span>
            </div>
            <button class="CPLoreButton" >Report problem</button>
        </div>

        <div class="stylePolaroid">
            <div class="CPImg">
            <div class="CPArrowBtn" onclick="CPswapPic(-1)">❮</div>
            <div class="CPArrowBtn" onclick="CPswapPic(1)">❯</div>
            <img src="${cat[catId].pics[model.data.showSlide]}">
            </div>

            <div class="CPPolaroidFirstText">
              <span class="CPName">${cat[catId].name}</span>
              <span class="CPRatingStar">
                <span class="CPRating">${getRatingAverage(cat[catId].id)}</span>
                <span class="styleStar">&#11088;</span>
              </span>
            </div>

            <div class="CPAgeRace">
            ${cat[catId].age} years, ${cat[catId].race}
            </div>
            <div class="CPInteractiveStars">Interactive stars</div>
        </div>
        <div class="CPCommentsContainer">
        <h3 class="CPCommentsHeader">Comments</h3>
        ${getCommentLoop(catId)}
        </div>
        
    </div>
    
    `;
}

function CPswapPic(toPage) {
  let catId = model.app.displayedCat;
  let pics = model.data.cats[catId].pics;
  let showSlide = model.data.showSlide;
  if (toPage == -1 && showSlide == 0) {
    model.data.showSlide = pics.length - 1;
  } else if (toPage == 1 && showSlide == pics.length - 1) {
    model.data.showSlide = 0;
  } else {
    model.data.showSlide += toPage;
  }
  updateView();
}
