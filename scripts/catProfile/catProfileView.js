function catProfileView() {
  let cats = model.data.cats;
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="CPContainer">
        <div class="CPLoreContainer">
            
            <div>
            <span class="CPLoreHeader">Pussy Lore</span><br>
            ${cats[0].lore}</div>
            <button>Report problem</button>
        </div>
        <div class="stylePolaroid">
            <div class="CPImg"><img src="${cats[0].pics[0]}"></div>
            <div class="CPName">${cats[0].name}</div>
            <div class="CPRating">${
              cats[0].rating
            }<span class="styleStar">&#11088;</span></div>
            <div class="CPAgeRace">${cats[0].age} years, ${
    model.data.catRaces[0]
  }</div>
            <div class="CPInteractiveStars">Interactive stars</div>
        </div>
        <div class="CPCommentsContainer">
            <div ><span class="CPCommenter">${
              cats[0].comments[1].commenter
            }</span> <br>
            <span class="CPComment">${cats[0].comments[1].comment}</span></div>
        </div>
        
    </div>
    
    `;
}
