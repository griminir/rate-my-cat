function makeHeader() {
  let html = /*html*/ `
    <header class="H-header">
      <img class="H-logo" src="img/RMP_transparent_color_border.png" alt="logo" onclick="changePage('feed')" />
      <nav class="H-nav">
        <ul class="H-nav-links">
          <li class="H-li"><a class="H-a" onclick="loggedInCheck1()" href="#">${
            model.app.loggedInUser ?? 'Profile'
          }</a></li>
          <li class="H-li"><a onclick="loggedInCheck2()" class="H-a" href="#">Add Pussy</a></li>
          <li class="H-li"><a onclick="loggedInCheck3()" class="H-a" href="#">Edit Pussy</a></li>
        </ul>
      </nav>
      <button onclick="changePage('')" class="H-button">Login</button>
    </header>
  `;

  return html;
}