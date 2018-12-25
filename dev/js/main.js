const openHeader = (reset) => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    if (reset == 'reset') {
        toggleDistortedText();
        header.classList.remove('openHeader');
        headerIsOpen = false;
        burger.classList.remove('convertBurger')
    } else {
        headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
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

window.onresize = () => {
    if (headerIsOpen) {
        (window.innerWidth >= 800) ? openHeader('reset'): 0;
    }
}

let targetY,
    targetId,
    vel = 0,
    acc = .2,
    far = 0;

const scrollToTarget = _target => {
    targetId = document.getElementById(_target);
    targetY = targetId.offsetTop - window.pageYOffset;
    far = targetY;
    scroll();
}

const scroll = () => {
    targetY = targetId.offsetTop - window.pageYOffset;
    if (targetY >= 5 || targetY <= -5) {
        //vel >= 20 ? vel = 20 : 0;
        targetY > far / 2 ? vel += acc : vel -= acc;
        targetY < -far / 2 ? vel -= acc : vel += acc;
        console.log(vel, far, targetY);
        targetY < 0 ? window.scrollBy(0, -vel) : window.scrollBy(0, vel);
        requestAnimationFrame(scroll)
    } else {
        cancelAnimationFrame(scroll);
        vel = 0;
    }
}
