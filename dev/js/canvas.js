let particles = [],
    population = 50,
    chance = 150,
    resizing = true,
    prevScrollPos = window.pageYOffset,
    scrollModerator = 100,
    force = 20;
var canvas = sketch = document.getElementById('canvas');

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight, P2D);
    canvas.parent(sketch);
    for (let i = 0; i < 50; i++) {
        particles[i] = new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
    background(30, 36, 42);
}

function draw() {
    resizing ? background(30, 36, 42, 70) : background(30, 36, 42);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
        if (Math.floor(Math.random() * chance) == 1) {
            particles[i].applyForce((Math.random() * force) - force / 2, (Math.random() * force) - force / 2)
        }
        for (let j = 0; j < particles.length; j++) {
            let gap = dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            if (Math.floor(gap) == 100 && i != j) {
                particles[j].link(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            }
        }
    }
    resizing = true;
}

function windowResized() {
    resizing = false;
    resizeCanvas(windowWidth, windowHeight);
}

window.addEventListener("scroll", () => {
    let forceDir = (prevScrollPos - window.pageYOffset) / scrollModerator,
        force = createVector(0, forceDir);
    for (let i = 0; i < particles.length; i++) {
        particles[i].applyForce(force)
    }
    prevScrollPos = window.pageYOffset;
})
