function logInView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
    ${makeHeader()}
    <section class="LIP-section">
      <div class="LIP-login-box">
        <div action="">
          <h2 class="LIP-h2">
            Login
          </h2>
          <div class="LIP-input-box">
            <span class="LIP-icon"><ion-icon name="person"></ion-icon></span>
            <input class="LIP-input" onchange="model.input.logInInfo.logInUsername=this.value" value="${
              model.input.logInInfo.logInUsername ?? ''
            }" type="text" required/>
            <label class="LIP-label">Username</label>
          </div>
          <div class="LIP-input-box">
            <span class="LIP-icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input class="LIP-input" onchange="model.input.logInInfo.logInPassword=this.value" value="${
              model.input.logInInfo.logInPassword ?? ''
            }" type="password" required/>
            <label class="LIP-label">Password</label>
          </div>
          <div class="LIP-error">${
            model.input.logInInfo.errorMessage ?? ''
          }</div>
          <button class="LIP-button" onclick="login()" >Login</button>
          <div class="LIP-register-link">
            <p class="LIP-para">Don't have an account? <a onclick="changePage('signUp')" class="LIP-link" href="#">Register</a></p>
          </div>
        </div>
      </div>
    </section>
  `;

  div.innerHTML = html;
}
