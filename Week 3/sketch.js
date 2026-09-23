let vakje1 = 0
let vakje2 = 0
let vakje3 = 0
let vakje4 = 0
let vakje5 = 0
let vakje6 = 0
let vakje7 = 0
let vakje8 = 0
let vakje9 = 0

let turn = 0

function setup() {
  createCanvas(1500, 705);

}

function draw() {
  background(220);

  if (turn == 0) {
fill("red")
  }
 else if (turn == 1) {
  fill ("blue")
  }
  else{
    fill("grey")
  }
rect(0, 0, 1500, 705)

strokeWeight(3)
  fill("green")
  rect(500, 150, 500, 500, 10)

   //restart
  fill(200, 100, 50)

  if (mouseX > 50 && mouseX < 50 + 200 && mouseY > 650 && mouseY < 650 + 400) {
 fill("brown")
 }
  rect(50, 650, 200, 40)
  fill(0)
  text("RESTART", 120, 675)

  //rij 1
 //vakje1

if (vakje1 == 0) {
  fill("gray")

}
else if (vakje1 == 1) {
  fill("blue")
}
else if (vakje1 == 2) {
  fill("red")
}

if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje1 == 0) {
 fill("darkgray")
 }
  rect(510, 160, 150, 150, 10) // vakje1



if (vakje2 == 0) {
  fill("gray")

}
else if (vakje2 == 1) {
  fill("blue")
}
else if (vakje2 == 2) {
  fill("red")
}

if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje2 == 0) {
 fill("darkgray")
 }

  rect(675, 160, 150, 150, 10) // vakje2


  if (vakje3 == 0) {
  fill("gray")

}
else if (vakje3 == 1) {
  fill("blue")
}
else if (vakje3 == 2) {
  fill("red")
}


if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje3 == 0) {
 fill("darkgray")
 }

  rect(840, 160, 150, 150, 10) //vakje3

//rij 2


if (vakje4 == 0) {
  fill("gray")

}
else if (vakje4 == 1) {
  fill("blue")
}
else if (vakje4 == 2) {
  fill("red")
}

if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje4 == 0) {
 fill("darkgray")
 }

  rect(510, 322, 150, 150, 10) //vakje4


  if (vakje5 == 0) {
  fill("gray")

}
else if (vakje5 == 1) {
  fill("blue")
}
else if (vakje5 == 2) {
  fill("red")
}


if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje5 == 0) {
 fill("darkgray")
 }

  rect(675, 322, 150, 150, 10)//vakje5


  if (vakje6 == 0) {
  fill("gray")

}
else if (vakje6 == 1) {
  fill("blue")
}
else if (vakje6 == 2) {
  fill("red")
}


if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje6 == 0) {
 fill("darkgray")
 }

  rect(840, 322, 150, 150, 10)//vakje6

// rij 3


if (vakje7 == 0) {
  fill("gray")

}
else if (vakje7 == 1) {
  fill("blue")
}
else if (vakje7 == 2) {
  fill("red")
}


if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 485 && mouseY < 485 + 150 && vakje7 == 0) {
 fill("darkgray")
 }

  rect(510, 485, 150, 150, 10)//vakje7


  if (vakje8 == 0) {
  fill("gray")

}
else if (vakje8 == 1) {
  fill("blue")
}
else if (vakje8 == 2) {
  fill("red")
}


if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 485 && mouseY < 485 + 150 && vakje8 == 0) {
 fill("darkgray")
 }

  rect(675, 485, 150, 150, 10)//vakje8

  if (vakje9 == 0) {
  fill("gray")

}
else if (vakje9 == 1) {
  fill("blue")
}
else if (vakje9 == 2) {
  fill("red")
}


if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 485 && mouseY < 485 + 150 && vakje9 == 0) {
 fill("darkgray")
 }

  rect(840, 485, 150, 150, 10)//vakje9

  if (vakje1 == 2) {
    fill("red")
  }
  else if (vakje1 == 1) {
    fill("blue")
  }

  fill("purple")
  circle(mouseX, mouseY, 50)


  fill("yellow")

