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

console.log('%cGitHub: https://github.com/harrypunia                       ', 'background: #efefef; width: 100%; color: #333; padding:5px 10px;');
console.log('%cInstagram: https://www.instagram.com/puniaharsimran         ', 'background: #efefef; width: 100%; color: #333; padding:5px 10px;');
console.log('%cLinkedIn:https://www.linkedin.com/in/harry-punia-904590130/ ', 'background: #efefef; width: 100%; color: #333; padding:5px 10px;');
console.log('%cEmail: harry@punias.com                                     ', 'background: #efefef; width: 100%; color: #333; padding:5px 10px;');
