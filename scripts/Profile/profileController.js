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

function getUserCatsLoop() {}
