//cars
let carspeed1 = 5;
let carspeed2 = 3;

let car1 = 100;
let car2 = 600;

//clouds
let cloudspeed1 = -2;
let cloudspeed2 = 3;
let cloudspeed3 = 1;

let cloud1 = 300;
let cloud2 = 500;
let cloud3 = 700;

//U.F.O
let Ufospeed = 15
let Ufo = 10000

//sun
let sunspeed = 0.5;
let sun = 250;

//stoplicht
let stoplicht = 1; // 0 = rood, 2 = oranje, 1 = groen
 


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


//SUN GLOW
sun = sun + sunspeed;
strokeWeight(0)
fill(252, 206, 106, 100)
circle(sun, 100, 150)
//SUN
strokeWeight(2)
fill(255, 255, 0)
circle(sun, 100, 80)
if (sun >= 1200) {sun = -100}

//U.F.O.
Ufo = Ufo + Ufospeed
fill(70, 100)
circle(Ufo + 30, 70, 40)
fill(0, 100, 0,)
ellipse(Ufo + 30, 90, 100, 40,)
fill("yellow")
circle(Ufo, 90, 10)
circle(Ufo + 20, 95, 10)
circle(Ufo + 40, 95, 10)
circle(Ufo + 60, 90, 10)
if (Ufo >= 15000) {
  Ufo = -2000
}


//Mountains & Clouds
//Cloud 1
cloud1 = cloud1 + cloudspeed1
strokeWeight(0)
fill(255)
circle(cloud1, 200, 40)
circle(cloud1 + 30, 190, 60)
circle(cloud1 + 60, 200, 40)
if (cloud1 <= -100) {cloud1 = 1100}

//Mountain 2
fill(60)
triangle(470, 500, 550, 30, 870, 500)

//Cloud 2
cloud2 = cloud2 + cloudspeed2
fill(255)
circle(cloud2, 250, 40)
circle(cloud2 + 30, 240, 60)
circle(cloud2 + 60, 250, 40)
if (cloud2 >= 1300) {cloud2 = -90}

//Mountain 1
fill(150)
triangle(170, 500, 350, 130, 570, 500)

//Mountain 3
fill(90)
triangle(750, 500, 900, 100, 1100, 500)

//Cloud 3
cloud3 = cloud3 + cloudspeed3
fill(255)
circle(cloud3, 200, 60)
circle(cloud3 + 40, 190, 80)
circle(cloud3 + 80, 200, 60)
if (cloud3 >= 1100) {cloud3 = -100}


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


//StopLicht

strokeWeight(3)
fill(100)
rect(900, 390, 10, 110, 5)
fill(150)
rect(880, 300, 50, 120, 10)
                         //hier

if (stoplicht == 0) {
  fill(255, 0, 0)
}
else{
  fill(100)
}
circle(905, 320, 25)

if (stoplicht == 2) {
  fill("orange")
}
else{
  fill(100)
}

circle(905, 360, 25)

if (stoplicht == 1) {
  fill(0, 255, 0)
}
else {
  fill(100)
}

circle(905, 400, 25)


//Car 2
car2 = car2 + carspeed2;
strokeWeight(0)
fill(233, 250, 67)
rect(car2, 420, 150, 90, 10)
rect(car2 + 135, 465, 70, 45, 10)
fill(40)
circle(car2 + 40, 510, 50)
circle(car2 + 140, 510, 50)
strokeWeight(3)
fill(0, 90, 240,)
rect(car2 + 100, 425, 50, 40, 10)
strokeWeight(0)
fill(0, 150, 200, 200)
rect(car2 + 130, 425, 20, 40, 10)
if (car2 >= 1039) {
  car2 = -280
}
//Car 1
car1 = car1 + carspeed1;
fill(233, 50, 67)
strokeWeight(0)
rect(car1, 470, 150, 90, 10)
rect(car1 + 135, 515, 70, 45, 10)
fill(40)
circle(car1 + 40, 560, 50)
circle(car1 + 140, 560, 50)
strokeWeight(3)
fill(0, 90, 240)
rect(car1 + 100, 475, 50, 40, 10)
strokeWeight(0)
fill(0, 150, 200, 200)
rect(car1 + 130, 475, 20, 40, 10)
if (car1 >= 1000) {
  car1 = -300
}


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

}

function keyPressed(){
  console.log(keyCode);
  if (keyCode == 13) {
    console.log("hi")
  }
}

function keyPressed(){
  console.log(keyCode);
  if (keyCode == 13) {
    stoplicht = stoplicht + 1;
   if (stoplicht == 3) {
    stoplicht = 0
   }
  }
  if (stoplicht == 0) {
    carspeed1 = 0, carspeed2 = 0
  }
  if (stoplicht == 1) {
     carspeed1 = 5, carspeed2 = 3
  }
  if (stoplicht == 2) {
    carspeed1 = 2, carspeed2 = 1
  }
}