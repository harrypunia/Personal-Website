class CaseStudy extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.wrapper = document.createElement('div');
        this.img = document.createElement('img');
        this.heading = document.createElement('h1');
        this.bio = document.createElement('p');
        this.css = document.createElement('style');
    }
    connectedCallback() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this._heading = this.getAttribute('topic');
        this._bio = this.getAttribute('bio');
        this.img.setAttribute('src', this.src);
        this.img.setAttribute('alt', this.alt);
        this.heading.textContent = this._heading;
        this.bio.textContent = this._bio;
        this.hasAttribute('right') ? this.wrapper.setAttribute('class', 'wrapper right') : this.wrapper.setAttribute('class', 'wrapper');
        this.css.textContent = '.wrapper{position: relative; width: 100%; height: 100px; background: white; margin: 100px 0; cursor: pointer}' +
            '.wrapper img{position: absolute; left: 0; top: -25%; width: auto; height: 150%; box-shadow: 0 0 20px rgba(0, 0, 0, .4); transition: transform .2s}' +
            '.right img {right: 0px !important; left: auto;}' +
            '.wrapper:hover img {transform: scale3d(1.1, 1.1, 1)}' +
            '.wrapper h1{float: left; color: #333}' +
            '.wrapper p{float: left; color: #333}' +
            '@media screen and (max-width: 800px) {' +
            '.wrapper{height: 500px; margin: 200px 0;}' +
            '.wrapper img {width: 33.33%; height: auto; min-width: 150px; left: 50%; transform: translateX(-50%)}' +
            '.wrapper:hover img {transform: translateX(-50%) scale3d(1.1, 1.1, 1)}'
        '}'
        this.shadow.appendChild(this.css);
        this.shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(this.img);
        this.wrapper.appendChild(this.heading);
        this.wrapper.appendChild(this.bio);
    }
}

window.customElements.define('case-study', CaseStudy);
