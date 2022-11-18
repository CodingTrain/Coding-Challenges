// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 20;
let food;
/**
 * 0: Up
 * 1: Down
 * 2: Left
 * 3: Right
 */
let direction = 3;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && direction != 1) {
    direction = 0;
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && direction != 0) {
    direction = 1;
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && direction != 2) {
    direction = 3;
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && direction != 3) {
    direction = 2;
    s.dir(-1, 0);
  }
}
