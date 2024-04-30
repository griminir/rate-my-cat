function adminBanUser(username) {
  if (!model.input.admin.safeguardBan) {
    // model.input.admin.safeguardBan = false;
    alert(
      "You are about to ban a user. If you are certain you want to ban this user, click on the same button again"
    );
    model.input.admin.victim = username;

    model.input.admin.safeguardBan = true;
  } else {
    if (
      model.input.admin.victim === username &&
      model.input.admin.safeguardBan
    ) {
      adminTrulyBanUser(username);
    }
    model.input.admin.safeguardBan = false;
    model.input.admin.victim = null;
  }
}

function adminTrulyBanUser(username) {
  for (let i = 0; i < model.data.ratings.length; i++) {
    if (model.data.ratings[i].ratedByUser === username) {
      model.data.ratings.splice(i, 1);
      i--;
    }
  }
  // delete users cats
  for (let i = 0; i < model.data.cats.length; i++) {
    if (model.data.cats[i].owner === username) {
      model.data.cats.splice(i, 1);
      i--;
    }
  }

  // delete users comments
  for (let i = 0; i < model.data.cats.length; i++) {
    // if (model.data.cats[i].comments) {
    for (let n = 0; n < model.data.cats[i].comments.length; n++) {
      if (model.data.cats[i].comments[n].commenter === username) {
        model.data.cats[i].comments.splice(n, 1);
        n--;
        console.log("deleted comment");
      }
    }
    // }
  }

  // delete reports made by user
  for (let i = 0; i < model.data.admin.reports.length; i++) {
    if (model.data.admin.reports[i].reportedByUser === username) {
      model.data.admin.reports.splice(i, 1);
      i--;
    }
  }
  // delete reports about user
  for (let i = 0; i < model.data.admin.reports.length; i++) {
    if (model.data.admin.reports[i].reportedUser === username) {
      model.data.admin.reports.splice(i, 1);
      i--;
    }
  }
  // delete user
  let userToDeleteIndex = model.data.users.findIndex(
    (user) => user.username === username
  );
  model.data.users.splice(userToDeleteIndex, 1);
  updateView();
}

function deleteReport(reportId) {
  let reportToDeleteIndex = model.data.admin.reports.findIndex(
    (report) => report.id === reportId
  );
  model.data.admin.reports.splice(reportToDeleteIndex, 1);
  updateView();
}
