function makeHeader() {
  let html = /*html*/ `
    <header class="H-header">
      <audio id="easterEgg" src="audio/cursedEasterEgg.mp3"></audio>
      <img class="H-logo" src="img/RMP_transparent_color_border.png" alt="logo" onclick="easterEgg()" />
      <nav class="H-nav">
        <ul class="H-nav-links">
          <li class="H-li"><a class="H-a" onclick="loggedInCheck('profile')" href="#">${
            model.app.loggedInUser ?? 'Profile'
          }</a></li>
          <li class="H-li"><a onclick="loggedInCheck('catAdd')" class="H-a" href="#">Add Meow</a></li>
          <li class="H-li"><a onclick="loggedInCheck('catEdit')" class="H-a" href="#">Edit Meow</a></li>
          ${adminAccess()}
        </ul>
      </nav>
      
      ${makeLoginButton()}
    </header>
  `;

  return html;
}

function adminAccess() {
  html = '';
  if (model.app.admin) {
    html = /*html*/ `
    <li class="H-li"><a onclick="changePage('admin')" class="H-a" href="#">Admin</a></li>
    `;
    return html;
  } else {
    return '';
  }
}

function makeLoginButton() {
  html = ``;
  if (!model.app.isLoggedIn) {
    html = `<button onclick="changePage('')" class="H-button">Login</button>`;
    return html;
  } else if (model.app.isLoggedIn) {
    html = `<button onclick="signOut()" class="H-button">Sign Out</button>`;
    return html;
  }
}
