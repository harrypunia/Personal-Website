const openStudy = event => {
    let which = event.currentTarget,
        key = which.getAttribute('key'),
        study = document.getElementsByTagName('study')[0],
        container = document.getElementsByClassName('container')[0];
    study.innerHTML = studies[key];
    container.style.transform = 'translateX(-100vw)';
    study.style.transform = 'translateX(0)';
}

const caseStudies = document.getElementsByTagName('case-study');
for (let i = 0; i < caseStudies.length; i++) {
    caseStudies[i].addEventListener("click", openStudy, false);
}

let studies = {
    cs1: '<div class="s__container">' +
        '<div class="s__main-image>' +
        '<img src="assets/cs1.png" />' +
        '</div>' +
        '</div',
    cs2: ''
}
