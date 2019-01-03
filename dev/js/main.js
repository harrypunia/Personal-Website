const openHeader = (reset) => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    if (reset == 'reset') {
        toggleDistortedText();
        header.classList.remove('openHeader');
        headerIsOpen = false;
        burger.classList.remove('convertBurger')
    } else {
        headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
    }
}

const toggleDistortedText = () => {
    let test = document.getElementsByTagName('distort-text');
    for (let i = 0; i < test.length; i++) {
        if (test[i].getAttribute('dir') == 'in') {
            test[i].setAttribute('delay', 0);
            test[i].setAttribute('dir', 'out');
        } else {
            test[i].setAttribute('delay', 0.2);
            test[i].setAttribute('dir', 'in');
        }
    }
}

window.onresize = () => {
    if (headerIsOpen) {
        (window.innerWidth >= 800) ? openHeader('reset'): 0;
    }
}

window.addEventListener("scroll", () => {
    let lazyParents = document.getElementsByTagName('lazy-component');
    for (let i = 0; i < lazyParents.length; i++) {
        let posY = (lazyParents[i].offsetTop - window.pageYOffset) < -(window.innerHeight / 3);
        if (!lazyParents[i].hasAttribute('loaded') && posY) {
            lazyParents[i].setAttribute('loaded', '');
            let lazyChildren = lazyParents[i].getElementsByTagName('lazy');
            for (let j = 0; j < lazyChildren.length; j++) {
                lazyChildren[j].setAttribute('load', '');
                lazyChildren[j].style.transitionDelay = j / 5 + 's';
            }
        }
    }
});
