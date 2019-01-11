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