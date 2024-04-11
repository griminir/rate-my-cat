function makeHeader() {
  let html = /*html*/ `
    <header>
      <img class="H-logo" src="img/RMP_transparent_color_border.png" alt="logo" onclick="changePage('feed')" />
      <nav class="H-nav">
        <ul class="H-nav-links">
          <li class="H-li"><a href="#">${
            model.app.loggedInUser ?? 'profile'
          }</a></li>
          <li class="H-li"><a href="#">${
            model.app.loggedInUser ?? 'profile'
          }</a></li>
        </ul>
      </nav>
    </header>
  `;

  return html;
}
