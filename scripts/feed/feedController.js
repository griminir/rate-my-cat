function podiumSelect() {
    return model.input.feed.podiums.map
        (podium => `<option>${podium}</option>`).join('');
}

function getCurrentPodium(index) {
    let currentPodium = model.input.feed.currentPodium;
    if (index === 0) currentPodium = 'day';
    else if (index === 1) currentPodium = 'week';
    else if (index === 2) currentPodium = 'month';
    else if (index === 3) currentPodium = 'year';
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
    else if (currentPodium === 'year') {
        picDiv.innerHTML = 'bilde year'
    }
    else {
        picDiv.innerHTML = 'bilde all time'
    }
}

  // neste: gjøre ferdig for-loop til feed

// endre cat race til ${cats[i].race[0]} når vi får den opp. Hardkoder race for nå, så alle er british shorthair 

