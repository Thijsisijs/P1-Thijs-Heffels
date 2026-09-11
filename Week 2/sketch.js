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

//Car 1
fill(233, 50, 67)
strokeWeight(0)
rect(100, 470, 150, 90, 10)
rect(235, 515, 70, 45, 10)
fill(40)
circle(140, 560, 50)
circle(240, 560, 50)
strokeWeight(3)
fill(0, 90, 240)
rect(200, 475, 50, 40, 10)
strokeWeight(0)
fill(0, 150, 200, 200)
rect(230, 475, 20, 40, 10)
//Car 2
fill(233, 250, 67)
rect(600, 420, 150, 90, 10)
rect(735, 465, 70, 45, 10)
fill(40)
circle(640, 510, 50)
circle(740, 510, 50)
strokeWeight(3)
fill(0, 90, 240,)
rect(700, 425, 50, 40, 10)
strokeWeight(0)
fill(0, 150, 200, 200)
rect(730, 425, 20, 40, 10)

//Cloud 1
strokeWeight(0)
fill(255)
circle(300, 200, 40)
circle(330, 190, 60)
circle(360, 200, 40)
//Cloud 2
circle(500, 250, 40)
circle(530, 240, 60)
circle(560, 250, 40)
//Cloud 3
circle(700, 200, 60)
circle(740, 190, 80)
circle(780, 200, 60)

//Back Trees
//Tree 1
fill(145, 121, 70)
rect(120, 500, 20, 100)
//Treeleaves 1
strokeWeight(0)
fill(53, 194, 93, 250)
circle(135, 500, 80)
strokeWeight(1.5)
fill(30, 130, 58)
circle(130, 505, 80)
//Tree 2
fill(145, 121, 70)
rect(535, 490, 20, 110)
//Treeleaves 2
strokeWeight(0)
fill(53, 194, 93, 250)
circle(550, 485, 80)
strokeWeight(1.5)
fill(30, 130, 58)
circle(545, 490, 80)

//StopLicht
strokeWeight(3)
fill(100)
rect(900, 390, 10, 110, 5)
fill(150)
rect(880, 300, 50, 120, 10)
fill(255, 0, 0)
circle(905, 320, 25)
fill(255, 140, 0)
circle(905, 360, 25)
fill(0, 255, 0)
circle(905, 400, 25)

}
