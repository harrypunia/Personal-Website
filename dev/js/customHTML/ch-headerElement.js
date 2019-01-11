class HeaderElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
    }
    connectedCallback() {
        let wrapper = document.createElement('div'),
            text = document.createElement('a'),
            _text = this.getAttribute('text'),
            link = this.hasAttribute('link') ? this.getAttribute('link') : undefined,
            css = document.createElement('style');
        text.textContent = _text;
        text.setAttribute('class', 'header__element-text');
        wrapper.setAttribute('class', 'header__element');
        css.textContent = 'a {color: white; text-decoration: none}' +
            '.header__element {display: flex;flex-direction: column; align-items: flex-start}' +
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
        link != undefined ? text.setAttribute('href', link) : 0;
        this.shadow.appendChild(css);
        this.shadow.appendChild(wrapper);
        wrapper.appendChild(text);
    }
}

window.customElements.define('header-element', HeaderElement);
