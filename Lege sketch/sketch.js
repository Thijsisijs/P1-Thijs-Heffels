function setup() {
  createCanvas(1500, 700);

}

function draw() {
  background("lightgrey");
  fill(255);

  rect(20, 15, 60, 150);
  rect(35, 165, 30, 50)
  
    for(let i = 0; i < 3; i++) {
    console.log(i);
    if (i == 0) {
    fill("red")
  }
  if (i == 1) {
    fill("orange")
  }
  if (i == 2) {
    fill("green")
  };
    circle(50, 50 + 35 * i, 30, 30);
  }

}