let particles = [],
    population = 50,
    chance = 150,
    force = 20;
var canvas = sketch = document.getElementById('canvas');

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent(sketch);
    for (let i = 0; i < 50; i++) {
        particles[i] = new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
    background(20, 20, 30);
}

function draw() {
    background(20, 20, 30, 15);
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
}

window.onresize = function () {
    canvas.size(window.innerWidth, window.innerHeight);
}
