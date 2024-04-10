function signUp() {
  let user = checkUniqueUser();
  let password = samePassword();

  if (user === null && password != null) {
    model.input.logInInfo.errorMessage = 'Username already taken';
  } else if (user != null && password === null) {
    model.input.logInInfo.errorMessage = 'Passwords do not match';
  }
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
