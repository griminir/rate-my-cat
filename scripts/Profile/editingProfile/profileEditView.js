function profileEditView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
  ${makeHeader()}
  <section class="PF-profile">
    <div class="PF-container">
      <h2 class="PF-username">${model.app.loggedInUser}</h2>
      <textarea onchange="model.input.editProfile.bio=this.value" class="PE-bio">${getUserBio()}</textarea>
    </div>
    <div class="PF-container"> 
      <img class="PF-profilePic" src="${getUserPic()}"/>
      <button class="PE-editButton" onclick="saveNewProfile()">save</button>
    </div>
  </section>
  <div class="PF-cats">
    ${profileCatDisplay()}
  </div>
`;
  div.innerHTML = html;
}
