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

function makeLoginButton() {
  html = ``;
  if (model.app.isLoggedIn === false) {
    html = `<button onclick="changePage('')" class="H-button">Login</button>`;
    return html;
  } else if (model.app.isLoggedIn === true) {
    model.app.isLoggedIn = false;
    model.app.loggedInUser = null;
    model.app.admin = false;
    html = `<button onclick="changePage('')" class="H-button">Sign Out</button>`;
    return html;
  }
}
