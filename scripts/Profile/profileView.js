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
      <button class="PF-editButton" onclick="edit()">edit</button>
    </div>
  </section>
  <section class="PF-cats">
    cats here
  </section>
`;
  div.innerHTML = html;
}
