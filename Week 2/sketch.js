function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(54, 185, 255);

strokeWeight(3)
//Road
fill(130)
rect(0, 500, 1000, 100)
//Road lines
fill(230)
rect(-80, 540, 160, 10, 10)
rect(190, 540, 160, 10, 10)
rect(460, 540, 160, 10, 10)
rect(730, 540, 160, 10, 10)

//Mountains
//Mountain 2
fill(60)
triangle(470, 500, 550, 30, 870, 500)
//Mountain 1
fill(150)
triangle(170, 500, 350, 130, 570, 500)
//Mountain 3
fill(90)
triangle(750, 500, 900, 100, 1100, 500)

//SUN GLOW
strokeWeight(0)
fill(252, 206, 106, 100)
circle(250, 100, 150)
//SUN
strokeWeight(2)
fill(255, 255, 0)
circle(250, 100, 80)

//Grass
strokeWeight(3)
fill(0, 190, 30)
rect(0, 480, 1000, 20)

//Tree's in the back
//Tree trunk 1
fill(145, 121, 70)
rect(50, 385, 20, 100)
//Tree trunk 2
rect(260, 375, 20, 110)
//Tree trunk 3
rect(855, 385, 20, 100)
//Tree leaves 1
strokeWeight(0)
fill(53, 194, 93, 250)
circle(65, 380, 80)
strokeWeight(1.5)
fill(30, 130, 58)
circle(60, 385, 80)
//Tree leaves 2
strokeWeight(0)
fill(53, 194, 93, 250)
circle(275, 350, 80)
strokeWeight(1.5)
fill(30, 130, 58)
circle(270, 355, 80)
//Tree leaves 3
strokeWeight(0)
fill(53, 194, 93, 250)
circle(870, 380, 80)
strokeWeight(1.5)
fill(30, 130, 58)
circle(865, 385, 80)



}
