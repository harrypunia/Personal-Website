class FadeScroll extends HTMLElement {
    constructor() {
        super();
        window.addEventListener('scroll', () => {
            this.fade();
        });
    }
    fade() {
        this._opacity = (((this.offsetTop - window.pageYOffset) + (this.offsetHeight / 2)) / window.innerHeight * 2) + 0.5;
        this.opacity = this._opacity < 0 ? 0 : this._opacity > 1 ? 3 - this._opacity : this._opacity;
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
        let wrapper = document.createElement('div'),
            text = document.createElement('p'),
            _text = this.getAttribute('text'),
            css = document.createElement('style');
        text.textContent = _text;
        text.setAttribute('class', 'header__element-text');
        wrapper.setAttribute('class', 'header__element');
        css.textContent = '.header__element {display: flex;flex-direction: column; align-items: flex-start}' +
            '.header__element p {margin: 0}' +
            '.header__element-text {transform: matrix(1, 0, 0, 1, 0, 0);opacity: .3; transition: transform .2s ease-in, opacity .2s ease-in; cursor: pointer; padding: 10px 0; cursor: pointer}' +
            '.header__element-text:hover {transform: matrix(1.2, 0, 0, 1, 7, 0); opacity: 1; transition: transform .2s ease-out, opacity .2s ease-out}' +
            '@media screen and (max-width: 1400px) {' +
            '.header__element-text {opacity: 1}' +
            '}' +
            '@media screen and (max-width: 800px) {' +
            '.header__element {text-align: center; align-items: center}' +
            '.header__element-text {opacity: 1; font-size: 2em; padding: 20px 0}' +
            '.header__element-text: hover {transform: matrix(1, 0, 0, 1, 0, 0)}' +
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
        let wrapper = document.createElement('div'),
            text = document.createElement('p'),
            _text = this.getAttribute('text'),
            leftHr = document.createElement('hr'),
            leftAr = document.createElement('img'),
            rightHr = document.createElement('hr'),
            rightAr = document.createElement('img'),
            bottomHr = document.createElement('hr'),
            css = document.createElement('style');
        wrapper.setAttribute('class', 'hr-wrapper');
        leftHr.setAttribute('class', 'hr-line');
        rightHr.setAttribute('class', 'hr-line');
        leftAr.setAttribute('class', 'left-arrow hr-arrow');
        rightAr.setAttribute('class', 'right-arrow hr-arrow');
        rightAr.setAttribute('src', 'assets/img/hr-arrow.svg');
        leftAr.setAttribute('src', 'assets/img/hr-arrow.svg');
        bottomHr.setAttribute('class', 'hr-bottom');
        css.textContent = '.hr-wrapper {width: 100%; height: 50px; padding: 0 10%; box-sizing: border-box; display: flex; flex-direction: row; justify-content: center; align-items: center}' +
            '.hr-bottom{display: none;  width: 80%; border-top: 1px solid white; border-top: 1px solid white; border-left: 0; border-right: 0; height: 3px; margin: 0 auto}' +
            '.hr-line {display: block; border: 0; height: 1px; background: white; width: 33%; margin: 0 auto}' +
            '.left-arrow {transform: rotate(180deg);}' +
            '.hr-arrow {display: block; width: 25px; height: 25px}' +
            'p {margin: 0}' +
            '@media screen and (max-width: 800px) {' +
            'p {margin: 0 0 6px 0;}' +
            '.hr-arrow {display: none}' +
            '.hr-wrapper{flex-direction: column; justify-content: center; align-items: center}' +
            '.hr-line {display: none}' +
            '.hr-bottom {display: block}' +
            '}';
        text.textContent = _text;
        this.shadow.appendChild(css);
        this.shadow.appendChild(wrapper);
        wrapper.appendChild(leftAr);
        wrapper.appendChild(leftHr);
        wrapper.appendChild(text);
        wrapper.appendChild(rightHr);
        wrapper.appendChild(rightAr);
        wrapper.appendChild(bottomHr);
    }
}

window.customElements.define('hr-text', HrText);

class SkillComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this.wrapper = document.createElement('wrapper');
        let text = document.createElement('p'),
            img = document.createElement('img'),
            _img = this.getAttribute('src'),
            alt = this.getAttribute('alt'),
            _text = this.getAttribute('text'),
            css = document.createElement('style');
        this.wrapper.setAttribute('class', 'skill')
        css.textContent = '.skill {flex-basis: 20%; margin: 20px 0}' +
            '.skill img{width: 20%; max-width: 100px; min-width: 50px; margin-left: 50%; transform: translate(-50%, -50%) rotate(30deg); opacity: 0;transition: transform .1s ease-out, opacity .2s ease-out}' +
            '.skill img:hover {transform: translate(-50%, 0) rotate(10deg) !important; transition: transform .1s ease-in}' +
            '.skill p {text-align: center; marign-top: 5px}' +
            '.style[open] {opacity: 1 !important; transform: translate(-50%, 0); transition: transform .2s ease-in, opacity .2s ease-in;}' +
            '@media screen and (max-width: 800px) {' +
            '.skill {flex-basis: 50%}' +
            '.skill img:hover {transform: translate(-50%, 0) rotate(0) !important; cursor: default; transition: transform .1s ease-in}' +
            '}';
        text.textContent = _text;
        img.setAttribute('src', _img);
        this.shadow.appendChild(css);
        this.shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(img);
        this.wrapper.appendChild(text);
    }
    static get observedAttributes() {
        return ['open']
    }
    attributeChangedCallback(name, oVal, nVal) {
        if (oVal != nVal) {
            nVal == '' ? this.updateCss() : 0;
        }
    }
    updateCss() {
        this.wrapper.setAttribute('open', '');
        console.log('working');
    }
}

window.customElements.define('skill-component', SkillComponent);
