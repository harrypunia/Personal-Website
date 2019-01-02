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
    }
    connectedCallback() {
        this.updateParameters();
        this.hasAttribute('onload') ? this.distortText() : this.hasAttribute('onclick') ? this.addEventListener('click', this.distortText) : 0;
    }
    updateParameters() {
        this.text = this.getAttribute('text');
        this.animation = this.getAttribute('dir');
        this.opacity = this.animation == 'in' ? 0 : 1;
        this.delay = this.hasAttribute('delay') ? this.getAttribute('delay') : 0.2;
        this.speed = this.hasAttribute('speed') ? this.getAttribute('speed') : this.text.length;
    }
    static get observedAttributes() {
        return ['dir']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            newValue == "true" ? (this.updateParameters(), this.distortText()) : (this.updateParameters(), this.distortText());
        }
    }
    distortText() {
        this.letters = '';
        for (let i = 0; i < this.text.length; i++) {
            let delay = (i / parseInt(this.speed) / 2) + parseFloat(this.delay, 10),
                str = this.text[i].replace('_', '&ensp;');
            this.letters += '<div style="opacity: ' + this.opacity + '; animation: distort_' + this.animation + ' .2s ease-out; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>'
        }
        this.innerHTML = this.letters;
    }
}

window.customElements.define('distort-text', DistortText);

class HeaderElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });

    }
    connectedCallback() {
        let wrapper = document.createElement('wrapper'),
            text = document.createElement('p'),
            _text = this.getAttribute('text'),
            css = document.createElement('style');
        text.textContent = _text;
        text.setAttribute('class', 'header__element-text');
        wrapper.setAttribute('class', 'header__element');
        css.textContent = '.header__element {display: flex;flex-direction: column;align-items: flex-start;margin-top: .5em}' +
            '.header__element-text {transform: matrix(1, 0, 0, 1, 0, 0);opacity: .3;transition: all .2s ease-in-out;cursor: pointer}' +
            '.header__element-text:hover {transform: matrix(1.2, 0, 0, 1, 7, 0); opacity: 1;transition: all .2 s ease - in -out}' +
            '@media screen and (max-width: 800px) {' +
            '.header__element {text-align: center;align-items: center}' +
            '.header__element-text {opacity: 1}' +
            '.header__element-text: hover {transform: matrix(1, 0, 0, 1, 0, 0)}' +
            '.header__element-text:focus {}' +
            '}';
        this.shadow.appendChild(css);
        this.shadow.appendChild(wrapper);
        wrapper.appendChild(text);
    }
}

window.customElements.define('header-element', HeaderElement);

class HrText extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        let wrapper = document.createElement('wrapper'),
            text = document.createElement('p'),
            _text = this.getAttribute('text'),
            leftHr = document.createElement('hr'),
            rightHr = document.createElement('hr'),
            css = document.createElement('style');
        wrapper.setAttribute('class', 'hr-text');
        css.textContent = '.hr-text {width: 100%; height: 10px; background: blue}';
        text.textContent = _text;
        this.shadow.appendChild(css);
        this.shadow.appendChild(wrapper);
        wrapper.appendChild(leftHr);
        wrapper.appendChild(text);
        wrapper.appendChild(rightHr);
    }
}

window.customeElement.define('hr-text', HrText);
