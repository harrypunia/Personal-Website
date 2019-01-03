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
    let y = window.pageYOffset;
    //Lazy component
    let lazyParents = document.getElementsByTagName('lazy-component');
    for (let i = 0; i < lazyParents.length; i++) {
        let posY = (lazyParents[i].offsetTop - y) < -(window.innerHeight / 3);
        if (!lazyParents[i].hasAttribute('loaded') && posY) {
            lazyParents[i].setAttribute('loaded', '');
            let lazyChildren = lazyParents[i].querySelectorAll('div[lazy]');
            for (let j = 0; j < lazyChildren.length; j++) {
                lazyChildren[j].setAttribute('load-lazy', '');
                lazyChildren[j].style.transitionDelay = j / 8 + 's';
            }
        }
    }
    //Header component
    let header = document.getElementsByClassName('header')[0],
        headerOgHeight = 200,
        cap = 200,
        headerHeight = header.offsetHeight;
    if (y < cap) {
        header.style.height = headerOgHeight - (y / 10) + 'px';
        header.style.background = 'rgba(0, 0, 0, ' + y / cap + ')';
    } else {
        header.style.height = headerOgHeight - (cap / 10) + 'px';
        header.style.background = 'rgba(0, 0, 0, 100)'
    }
});

window.onload = () => {
    window.scrollY = 0;
}
