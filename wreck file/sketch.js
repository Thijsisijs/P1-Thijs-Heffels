function setup() {
  createCanvas(400, 400);
  for (let t = 0; t < 99999999; t++) {
    console.log(t);
    
  }
  if (t >= 99999998) {
    t = 0
  }
}

function draw() {
  background(220);
}
