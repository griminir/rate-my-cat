function profileView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
  <section class="PF-profile">
    <div class="PF-container">
      <div class="PF-username">${model.app.loggedInUser}</div>
      <h4 class="PF-bio">${getUserBio()}</h4>
    </div>
    <div class="PF-container"> 
      <img class="PF-profilePic" src="${getUserPic()}"/>
      <button class="PF-editButton" onclick="edit()">edit</button>
    </div>
  </section>
  <section class="PF-cats">
    ${getUserCatsLoop()}
  </section>
`;
  div.innerHTML = html;
}
