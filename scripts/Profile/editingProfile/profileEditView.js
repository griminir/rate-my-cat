function profileEditView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
  ${makeHeader()}
  <section class="PF-profile">
    <div class="PF-container">
      <h2 class="PF-username">${model.app.loggedInUser}</h2>
      <textarea onchange="model.input.editProfile.bio=this.value" value="model.input.editProfile.bio" class="PE-bio">${getUserBio()}</textarea>
    </div>
    <div class="PF-container"> 
      <div class="PE-profilePic"><input id="PEFileInput" class="PEFile-input" type='file' onchange="newProfilePic(this.files)" accept="image/*"><ion-icon class="PEIcon" name="build"></ion-icon>
      ${getNewProfilePic() ?? ''}
      </div>
      <button class="PE-editButton" onclick="saveNewProfile()">save</button>
    </div>
  </section>
  <div class="PF-cats">
    ${profileCatDisplay()}
  </div>
`;
  div.innerHTML = html;
}

/* <img class="PE-profilePic" src="${getUserPic()}"/><img class="PE-profilePic" src="${getUserPic()}"/> */

function getNewProfilePic() {
  return /*HTML*/ `
  <img src="${model.input.editProfile.profilePic}">
  `;
}
