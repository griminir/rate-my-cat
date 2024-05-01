function loggedInCheck(rightpage) {
  if (model.app.isLoggedIn) {
    changePage(rightpage);
  } else {
    changePage('');
  }
}

function easterEgg() {
  if (model.app.page === 'feed') {
    playSound();
  } else {
    changePage('feed');
  }
}

function playSound() {
  document.getElementById('easterEgg').play();
}

function signOut() {
  model.app.isLoggedIn = false;
  model.app.loggedInUser = null;
  model.app.admin = false;
  changePage('');
}
