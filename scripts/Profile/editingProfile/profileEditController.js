function saveNewProfile() {
  changePage('profile');
}

function newProfilePic() {
  model.input.editProfile.profilePic = URL.createObjectURL(PEFileInput);
  updateView();
}

function getProfilePicFromPC() {}
