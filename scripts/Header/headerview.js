function makeHeader() {
  let html = /*html*/ `
    <header>
      <img class="H-logo" src="img/RMP_transparent_color_border.png" alt="logo" onclick="changePage('feed')" />
      <nav class="H-nav">
        <ul class="H-nav-links">
          <li class="H-li"><a class="H-a" onclick="loggedInCheck1()" href="#">${
            model.app.loggedInUser ?? 'profile'
          }</a></li>
          <li class="H-li H-2-1"><a class="H-a" href="#">Post My Pussy</a>
            <div onclick="loggedInCheck2()" class="H-option"> Add Pussy</div>
            <div onclick="loggedInCheck3()" class="H-option"> Edit Pussy</div> 
          </li>
        </ul>
      </nav>
      <button class="H-Button">Login</button>
    </header>
  `;

  return html;
}
