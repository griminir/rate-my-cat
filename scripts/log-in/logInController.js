function login() {
  let username = findUser();

  if (username == null) {
    model.input.logInInfo.errorMessage = 'Wrong username and/or password';
  } else {
    if (username == 'aaltofar') {
      model.app.admin = true;
    }
    model.app.page = 'feed';
    model.app.isLoggedIn = true;
    model.app.loggedInUser = username;
    model.input.logInInfo.logInUsername = null;
    model.input.logInInfo.logInPassword = null;
    model.input.logInInfo.errorMessage = null;
  }
  updateView();
}

function findUser() {
  let logInInfo = model.input.logInInfo;

  for (let user of model.data.users) {
    if (
      user.username == logInInfo.logInUsername &&
      user.password == logInInfo.logInPassword
    ) {
      return user.username;
    }
  }
  return null;
}
