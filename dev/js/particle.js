var r,
    g = 0,
    b;

function Particle(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(Math.random() - 0.5, Math.random() - 0.5);
    this.acc = createVector(0, 0);

    this.show = function () {
        noFill();
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
    }
    this.update = function () {
        r = 255 - window.pageYOffset / 8;
        b = window.pageYOffset / 8;
        if (window.pageYOffset > 2000) {
            r < 1 ? r = 0 : 0;
            b > 254 ? b = 255 : 0;
        }
        stroke(r, g, b);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.airFriction();
        this.boundry();
    }
    this.airFriction = function () {
        this.vel.x > .5 ? this.vel.x-- : 0;
        this.vel.y > .5 ? this.vel.y-- : 0;
        this.vel.x < -.5 ? this.vel.x++ : 0;
        this.vel.y < -.5 ? this.vel.y++ : 0;
    }
    this.applyForce = function (force) {
        this.acc.add(force);
    }
    this.boundry = function () {
        this.pos.x > window.innerWidth ? this.pos.x = 0 : 0;
        this.pos.x < 0 ? this.pos.x = window.innerWidth : 0;
        this.pos.y > window.innerHeight ? this.pos.y = 0 : 0;
        this.pos.y < 0 ? this.pos.y = window.innerHeight : 0;
    }
    this.link = function (x1, y1, x2, y2) {
        stroke(255, 10);
        strokeWeight(1);
        line(x1, y1, x2, y2);
    }
}
