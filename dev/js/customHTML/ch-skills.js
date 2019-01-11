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
        css.textContent = '.skill {flex-basis: 20%; margin: 20px 20px; display: flex; justify-content: center; align-items: center; flex-direction: column}' +
            '.skill img{width: 20%; max-width: 100px; min-width: 50px; margin-left: 50%; transform: translate(-50%, -50%) rotate(30deg); opacity: 0;transition: transform .1s ease-out, opacity .2s ease-out}' +
            '.skill img:hover {transform: translate(-50%, 0) rotate(20deg) !important; transition: transform .1s ease-in}' +
            '.skill p {text-align: center; marign-top: 5px}' +
            '.skill[open] img {opacity: 1; transform: translate(-50%, 0); transition: transform .2s ease-in, opacity .2s ease-in;}' +
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
        this.updateCss();
    }
    updateCss() {
        this.wrapper.hasAttribute('open') ? this.wrapper.removeAttribute('open') : this.wrapper.setAttribute('open', '');
    }
}

window.customElements.define('skill-component', SkillComponent);
