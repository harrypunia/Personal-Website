window.addEventListener("scroll", () => {
    let y = window.pageYOffset;
});

const loadSkill = e => {
    let target = document.getElementById(e.currentTarget.id);
}

const openHeader = () => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
}
