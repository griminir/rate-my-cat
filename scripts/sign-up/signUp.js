function signUpView() {
  let div = document.getElementById('app');
  let html = /*html*/ `
    <section class="SUP-section">
      <div class="SUP-signup-box">
        <div action="">
          <h2 class="SUP-h2">
            Sign Up
          </h2>
          <div class="SUP-input-box">
            <span class="SUP-icon"><ion-icon name="person"></ion-icon></span>
            <input class="SUP-input" onchange="model.input.userRegistration.username=this.value" value="${
              model.input.userRegistration.username ?? ''
            }" type="text" required/>
            <label class="SUP-label">Username</label>
          </div>
          <div class="SUP-input-box">
            <span class="SUP-icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input class="SUP-input" onchange="model.input.userRegistration.password=this.value" value="${
              model.input.userRegistration.password ?? ''
            }" type="password" required/>
            <label class="SUP-label">Password</label>
          </div>
          <div class="SUP-input-box">
            <span class="SUP-icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input class="SUP-input" onchange="model.input.userRegistration.repeatPassword=this.value" value="${
              model.input.userRegistration.repeatPassword ?? ''
            }" type="password" required/>
            <label class="SUP-label">Repeat Password</label>
          </div>
          <div class="SUP-error">${
            model.input.logInInfo.errorMessage ?? ''
          }</div>
          <button class="SUP-button" onclick="" >Sign Up</button>
          <div class="SUP-login-link">
            <p class="SUP-para">Have an account? <a onclick="changePage('')" class="SUP-link" href="#">Login</a></p>
          </div>
        </div>
      </div>
    </section>
  `;

  div.innerHTML = html;
}
