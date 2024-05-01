function reportView() {
  let catId = model.app.displayedCat;
  let cat = model.data.cats.find((cat) => cat.id == catId);
  document.getElementById('app').innerHTML = /*HTML*/ `
    ${makeHeader()}
    <div class="R-container">
    <h2><u>Report cat</u></h2>
        <div class="R-reportCatName">Name of criminal: ${cat.name}</div>
        <div class="R-reportReasonText">Reason:</div>
        <div class="R-textAreaDiv"><textarea maxlength="500" onchange="model.input.reportIssue.reportReason=this.value"></textarea></div>
        <button onclick="submitReportCat(${cat.id})">Submit</button>
    </div>
    `;
}
