function profileView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
  <section class="profile">
    <div class="username">name here</div>
    <h2 class="bio">bio here</h2>
    <button class="editButton" onclick="edit()" >edit</button>
  </section>
`;
  div.innerHTML = html;
}
