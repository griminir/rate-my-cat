function submitReportCat(catId) {
  let cat = model.data.cats.find((cat) => cat.id === catId);

  if (model.input.reportIssue.reportReason != '') {
    model.data.admin.reports.push({
      ticketId: findMaxId() + 1,
      reportedByUser: model.app.loggedInUser,
      reportedCatId: catId,
      reportedUser: cat.owner,
      reportReason: model.input.reportIssue.reportReason,
    });
    changePage('feed');
  } else {
    playWahWahAudio();
    setTimeout(function () {
      alert(
        'You did not give a reason for the report, please write why you are reporting before submitting.'
      );
    }, 100);
  }
}

function findMaxId() {
  let maxId = -1;
  for (let report of model.data.admin.reports) {
    if (report.ticketId > maxId) maxId = report.ticketId;
  }
  return maxId;
}
