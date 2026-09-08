function setup() {
  createCanvas(1600, 800);//full canvas
}

function draw() {
background("LightGray");

strokeWeight(1)
fill(100,200,50);
textSize(35)
text("1. naam", 50, 50)
text("Thijs Heffels", 100, 100)

strokeWeight(0)
fill(100,200,50);
text("2. vlag",50, 150)
fill(250, 0,0)
rect(50, 180, 200, 50)
fill(255)
rect(50, 230, 200, 50)
fill(0, 0, 250)
rect(50, 280, 200, 50)

strokeWeight(3)
fill(100,200,50);
text("3. schaakbord", 50, 400)
fill(50)
rect(50, 450, 50, 50)
rect(150, 450, 50, 50)
rect(100, 500, 50, 50)
rect(50, 550, 50, 50)
rect(150, 550, 50, 50)
fill(255)
rect(100, 450, 50, 50)
rect(50, 500, 50, 50)
rect(150, 500, 50, 50)
rect(100, 550, 50, 50)

rect(350, 0, 5, 800)

strokeWeight(2)
fill(100,200,50);
text("4. Huisje", 400, 50)
fill(150)
rect(400, 150, 100, 100)
fill(200)
triangle(400, 150, 450, 100, 500, 150)
circle(450, 200, 50, 100)
rect(425, 200, 50, 50)
circle(470, 225, 5, 5)

strokeWeight(2)
fill(100,200,50);
text("5. Stoplicht",400, 300)
fill(200);
rect(450, 330, 50, 100)
rect(465, 430, 20, 30)
fill(255, 0, 0)
circle(475, 350, 25, 25)
fill(250, 100, 0)
circle(475, 380, 25, 25)
fill(20, 220, 90)
circle(475, 410, 25, 25)

fill(100,200,50)
text("6. dobbelsteen", 400 ,500)
strokeWeight(5)
fill(255)
rect(450, 550, 100, 100, 10)
fill(0)
strokeWeight(1)
circle(475, 575, 25, 25)
circle(500, 600, 25, 25)
circle(525, 625, 25, 25)

fill(255)
rect(650, 0, 5, 800)

strokeWeight(0)
fill(100,200,50)
text("7. Mario", 700, 50)

fill(200, 50, 50)
rect(725, 75, 175, 15)
rect(700, 90, 275, 15)

fill(168, 63, 31)
rect(700, 105, 100, 15)
rect(735, 120, 25, 45)
rect(675, 120, 25, 45)
rect(675, 165, 60, 20)
rect(735, 145, 65, 20)

fill(242, 198, 166)
rect(700, 120, 35, 45)
rect(800, 105, 85, 15)
rect(760, 120, 125, 15)
rect(760, 135, 125, 15)
rect(800, 150, 105, 15)
rect(735, 165, 150, 20)
rect(735, 180, 225, 20)
rect(925, 150, 85, 15)
rect(905, 135, 85, 15)

fill(0)
rect(885, 105, 20, 45)
rect(885, 165, 85, 15)
rect(905, 150, 20, 20)

fill(200, 50, 50)
rect(715, 200, 200, 20)
rect(695, 220, 250, 20)
rect(675, 240, 290, 20)
rect(735, 260, 200, 20)

fill(18, 89, 212)
rect(775, 200, 20, 45)
rect(775, 240, 100, 20)
rect(875, 220, 20, 40)
rect(755, 260, 160, 20)
rect(755, 280, 160, 20)
rect(735, 300, 200, 20)
rect(735, 320, 70, 20)
rect(875, 320, 60, 20)

fill(250, 234, 18)
rect(775, 260, 20, 20)
rect(875, 260, 20, 20)
}
