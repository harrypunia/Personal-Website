const toggleSkills = () => {
    let skills = document.getElementsByClassName('intro__skills')[0],
        componenets = skills.getElementsByTagName('skill-component');
    if (skills.hasAttribute('open')) {
        skills.removeAttribute('open');
        for (let i = 0; i < componenets.length; i++) {
            componenets[i].removeAttribute('open');
        }
    } else {
        skills.setAttribute('open', '');
        for (let i = 0; i < componenets.length; i++) {
            componenets[i].setAttribute('open', '');
        }
    }
    setTimeout(() => {
        let y = window.pageYOffset;
        lazyElements(y);
        updateScrollBar(y);
        parallax(y);
    }, 1000)
}
