function setCurrentPodium(input) {
  model.input.feed.currentPodium = input;
  updateView();
}

function playPurrAudio() {
  let purr = new Audio('audio/purring-cat-156459.mp3');
  purr.volume = 0.1;
  purr.play();
}
