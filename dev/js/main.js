window.addEventListener("scroll", e => {
    let y = window.pageYOffset;
    y > 400 ? (header.classList.add('headerIn')) : (header.classList.remove('headerIn'));
})
