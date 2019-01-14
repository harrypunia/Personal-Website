class CaseStudy extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        })
        this.wrapper = document.createElement('div');
        this.imgWrapper = document.createElement('div');
        this.img = document.createElement('img');
        this.content = document.createElement('div');
        this.heading = document.createElement('h1');
        this.bio = document.createElement('p');
        this.css = document.createElement('style');
    }
    connectedCallback() {
        var tags = "";
        this.imgWrapper.setAttribute('class', 'img-wrapper');
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this._heading = this.getAttribute('topic');
        this._bio = this.getAttribute('bio');
        this._tags = this.getAttribute('tags').split("-");
        this.tags = document.createElement('div');
        this.tags.setAttribute('class', "tag");
        this.img.setAttribute('src', this.src);
        this.img.setAttribute('alt', this.alt);
        this.heading.innerHTML = this._heading;
        this.bio.innerHTML = this._bio;
        this.content.appendChild(this.heading);
        this.content.appendChild(this.bio);
        this.content.setAttribute('class', 'content');
        this.wrapper.setAttribute('class', 'wrapper');
        this.hasAttribute('right') ? this.imgWrapper.setAttribute('class', 'img-wrapper right') : this.imgWrapper.setAttribute('class', 'img-wrapper');
        for (let i = 0; i < this._tags.length; i++) {
            tags += '<h4 class="tags" style="transition-delay: ' + (i + 1) / 20 + 's">' + this._tags[i] + '</h4>'
        }
        this.tags.innerHTML = tags;
        this.css.textContent = '.wrapper{position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 200px; border: 1px solid #333; margin: 200px 0; cursor: pointer; transition: background .2s, border .2s}' +
            '.wrapper:hover {border: 1px solid white; background: #151515; transition: background .2s, border .2s}' +
            '.img-wrapper {position: absolute; background: #a73030; left: -1px; top: -100px; width: 250px; height: 400px; box-shadow: 0 0 20px rgba(0, 0, 0, .4); transition: transform .2s; overflow: hidden; display: flex; justify-content: center; align-items: center}' +
            '.right {right: -1px !important; left: auto;}' +
            'img{width: auto; height: 400px; transition: transform .2s ease-out}' +
            '.wrapper:hover img {transform: scale3d(0.8, 0.8, 1); transition: transform .2s ease-out}' +
            '.content{display: flex; justify-content: center; align-items: center; flex-direction: column; width: 60%; max-width: 800px; height: 60%; margin-left: 200px;transition: transform .2s}' +
            '.wrapper:hover .content {transform: scale3d(1.1, 1, 1); transition: transform .2s}' +
            '.wrapper:hover .tags {transform: translateY(0)}' +
            '.right + .content{margin-left: 0 !important; margin-right: 200px}' +
            '.wrapper h1{float: left; color: #efefef; font-size: 24px; font-weight: 600; font-family: "Mada";text-align: left; width: 100%; line-height: 1.5}' +
            'strong{color: white}' +
            '.wrapper p{float: left; color: #bababa; text-align: left; width: 100%;font-size: 18px; font-family: "Mada"; line-height: 1.5}' +
            '.tag {display: flex; justify-content: center; align-items: center; width: 300px; height: 40px; position: absolute; right: 0; bottom: -60px; overflow: hidden}' +
            '.tags {transform: translateY(40px); transition: transform .2s}' +
            '.tag h4 {margin: auto; background: #efefef; border-radius: 5px; padding: 10px; font-size: 16px; font-family: "Mada"}' +
            '.right ~ .tag {left: 0}' +
            /*media*/
            '@media screen and (max-width: 1000px) {' +
            '.wrapper{height: 400px; margin: 200px 0;}' +
            '.img-wrapper {width: 400px; height: 250px; left: 50%; transform: translateX(-50%)}' +
            '.img-wrapper:hover img {transform: scale3d(0.8, 0.8, 1)}' +
            '.content {margin-left: 0; width: 80%; height: 200px; margin-top: 150px;}' +
            '.right + .content {margin-right: 0}' +
            '}' +
            '@media screen and (max-width: 800px) {' +
            '.img-wrapper{width: 100%}' +
            '.img-wrapper img {width: 100%; height: auto}' +
            '.content {width: 100%;}' +
            '}';
        this.imgWrapper.appendChild(this.img);
        this.shadow.appendChild(this.css);
        this.shadow.appendChild(this.wrapper);
        this.wrapper.appendChild(this.imgWrapper);
        this.wrapper.appendChild(this.content);
        this.wrapper.appendChild(this.tags);
    }
}
window.customElements.define('case-study', CaseStudy);
