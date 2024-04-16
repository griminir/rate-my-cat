function podiumSelect() {
    return model.input.feed.podiums.map
        (podium => `<option>${podium}</option>`).join('');
}

function getCurrentPodium(index) {
    let currentPodium = model.input.feed.currentPodium;
    if (index === 0) currentPodium = 'day';
    else if (index === 1) currentPodium = 'week';
    else if (index === 2) currentPodium = 'month';
    else currentPodium = 'all time';

    console.log(currentPodium);
    getPodiumCats(currentPodium);
}

function getPodiumCats(currentPodium) {
    let picDiv = document.getElementById('FVcatPic1');
    if (currentPodium === 'day') {
        picDiv.innerHTML = 'bilde day'
    }
    else if (currentPodium === 'week') {
        picDiv.innerHTML = 'bilde week'
    }
    else if (currentPodium === 'month') {
        picDiv.innerHTML = 'bilde month'
    }
    else {
        picDiv.innerHTML = 'bilde all time'
    }
}
 //hei