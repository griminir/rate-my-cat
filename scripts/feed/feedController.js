function setCurrentPodium(input) {
  model.input.feed.currentPodium = input;
  updateView();
}

function getPodiumCats(currentPodium) {
  let picDiv = document.getElementById('FVcatPic1');
  if (currentPodium === 'day') {
    picDiv.innerHTML = 'bilde day';
  } else if (currentPodium === 'week') {
    picDiv.innerHTML = 'bilde week';
  } else if (currentPodium === 'month') {
    picDiv.innerHTML = 'bilde month';
  } else {
    picDiv.innerHTML = 'bilde all time';
  }
}

function playPurrAudio () {
  let purr = new Audio('audio/purring-cat-156459.mp3');
  purr.volume = 0.1;
  purr.play();
  }
