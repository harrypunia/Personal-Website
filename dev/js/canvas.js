var canvas = sketch = document.getElementById('canvas');

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight, P2D);
    canvas.parent(sketch);
    for (let i = 0; i < 50; i++) {
        particles[i] = new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
    background(0);
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
            once ? (particles[j].applyForce(createVector(-30, 0))) : 0;
            let gap = dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            if (Math.floor(gap) == 100 && i != j) {
                particles[j].link(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            }
        }
        once = false;
    }
    resizing = true;
}

function windowResized() {
    resizing = false;
    resizeCanvas(window.innerWidth, window.innerHeight);
}

window.addEventListener("scroll", () => {
    let forceDir = (prevScrollPos - window.pageYOffset) / scrollModerator;
    forceDir > scrollLimit ? forceDir = scrollLimit : forceDir < -scrollLimit ? forceDir = -scrollLimit : 0;
    let force = createVector(0, forceDir);
    for (let i = 0; i < particles.length; i++) {
        particles[i].applyForce(force)
    }
    prevScrollPos = window.pageYOffset;
})
