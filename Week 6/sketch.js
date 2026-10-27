//HUD Stats: HNGR(Hunger), HP(Health), NRG(Energy), STRG(Strenght),  HAPP(Happiness)
let STS = {
HNGR: 1,
HP: 100,
NRG: 100,
STRG: 100,
HAPP: 100
}

//KeyInputs
let Left = 37
let Up = 38
let Right = 39
let Down = 40
//stat increase/decrease
let hunger = 0.01;
let Health = 0.1;
let Energy = 0.1;

//variabele voor buttons
let foodbut
let SPAbut
let HKbut
let BGbut = 0

//Pictures
let img
let DMimg
let SPAimg
let P1
let P1D

//Audio
let Sound_DM
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
DMimg = loadImage("Background_Dirtmouth.png")
P1 = loadImage("HKnight.png")
P1D = loadImage("HKShade.png")
SPAimg = loadImage("HKspa.png")
Sound_DM = loadSound("Audio_DirtMouth.mp3")

//idee is als je op een van de knoppen drukt dat img[] + 1 is en dat img[0] = hk, img[1] = slmrnchr, img[2]
} 

function setup() {
  createCanvas(500, 400);
  foodbut = createButton("FOOD")
  foodbut.position(450, 100)

  SPAbut = createButton("SPA")
  HKbut = createButton("Dirtmouth")
}

function draw() {
    background(220);
  //Sound_DM.play()
  
if (BGbut <= 0) {
  img = DMimg
}
else if (BGbut >= 1) {
img = SPAimg
}


  image(img, 0, 0, 500, 400)
  image(P1, PX, PY, PW, PH)
strokeWeight(0)

//foodbutton
foodbut.mousePressed(food)

//background buttons
SPAbut.mousePressed(SPAA)
HKbut.mousePressed(DIRT)

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
if (STS.HP > 100) {
  STS.HP = 100
}

if (STS.HP < 100 && img == SPAimg) {
for (let i = 0; i < 2; i++) {
STS.HP = STS.HP + Health * i;
}}
STS.HP = round(STS.HP, 2)

//Energy
STS.NRG = round(STS.NRG, 2)
fill("red")
rect(80, 0, 100, 30, 5)
fill("yellow")
rect(80, 0, STS.NRG, 30, 5)
fill(0)
text("Energy: " + STS.NRG, 90, 20)



//pet health and hunger
if (STS.HNGR <= 0) {
  STS.HNGR = 0 + 0.01;
  STS.NRG = STS.NRG - Energy;
  STS.HP = STS.HP - Health;
  STS.HP = round(STS.HP, 1)
}
if (STS.HP <= 0) {
  STS.HP = 0;
  STS.NRG = 0
}

if (STS.HP <= 0) {
  P1 = P1D
}

if (STS.NRG <= 0) {
  STS.NRG = 0;
Left = null
Up = null
Right = null
Down = null
}

if (STS.HP <= 0) {
Left = null
Up = null
Right = null
Down = null
}

//Pet1 movement + Energy drain
if (keyIsPressed === true && keyCode === Left) {
  PX = PX - P1X;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === Up) {
  PY = PY - P1Y;
  PH = PH - P1H;
  PW = PW - P1W;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === Right) {
  PX = PX + P1X;
  STS.NRG = STS.NRG - Energy
}

if (keyIsPressed === true && keyCode === Down) {
  PY = PY + P1Y;
  PH = PH + P1H;
  PW = PW + P1W;
  STS.NRG = STS.NRG - Energy
}

else if (keyIsPressed === false && STS.HNGR > 0) {
  STS.NRG = STS.NRG + Energy
}

if (STS.NRG > 100) {
  STS.NRG = 100 
}

if (PY <= 200) {
  PY == 200;
} 

}

function SPAA() {
BGbut = 1
}


function DIRT() {
BGbut = 0
}

function food() {
  STS.HNGR = + 100
}

function keyPressed() {
  if (keyIsPressed) {
		console.log(keyCode);
}
}