function adminView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="A-container">
    <div class="A-usersList">${adminUsersLoop()}</div>
    <div class="A-issueList">${adminIssuesLoop()}</div>

    </div>
    `;
}

function adminUsersLoop() {
  let users = model.data.users;
  let html = /*HTML*/ `
  <h2><u>All users:</u></h2>
  `;

  for (let i = 1; i < users.length; i++) {
    html += /*HTML*/ `
    <div class="A-userDiv">${users[i].username} <button onclick="adminBanUser('${users[i].username}')">Ban user</button></div> 
`;
  }
  return html;
}

function adminIssuesLoop() {
  let html = /*HTML*/ `
  <h2><u>Reports:</u></h2>
  `;
  let reports = model.data.admin.reports;

  for (let report of reports) {
    html += /*HTML*/ `
    <div class="A-reports">
    <div>Reported by: ${report.reportedByUser}</div>
    <div>Reported user: ${report.reportedUser}</div>
    <div>Reported cat id: ${report.reportedCatId}</div>
    <div>Reason: ${report.reportReason}</div>
    <button onclick="pickCat('${report.reportedCatId}')">Go to cat page</button>
    <button onclick="deleteReport(${report.ticketId})">Delete report</button>
    </div>
    `;
  }
  return html;
}