//blue wins
  if (vakje1 == 1 && vakje2 == 1 && vakje3 == 1) {
    text("BLUE WINS", 720, 50); line(585, 235, 910, 235)
  }
  else if (vakje1 == 1 && vakje4 == 1 && vakje7 == 1) {
    text("BLUE WINS", 720, 50); line(585, 235, 585, 575)
  }
  else  if (vakje1 == 1 && vakje5 == 1 && vakje9 == 1) {
    text("BLUE WINS", 720, 50); line(585, 235, 915, 555)
  }
  else if (vakje4 == 1 && vakje5 == 1 && vakje6 == 1) {
    text("BLUE WINS", 720, 50); line(585, 397, 910, 397)
  }
  else if (vakje2 == 1 && vakje5 == 1 && vakje8 == 1) {
    text("BLUE WINS", 720, 50); line(750, 235, 750, 555)
  }
  else if (vakje3 == 1 && vakje6 == 1 && vakje9 == 1) {
    text("BLUE WINS", 720, 50); line(915, 235, 915, 555)
  }
  else if (vakje7 == 1 && vakje8 == 1 && vakje9 == 1) {
    text("BLUE WINS", 720, 50); line(585, 555, 915, 555)
  }
  else if (vakje3 == 1 && vakje5 == 1 && vakje7 == 1) {
    text("BLUE WINS", 720, 50); line(910, 235, 585, 575)
  }
  //Red Wins
  else if (vakje1 == 2 && vakje2 == 2 && vakje3 == 2) {
    text("RED WINS", 720, 50); line(585, 235, 910, 235)
  }
  else if (vakje1 == 2 && vakje4 == 2 && vakje7 == 2) {
    text("RED WINS", 720, 50); line(585, 235, 585, 575)
  }
  else if (vakje1 == 2 && vakje5 == 2 && vakje9 == 2) {
    text("RED WINS", 720, 50); line(585, 235, 915, 555)
  }
  else if (vakje4 == 2 && vakje5 == 2 && vakje6 == 2) {
    text("RED WINS", 720, 50); line(585, 397, 910, 397)
  }
  else if (vakje2 == 2 && vakje5 == 2 && vakje8 == 2) {
    text("RED WINS", 720, 50); line(750, 235, 750, 555)
  }
  else if (vakje3 == 2 && vakje6 == 2 && vakje9 == 2) {
    text("RED WINS", 720, 50); line(915, 235, 910, 555)
  }
  else if (vakje7 == 2 && vakje8 == 2 && vakje9 == 2) {
    text("RED WINS", 720, 50); line(585, 555, 910, 555)
  }
  else if (vakje3 == 2 && vakje5 == 2 && vakje7 == 2) {
    text("RED WINS", 720, 50); line(910, 235, 585, 575)
  }
  //draw
  else if (vakje1 != 0 && vakje2 != 0 && vakje3 != 0 && vakje4 != 0 && vakje5 != 0 && vakje6 != 0 && vakje7 != 0 && vakje8 != 0 && vakje9 != 0) {
    text("DRAW", 720, 50)
  }
}

function mousePressed() {

  turn = (turn + 1) %2;

  //vakje1
if (mouseButton == "left") {
 if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje1 == 0) {
 vakje1 = turn + 1;
 }
}

//vakje2
if (mouseButton == "left") {
 if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje2 == 0) {
 vakje2 = turn + 1;
 }
}

//vakje3
if (mouseButton == "left") {
 if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 160 && mouseY < 160 + 150 && vakje3 == 0) {
 vakje3 = turn + 1;
 }
}

//vakje4
if (mouseButton == "left") {
 if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje4 == 0) {
 vakje4 = turn + 1;
 }
}

//vakje5
if (mouseButton == "left") {
 if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje5 == 0) {
 vakje5 = turn + 1;
 }
}

//vakje6
if (mouseButton == "left") {
 if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 322 && mouseY < 322 + 150 && vakje6 == 0) {
 vakje6 = turn + 1;
 }
}

//vakje7
if (mouseButton == "left") {
 if (mouseX > 510 && mouseX < 510 + 150 && mouseY > 485 && mouseY < 485 + 150 & vakje7 == 0) {
 vakje7 = turn + 1;
 }
}

//vakje8
if (mouseButton == "left") {
 if (mouseX > 675 && mouseX < 675 + 150 && mouseY > 485 && mouseY < 485 + 150 && vakje8 == 0) {
 vakje8 = turn + 1;
 }
}

//vakje9
if (mouseButton == "left") {
 if (mouseX > 840 && mouseX < 840 + 150 && mouseY > 485 && mouseY < 485 + 150 && vakje9 == 0) {
 vakje9 = turn + 1;
 }
}

//Restart
if (mouseButton == "left") {
 if (mouseX > 50 && mouseX < 50 + 200 && mouseY > 650 && mouseY < 650 + 40) {
  vakje1 = 0;
  vakje2 = 0; 
  vakje3 = 0;
  vakje4 = 0;
  vakje5 = 0;
  vakje6 = 0;
  vakje7 = 0;
  vakje8 = 0;
  vakje9 = 0;
 }

}
}