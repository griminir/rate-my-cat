function loggedInCheck1() {
  if (model.app.isLoggedIn === true) {
    changePage('profile');
  } else {
    changePage('');
  }
}

function loggedInCheck2() {
  if (model.app.isLoggedIn === true) {
    changePage('catAdd');
  } else {
    changePage('');
  }
}

function loggedInCheck3() {
  if (model.app.isLoggedIn === true) {
    changePage('catEdit');
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
