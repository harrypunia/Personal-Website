class CaseStudy extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.wrapper = document.createElement('div');
        this.imgWrapper = document.createElement('div');
        this.img = document.createElement('img');
        this.heading = document.createElement('h1');
        this.bio = document.createElement('p');
        this.css = document.createElement('style');
    }
    connectedCallback() {
        this.imgWrapper.setAttribute('class', 'img-wrapper')
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this._heading = this.getAttribute('topic');
        this._bio = this.getAttribute('bio');
        this.img.setAttribute('src', this.src);
        this.img.setAttribute('alt', this.alt);
        this.heading.textContent = this._heading;
        this.bio.textContent = this._bio;
        this.wrapper.setAttribute('class', 'wrapper');
        this.hasAttribute('right') ? this.imgWrapper.setAttribute('class', 'img-wrapper right') : this.imgWrapper.setAttribute('class', 'img-wrapper');
        this.css.textContent = '.wrapper{position: relative; width: 100%; height: 400px; border: 1px solid white; margin: 100px 0; cursor: pointer}' +
            '.img-wrapper {position: absolute; left: 0; top: -25%; width: 250px; height: 400px; box-shadow: 0 0 20px rgba(0, 0, 0, .4); transition: transform .2s; overflow: hidden; display: flex; justify-content: center; align-items: center}' +
            '.right {right: 0px !important; left: auto;}' +
            '.img-warpper img{width: auto; height: 300px}' +
            '.img-wrapper:hover img {transform: scale3d(0.6, 0.6, 1)}' +
            '.wrapper h1{float: left; color: #333}' +
            '.wrapper p{float: left; color: #333}' +
            '@media screen and (max-width: 800px) {' +
            '.wrapper{height: 500px; margin: 200px 0;}' +
            '.wrapper img {width: 33.33%; height: auto; min-width: 150px; left: 50%; transform: translateX(-50%)}' +
            '.wrapper:hover img {transform: translateX(-50%) scale3d(1.1, 1.1, 1)}'
        '}'
        this.imgWrapper.appendChild(this.img);
        this.shadow.appendChild(this.css);
        this.shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(this.imgWrapper);
        this.wrapper.appendChild(this.heading);
        this.wrapper.appendChild(this.bio);
    }
}

window.customElements.define('case-study', CaseStudy);
