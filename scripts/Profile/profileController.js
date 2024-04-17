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

//sette rightOwner til hvem enn sin profil du er inne på.
