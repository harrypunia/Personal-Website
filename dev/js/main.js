const openHeader = () => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
}

const hideAllDistortedText = () => {
    let test = document.getElementsByTagName('distort-text');
    for (let i = 0; i < test.length; i++) {
        let exit = test[i].getAttribute('exit');
        if (exit == null || exit == "false") {
            test[i].setAttribute('delay', 0);
            test[i].setAttribute('exit', true);
        } else {
            test[i].setAttribute('delay', 0.2);
            test[i].setAttribute('exit', false);
        }
    }
}
