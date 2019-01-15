const openStudy = event => {
    let which = event.currentTarget;
    document.getElementsByTagName('study')[0].style.display = 'block';
}

const caseStudies = document.getElementsByTagName('case-study');
for (let i = 0; i < caseStudies.length; i++) {
    caseStudies[i].addEventListener("click", openStudy, false);
}

let studies = {
    1: '<div class="s__container">' +
        '</div',
    2: ''
}
