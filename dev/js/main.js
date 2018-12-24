const openHeader = () => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
}

window.onclick = () => {
    let test = document.getElementById('hey'),
        exit = test.getAttribute('exit');
    console.log(exit);
    if (exit == null || exit == false) {
        test.setAttribute('exit', true);
    } else {
        test.setAttribute('exit', false)
    }
}
