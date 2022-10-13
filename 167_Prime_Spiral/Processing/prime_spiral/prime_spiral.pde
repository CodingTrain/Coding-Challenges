// The Prime Spiral (aka Ulam Spiral)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/167-prime-spiral.html
// https://youtu.be/a35KWEjRvc0

// State of spiral
int x, y;
int px, py;
int step = 1;
int state = 0;
int numSteps = 1;
int turnCounter = 1;

// Scale / resolution
int stepSize = 5;
int totalSteps;
int cols, rows;

// Function to test if number is prime
boolean isPrime(int value) {
  if (value < 2 ) {
      return false;
      
  } else if(value < 4 ){ 
    return true;
    
  } else if(value % 2 ==0 || value % 3 ==0) {
    return false;
    
  } else {
    for (int i = 5; i <= sqrt(value); i += 6) {
      if (value % i == 0 || value % (i + 2) == 0 ) {
        return false;
        
      }
      
    }
  }
  
  return true;
}

void setup() {
  size(500, 500);

  // set up spiral
  cols = width / stepSize;
  rows = height / stepSize;
  totalSteps = cols * rows;
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  background(0);
}

void draw() {
  // If prime draw circle
  if (isPrime(step)) {
    fill(255);
    stroke(255);
    circle(x, y, stepSize * 0.5);
  }

  // Connect current to previous with a line
  line(x, y, px, py);
  px = x;
  py = y;

  // Move according to state
  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }

  // Change state
  if (step % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }
  step++;

  // Are we done?
  if (step > totalSteps) {
    noLoop();
  }
}
