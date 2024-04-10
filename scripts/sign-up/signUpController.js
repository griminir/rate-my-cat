function signUp() {
  let user = checkUniqueUser();
  let password = samePassword();

  if (user === null && password != null) {
    model.input.logInInfo.errorMessage = 'Username already taken';
  } else if (user != null && password === null) {
    model.input.logInInfo.errorMessage = 'Passwords do not match';
  } else if (user === null && password === null) {
    model.input.logInInfo.errorMessage =
      'Username already taken & Password does not match';
  } else {
    saveNewUser();
    //kunne sikkert trukket dette ut i en egen funksjon men like leselig hær
    model.app.page = '';
    model.input.logInInfo.errorMessage = '';
    model.input.userRegistration.username = '';
    model.input.userRegistration.password = '';
    model.input.userRegistration.repeatPassword = '';
  }
  updateView();
}

function checkUniqueUser() {
  for (let user of model.data.users) {
    if (model.input.userRegistration.username == user.username) {
      return null;
    }
  }
  return model.input.userRegistration.username;
}

function samePassword() {
  if (
    model.input.userRegistration.password ===
    model.input.userRegistration.repeatPassword
  ) {
    return model.input.userRegistration.password;
  }
  return null;
}

function saveNewUser() {
  model.data.users.push({
    username: model.input.userRegistration.username,
    password: model.input.userRegistration.password,
    bio: '',
    profilePic: '',
  });
}
