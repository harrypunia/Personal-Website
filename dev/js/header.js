let headerIsOpen = false,
    filter = document.getElementsByTagName('filter')[0];

const openHeader = (des) => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    if (des == 'reset') {
        toggleDistortedText();
        header.classList.remove('openHeader');
        headerIsOpen = false;
        burger.classList.remove('convertBurger');
        filter.removeAttribute('open');
    } else {
        if (headerIsOpen) {
            header.classList.remove('openHeader');
            burger.classList.remove('convertBurger');
            filter.removeAttribute('open');
            headerIsOpen = false;
        } else {
            header.classList.add('openHeader');
            burger.classList.add('convertBurger');
            filter.setAttribute('open', '');
            headerIsOpen = true;
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
