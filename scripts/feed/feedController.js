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

function getFeedLoop() {
    let cats = model.data.cats;
    let html = '';

    for (let i=0; i < cats.length; i++) {
        html += /*HTML*/ `<div class="FVPolariod">
        <div class="FVFeedCatPics"><img  src="${cats[i].pics[cats[i].pics.length -1]}"></div>
        <div class="FVFeedCatName">${cats[i].name}</div>
        <div class="FVFeedCatAgeRace">${cats[i].age} ${cats[i].race}</div>
        <div class="FVFeedCatRating">${cats[i].rating} ★</div>
        <div class="FVFeedCatInteractiveStars">Interactive stars</div>
        <div class="FVFeedCatCommentBox">Comment box</div>
        
        `
        
    }
    return html;
    
}  // neste: gjøre ferdig for-loop til feed