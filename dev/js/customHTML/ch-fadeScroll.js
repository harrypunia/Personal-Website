class FadeScroll extends HTMLElement {
    constructor() {
        super();
        window.addEventListener('scroll', () => {
            //            this.fade();
        });
    }
    fade() {
        this._opacity = (((this.offsetTop - window.pageYOffset) + (this.offsetHeight / 2)) / window.innerHeight * 2) + 0.5;
        let rounded = Math.round(this._opacity * 10) / 10
        this.opacity = rounded < 0 ? 0 : rounded > 1 ? 3 - rounded : rounded;
        this.style.opacity = this.opacity;
    }
}
window.customElements.define('fade-scroll', FadeScroll);
