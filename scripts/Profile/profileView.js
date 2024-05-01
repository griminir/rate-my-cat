function profileView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
  ${makeHeader()}
  <section class="PF-profile">
    <div class="PF-container">
      <h2 class="PF-username">${model.app.loggedInUser}</h2>
      <div class="PF-bio">${getUserBio()}</div>
    </div>
    <div class="PF-container"> 
      <img class="PF-profilePic" src="${getUserPic()}"/>
      <button class="PF-editButton" onclick="changePage('profileEdit')">edit</button>
    </div>
  </section>
  <div class="PF-cats">
    ${profileCatDisplay()}
  </div>
`;
  div.innerHTML = html;
}

function profileCatDisplay() {
  let cat = profileGetUserCatsLoop();
  let html = '';

  for (let i = 0; i < cat.length; i++) {
    html += /*HTML*/ `
  <div class="Ppolaroid">
    <div class="PimgDiv"><img onclick="${(model.app.displayedCat =
      cat[i].id)};pickCat('${cat[i].id}')" src="${cat[i].pics[0]}"/></div>
    <div class="PcatName">${cat[i].name}</div>
    <div class="CPRating">${getRatingAverage(
      cat[i].id
    )}<span class="styleStar">&#11088;</span></div>
    </div>
    `;
  }
  return html;
}

function getUserBio() {
  for (user of model.data.users) {
    if (user.username == model.app.loggedInUser) {
      return user.bio;
    } else {
      return null;
    }
  }
}

function getUserPic() {
  for (user of model.data.users) {
    if (user.username == model.app.loggedInUser) {
      return user.profilePic;
    } else {
      return null;
    }
  }
}

function profileGetUserCatsLoop(rightOwner) {
  let cats = model.data.cats;
  rightOwner = model.app.loggedInUser;
  let rightCats = cats.filter((cat) => cat.owner.includes(rightOwner));
  return rightCats;
}
