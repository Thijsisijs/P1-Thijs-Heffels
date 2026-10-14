//HUD Stats: HNGR(Hunger), HP(Health), NRG(Energy), STRG(Strenght),  HAPP(Happiness)
let STS = {
HNGR: 100,
HP: 100,
NRG: 100,
STRG: 100,
HAPP: 100
}
//stat decrease
let hunger = 0.01;
let Health = 0.1;
let Energy = 0.1
//variabele voor food button
let foodbutton 
//pet placeholder (zn naam is jon)
let jonc
let jonX
let jonY

//pet placeholder colors
let color = ["green", "yellow", "red"]

//mouseXpossition check
let MXPC = mouseX

function setup() {
  createCanvas(500, 400);
  frameRate(240)
  foodbutton = createButton("FOOD")
  foodbutton.position(450, 100)
  //pet placeholder
jonX = random(500)
jonY = random(500)
}

function draw() {
  background(220);

strokeWeight(0)

//hungerbar
STS.HNGR = STS.HNGR - hunger
STS.HNGR = round(STS.HNGR, 2)
fill("red")
rect(320, 0, 100, 30, 5)
fill("orange")
rect(320, 0, STS.HNGR, 30, 5)
fill(0)
text("hunger: " + STS.HNGR, 325, 20);

//Healthbar
fill("red")
rect(200, 0, 100, 30, 5)
fill("green")
rect(200, 0, STS.HP, 30, 5)
fill(0)
text("HP: " + STS.HP, 235, 20)

//Energybar
fill("red")
rect(80, 0, 100, 30, 5)
fill("green")
rect(80, 0, STS.NRG, 30, 5)
fill(0)
text("Energy: " + STS.NRG, 100, 20)

//pet health + pet placeholder
if (STS.HP >=70 ){
  fill(color[0])
}
else if (STS.HP <= 20) {
  fill(color[2])
}
else {
  fill(color[1])
}
circle(jonX, jonY, STS.HP)

if (mouseIsPressed === true) {
  jonX = mouseX;
  jonY = mouseY
}

STS.NRG = round(STS.NRG, 1)

if (mouseIsPressed === true) {
  STS.NRG = STS.NRG - Energy
}



//jon placeholder color change
if (STS.HNGR <= 0) {
  STS.HNGR = 0 + 0.01 
  STS.HP = STS.HP - Health;
  STS.HP = round(STS.HP, 1)
}


//foodbutton
foodbutton.mousePressed(food)
}

function food() {
  STS.HNGR = + 100
}


//als mousepressed === true && mousex en mousey zijn anders dan vorige draw, nrg = nrg - energy