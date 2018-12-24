class FadeScroll extends HTMLElement {
    constructor() {
        super();
        window.addEventListener('scroll', () => {
            this.fade();
        });
    }
    fade() {
        this._opacity = (((this.offsetTop - window.pageYOffset) + (this.offsetHeight / 2)) / window.innerHeight * 2);
        this.opacity = this._opacity < 0 ? 0 : this._opacity > 1 ? 2 - this._opacity : this._opacity;
        this.style.opacity = this.opacity;
    }
}
window.customElements.define('fade-scroll', FadeScroll);


class DistortText extends HTMLElement {
    constructor() {
        super();
        this.letters = '';
    }
    connectedCallback() {
        this.text = this.getAttribute('text');
        this.delay = this.getAttribute('delay');
        this.hasAttribute('onload') ? this.distortText(this.text) : 0;
    }
    distortText() {
        for (let i = 0; i < this.text.length; i++) {
            let delay = (i / 2) + parseInt(this.delay, 10),
                str = this.text[i].replace('_', '&ensp;');
            console.log(typeof this.delay)
            this.letters += '<div style="opacity: 0; animation: distort_in .2s ease-out; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>'
        }
        this.innerHTML = this.letters;
        //'<div style="opacity:' + opacity + '; animation: ' + what.type + ' ' + duration + 's ' + bezier + '; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>';
    }
}

window.customElements.define('distort-text', DistortText);
