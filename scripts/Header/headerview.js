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
          <li class="H-li"><a onclick="loggedInCheck('catAdd')" class="H-a" href="#">Add Pussy</a></li>
          <li class="H-li"><a onclick="loggedInCheck('catEdit')" class="H-a" href="#">Edit Pussy</a></li>
        </ul>
      </nav>
      
      ${makeLoginButton()}
    </header>
  `;

  return html;
}
