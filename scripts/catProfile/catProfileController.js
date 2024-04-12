function getCommentLoop(catId) {
  let comments = model.data.cats[catId].comments
  html = '';
  
  for (let i = 0; i < comments.length; i++) {
    html += /*hmtl*/`
    <div ><span class="CPCommenter">${
      comments[i].commenter
    }</span> <br>
    <span class="CPComment">${comments[i].comment}</span></div>
    `
  }
  return html;
}