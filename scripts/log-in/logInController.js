function login() {
  let username = findUser();

  if (username == null) {
    model.input.logInInfo.errorMessage = 'Wrong username and/or password';
  } else {
    model.app.page = 'feed';
    model.app.loggedInUser = username;
    model.input.logInInfo.logInUsername = null;
    model.input.logInInfo.logInPassword = null;
    model.input.logInInfo.errorMessage = null;
  }
  updateView();
}

function findUser() {
  for (let user of model.data.users) {
    if (
      user.username == model.input.logInInfo.logInUsername &&
      user.password == model.input.logInInfo.logInPassword
    ) {
      return user.username;
    }
  }
  return null;
}
