const parallax = y => {
    let target = document.getElementsByClassName('parallax');
    for (let i = 0; i < target.length; i++) {
        let _posY = ((target[i].getBoundingClientRect().top - (window.innerHeight / 2) + (target[i].offsetHeight / 2)) / window.innerHeight) * 40,
            posY = _posY > 20 ? 20 : _posY < -20 ? -20 : _posY;
        target[i].style.marginTop = posY + 'px';
    }
}

const updateScrollBar = y => {
    let bar = document.getElementById('progress'),
        pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight),
        progress = ((y + window.innerHeight) / pageHeight) * 100;
    bar.style.height = progress + 'vh';
}

const lazyElements = y => {
    let lazyParents = document.getElementsByClassName('lazy-component');
    for (let i = 0; i < lazyParents.length; i++) {
        let posY = (lazyParents[i].offsetTop - y) < window.innerHeight / 2;
        if (!lazyParents[i].hasAttribute('loaded') && posY) {
            lazyParents[i].setAttribute('loaded', '');
            let lazyChildren = lazyParents[i].querySelectorAll('div[lazy]');
            for (let j = 0; j < lazyChildren.length; j++) {
                lazyChildren[j].setAttribute('load-lazy', '');
                lazyChildren[j].style.transitionDelay = j / 8 + 's';
            }
        }
    }
}
