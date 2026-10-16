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

//variabele voor buttons
let foodbutton
let SR
let HK

//Pictures
let img
let img2
let P1

//Audio
let Sound_HK
let Sound_SR

//pet1 movement var
let P1Y = 1
let P1X = 1
let P1W = 0.5
let P1H = 0.7
let PY = 200
let PX = 0
let PW = 80
let PH = 100

function preload() {
img = loadImage("Background_Dirtmouth.png")
P1 = loadImage("HKnight.png")
img2 = loadImage("Background_SlimeRancher.png")

} 

function setup() {
  createCanvas(500, 400);
  foodbutton = createButton("FOOD")
  foodbutton.position(450, 100)

  SR = createButton("SlimeRancher")
  HK = createButton("HollowKnight")
  Sound_HK = loadSound("Audio_HollowKnight.mp3")
}

function draw() {
  background(220);
  image(img, 0, 0, 500, 400)
  image(P1, PX, PY, PW, PH)
strokeWeight(0)

//foodbutton
foodbutton.mousePressed(food)

//background buttons
SR.mousePressed(Slimerancher)

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

//Energy
STS.NRG = round(STS.NRG, 2)
fill("red")
rect(80, 0, 100, 30, 5)
fill("yellow")
rect(80, 0, STS.NRG, 30, 5)
fill(0)
text("Energy: " + STS.NRG, 90, 20)

if (STS.NRG <= 0) {
  STS.NRG === 0
}


//pet health and hunger
if (STS.HNGR <= 0) {
  STS.HNGR = 0 + 0.01 
  STS.HP = STS.HP - Health;
  STS.HP = round(STS.HP, 1)
}
if (STS.NRG <= 0) {
  STS.NRG = 0;
  
}

//Pet1 movement + Energy drain
if (keyIsPressed === true && keyCode === 37) {
  PX = PX - P1X;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === 38) {
  PY = PY - P1Y;
  PH = PH - P1H;
  PW = PW - P1W;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === 39) {
  PX = PX + P1X;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === 40) {
  PY = PY + P1Y;
  PH = PH + P1H;
  PW = PW + P1W;
  STS.NRG = STS.NRG - Energy
}

if (PY <= 200) {
  PY == 200;
}

}

function Slimerancher() {

}

function food() {
  STS.HNGR = + 100
}

function keyPressed() {
  if (keyIsPressed) {
		console.log(keyCode);
}
}