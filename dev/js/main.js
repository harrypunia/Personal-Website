let fadeScroll = document.getElementsByClassName('fade_scroll');

const openHeader = () => {
    let header = document.getElementsByClassName('header')[0],
        burger = document.getElementsByClassName('burger')[0];

    headerIsOpen ? (header.classList.remove('openHeader'), headerIsOpen = false, burger.classList.remove('convertBurger')) : (header.classList.add('openHeader'), headerIsOpen = true, burger.classList.add('convertBurger'));
}

const distortText = (where, what) => {
    let distortHTML = "",
        opacity = what.type == 'distort_in' ? 0 : what.type == 'distort_out' ? 1 : 1,
        bezier = what.type == 'distort_in' ? 'cubic-bezier(0, .41, .21, 1.01)' : what.type == 'distort_out' ? 'ease-in' : 'ease',
        duration = what.duration == undefined ? .2 : what.duration,
        speed = what.speed == undefined ? what.msg.length : what.speed;

    for (let i = 0; i < what.msg.length; i++) {
        let delay = ((i / speed) / 2) + what.delay,
            str = what.msg[i].replace('_', '&ensp;');
        what.delay == undefined ? what.delay = 0 : 0;
        distortHTML += '<div style="opacity:' + opacity + '; animation: ' + what.type + ' ' + duration + 's ' + bezier + '; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>';
    }
    document.getElementById(where).innerHTML = distortHTML;
    document.getElementById(where).style.cssText = 'display: flex; justify-content: center';
}

window.addEventListener("load", () => {
    distortText('test', {
        msg: 'Hello_there._Call_me',
        delay: .5,
        type: 'distort_in',
        duration: .4
    });
    distortText('test2', {
        msg: 'Harry_Punia',
        delay: .2,
        type: 'distort_in',
        duration: .4
    });
    distortText('test3', {
        msg: 'Designer_•_Developer',
        delay: .5,
        type: 'distort_in',
        duration: .4
    });
});
