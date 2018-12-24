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

    }
}

window.CustomElements.define('define-text', DefineText);
