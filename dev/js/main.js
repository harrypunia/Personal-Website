window.addEventListener("scroll", e => {
    let y = window.pageYOffset,
        yPos = 80 - y / 8;
    yPos > 20 ? header.style.top = yPos + 'vh' : 0;
});
