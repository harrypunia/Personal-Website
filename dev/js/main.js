const openHeader = (des) => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    if (des == 'reset') {
        toggleDistortedText();
        header.classList.remove('openHeader');
        headerIsOpen = false;
        burger.classList.remove('convertBurger');
        filter.classList.remove('show-filter');
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
    let lazyParents = document.getElementsByClassName('lazy-component');
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

const headerElementsLinks = () => {
    let webWidth = window.innerWidth >= 1400,
        headerElements = document.getElementsByTagName('header-element');
    if (webWidth) {
        for (let i = 0; i < headerElements.length; i++) {
            headerElements[i].setAttribute('onclick', '');
        }
    } else {
        for (let i = 0; i < headerElements.length; i++) {
            headerElements[i].setAttribute('onclick', 'openHeader(); toggleDistortedText()');
        }
    }
}

const parallax = y => {
    let target = document.getElementsByClassName('parallax');
    for (let i = 0; i < target.length; i++) {
        console.log(target[i].offsetTop - y)
    }
}

const updateScrollBar = y => {
    let bar = document.getElementById('progress'),
        pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight),
        progress = ((y + window.innerHeight) / pageHeight) * 100;
    bar.style.height = progress + 'vh';
}

window.onscroll = () => {
    let y = window.pageYOffset;
    lazyElements(y);
    updateScrollBar(y);
    parallax(y);
};

window.onresize = () => {
    let webWidth = window.innerWidth >= 1400,
        y = window.pageYOffset;

    if (headerIsOpen) {
        webWidth ? openHeader('reset') : 0;
    }
    lazyElements(y);
    headerElementsLinks();
    parallax(y);
    updateScrollBar(y);
}

window.onload = () => {
    let y = window.pageYOffset;
    lazyElements(y);
    headerElementsLinks();
    updateScrollBar(y);
    parallax(y);
}
