const openHeader = (reset) => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    if (reset == 'reset') {
        toggleDistortedText();
        header.classList.remove('openHeader');
        headerIsOpen = false;
        burger.classList.remove('convertBurger')
    } else {
        if (headerIsOpen) {
            header.classList.remove('openHeader');
            burger.classList.remove('convertBurger');
            filter.classList.remove('show-filter');
            headerIsOpen = false;
        } else {
            header.classList.add('openHeader');
            burger.classList.add('convertBurger');
            filter.classList.add('show-filter');
            headerIsOpen = true;
        }
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

const lazyElements = y => {
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
}

window.onscroll = () => {
    let y = window.pageYOffset;
    lazyElements(y);
};

window.onresize = () => {
    if (headerIsOpen) {
        (window.innerWidth >= 800) ? openHeader('reset'): 0;
    }
    let y = window.pageYOffset;
    lazyElements(y);
}

window.onload = () => {
    let y = window.pageYOffset;
    lazyElements(y);
}
