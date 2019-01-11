class CaseStudy extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'wrapper');
        this.img = document.createElement('img');
        this.heading = document.createElement('h1');
        this.bio = document.createElement('p');
        this.css = document.createElement('style');
    }
    connectedCallback() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this._heading = this.getAttribute('title');
        this._bio = this.getAttribute('bio');
        this.img.setAttribute('src', this.src);
        this.img.setAttribute('alt', this.alt);
        this.heading.textContent = this._heading;
        this.bio.textContent = this._bio;
        this.css.textContent = '.wrapper{position: relative; width: 100%; height: 100px; background: red;}' +
            '.wrapper img{float: left;width: 100px; height: 100px;}' +
            '.wrapper h1{float: left; color: white}' +
            '.wrapper p{float: left; color: white}'

        this.shadow.appendChild(this.css);
        this.shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(this.img);
        this.wrapper.appendChild(this.heading);
        this.wrapper.appendChild(this.bio);
    }
}

window.customElements.define('case-study', CaseStudy);
