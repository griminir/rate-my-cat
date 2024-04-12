function catProfileView() {
  let cats = model.data.cats;
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="CPContainer">
        <div class="CPLoreContainer">
            
            <div>
              <h3 class="CPLoreHeader">Pussy Lore</h3><br>
              <span class="CPLoreText">${cats[0].lore ?? 'This cat has done nothing of significance'}</span>
            </div>
            <button class="CPLoreButton" >Report problem</button>
        </div>

        <div class="stylePolaroid">
            <div class="CPImg"><img src="${cats[0].pics[0]}"></div>

            <div class="CPPolaroidFirstText">
              <span class="CPName">${cats[0].name}</span>
              <span class="CPRatingStar">
                <span class="CPRating">${cats[0].rating}</span>
                <span class="styleStar">&#11088;</span>
              </span>
            </div>

            <div class="CPAgeRace">
            ${cats[0].age} years, ${cats[0].race}
            </div>
            <div class="CPInteractiveStars">Interactive stars</div>
        </div>
        <div class="CPCommentsContainer">
        <h3 class="CPCommentsHeader">Comments</h3>
        ${getCommentLoop(0)}
        </div>
        
    </div>
    
    `;
}
