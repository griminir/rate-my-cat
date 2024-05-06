function saveNewProfile() {
  changeProfilePicInData();
  updateBio();
  changePage('profile');
}

function newProfilePic(file) {
  model.input.editProfile.profilePic = URL.createObjectURL(file[0]);
  updateView();
}

function changeProfilePicInData() {
  let profilePic = model.input.editProfile.profilePic;
  let user = model.data.users.find(
    (user) => model.app.loggedInUser === user.username
  );
  if (profilePic != '') {
    user.profilePic = profilePic;
  }
}

function updateBio() {
  let bio = model.input.editProfile.bio;
  let user = model.data.users.find(
    (user) => model.app.loggedInUser === user.username
  );
  if (bio != '') user.bio = bio;
}
