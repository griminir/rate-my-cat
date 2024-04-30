function catProfileView() {
  let cat = model.data.cats;
  let catId = model.app.displayedCat;
  let catIndex = model.data.cats.findIndex(cat => cat.id == catId);
  // let catId = 2;

  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="CPContainer">
        <div class="CPLoreContainer">
        
            <div>
              <h3 class="CPLoreHeader">Meow Lore</h3><br>
              <span class="CPLoreText">${
                cat[catIndex].lore ?? 'This cat has done nothing of significance'
              }</span>
            </div>
            <button class="CPLoreButton" >Report problem</button>
        </div>

        <div class="stylePolaroid">
        <button class="CPdelete" onclick='deleteCat(${catIndex})'>X</button>
            <div class="CPImg">
            <div class="CPArrowBtn" onclick="CPswapPic(-1)">❮</div>
            <img onclick="playMeowAudio ()"src="${cat[catIndex].pics[model.data.showSlide]}">
            <div class="CPArrowBtn" onclick="CPswapPic(1)">❯</div>
            </div>

            <div class="CPPolaroidFirstText">
              <span class="CPName">${cat[catIndex].name}</span>
              <span class="CPRatingStar">
                <span class="CPRating">${getRatingAverage(cat[catIndex].id)}</span>
                <span class="styleStar">&#11088;</span>
              </span>
            </div>
            <div class="CPRatedTimes">rated ${cat[catIndex].timesRated} times</div>

            <div class="CPAgeRace">
            ${cat[catIndex].age} y/o, ${cat[catIndex].race}
            </div>
            <div class="styleCatInteractiveStars">${makeInteractiveStars(
              cat[catIndex].id, getRatingAverage(cat[catIndex].id)
            )}</div>
        </div>
        <div class="CPCommentsContainer">
        <h3 class="CPCommentsHeader">Comments</h3>
        <div class="CPCommentsLoop">${getCommentLoop(catIndex)}</div>
        <div class="CPCommentButtonContainer"><input class="CPcommentField" onchange="model.input.viewCat.comment.comment=this.value"  type="text" placeholder= "comment..." />
        <button onclick="postComment(${catIndex})" class="CPcommentButton">⤳</button></div>
        </div>
        
    </div>
    
    `;
}

function CPswapPic(toPage) {
  let catId = model.app.displayedCat;
  let catIndex = model.data.cats.findIndex(cat => cat.id == catId);
  let pics = model.data.cats[catIndex].pics;
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
