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

const distortText = (where, what) => {
    let result = "",
        delay = 0.0,
        str = what.msg,
        char = '';

    for (let i = 0; i < str.length; i++) {
        delay = ((i / 10) / 2) + .2;
        char = (str[i] == "_") ? "&ensp;" : str[i];
        result += '<div class="text__harry-all" style="animation: distort .4s cubic-bezier(0, .41, .21, 1.01); animation-fill-mode: forwards; animation-delay:' + delay + 's">' + char + '</div>';
    }
    typeof where == 'string' ? document.getElementById(where).innerHTML = result : document.getElementById(where.currentTarget.id).innerHTML = result;
}

window.addEventListener("load", () => {
    distortText('test', {
        msg: 'Hello_there._Call_me'
    });
    distortText('test2', {
        msg: 'Harry_Punia'
    });
    distortText('test3', {
        msg: 'Designer_•_Developer'
    });
});
