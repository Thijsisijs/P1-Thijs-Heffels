//HUD Stats: HNGR(Hunger), HP(Health), NRG(Energy), STRG(Strenght),  HAPP(Happiness)
let STS = {
HNGR: 10,
HP: 100,
NRG: 10,
STRG: 100,
HAPP: 10
}

//KeyInputs
let Left = 37
let Up = 38
let Right = 39
let Down = 40

//stat increase/decrease
let Hunger = 0.01;
let Happy = 0.04;
let Health = 0.08;
let Energy = 0.1;

//buttons
let foodbut;
let SPAbut;
let HKbut;
let Reset;
let Sleep;
let BGbut = 0

//Pictures
let img
let DMimg
let SPAimg
let PET
let P1
let P1D
let Petc = 0
let Bench
let DeathBench
let LifeBlood

//Audio
let Sound_DM
let Sound_SR

//pet movement
let P1Y = 1
let P1X = 1
let P1W = 0.5
let P1H = 0.5
let PY = 200
let PX = 200
let PW = 80
let PH = 100

// Death Counter
DCounter = 0

function preload() {
DMimg = loadImage("Background_Dirtmouth.png")
P1 = loadImage("HK_night.png")
P1D = loadImage("HK_Shade.png")
SPAimg = loadImage("HK_spa.png")
Sound_DM = loadSound("Audio_DirtMouth.mp3")
Bench = loadImage("HK_Bench.png")
LifeBlood = loadImage("HK_Food.png")
DeathBench = loadImage("HK_Shadesleep.png")



//idee is als je op een van de knoppen drukt dat img[] + 1 is en dat img[0] = hk, img[1] = slmrnchr, img[2]
} 

function setup() {
  createCanvas(500, 400);
  foodbut = createButton("FOOD")
  foodbut.position(450, 100)

  SPAbut = createButton("SPA")
  HKbut = createButton("Dirtmouth")
  Sleep = createButton("Sleep")

  Reset = createButton("Reset Pet")
}

function draw() {
  
    background(220);
  //Sound_DM.play()
  
if (BGbut <= 0) {
  img = DMimg
Left = 37
Up = 38
Right = 39
Down = 40
foodbut.show()
}
else if (BGbut == 1) {
img = SPAimg
PY = 270;
PX = 200;
PW = 80 ;
PH = 100;
}
else if (BGbut = 2) {
img = Bench
}

if (BGbut >= 1) {
Left = null
Up = null
Right = null
Down = null
foodbut.hide()
}

if (BGbut == 2) {
  STS.NRG = STS.NRG + Energy
}

if (Petc <= 0) {
  PET = P1
}
else if (Petc >= 1) {
  PET = P1D
}

  image(img, 0, 0, 500, 400)
  image(PET, PX, PY, PW, PH,)
strokeWeight(0)

  textSize(20)
  fill(180, 20, 120)
  text("Deaths: "+ DCounter, 400, 50,)
  textSize(13)

//food img

//foodbutton
foodbut.mousePressed(food)

//background buttons
SPAbut.mousePressed(SPAA)
HKbut.mousePressed(DIRT)
Sleep.mousePressed(bench)

// Petbuttons
Reset.mousePressed(RESET)

//hungerBar
STS.HNGR = STS.HNGR - Hunger
STS.HNGR = round(STS.HNGR, 2)
fill("red")
rect(250, 0, 100, 30, 5)
fill("orange")
rect(250, 0, STS.HNGR, 30, 5)
fill(0)
text("Hunger: " + STS.HNGR, 265, 20);

//HealthBar
fill("red")
rect(130, 0, 100, 30, 5)
fill("green")
rect(130, 0, STS.HP, 30, 5)
fill(0)
text("HP: " + STS.HP, 145, 20)
if (STS.HP > 100) {
  STS.HP = 100
}

//EnergyBar
STS.NRG = round(STS.NRG, 2)
fill("red")
rect(10, 0, 100, 30, 5)
fill("yellow")
rect(10, 0, STS.NRG, 30, 5)
fill(0)
text("Energy: " + STS.NRG, 20, 20)

//HappynessBar
fill("red")
rect(370, 0, 100, 30, 5)
fill("blue")
rect(370, 0, STS.HAPP, 30, 5)
fill(0)
text("Happy: " + STS.HAPP, 385, 20)



//pet health, hunger, enegry & Happyness

if (STS.HP > 0 && STS.HP < 100 && img == SPAimg) {
for (let i = 0; i < 2; i++) {
STS.HP = STS.HP + Health * i + 0.02;
}}
else if (STS.HP <= 0) {
  STS.HP = 0
}

if (STS.HNGR <= 0) {
  STS.HNGR = 0 + 0.01;
  STS.HP = STS.HP - Health;
  STS.HP = round(STS.HP, 1);
}




if (STS.HAPP <= 2) {
  STS.HP = STS.HP - Health
}
else {STS.HP = STS.HP}

STS.HP = round(STS.HP, 2)


STS.HAPP = round(STS.HAPP, 2)

if (STS.HAPP >= 100) {
  STS.HAPP = 99.96
}
if (STS.HAPP <= 0) {
  STS.HAPP = 0
}

if (STS.HNGR >= 60 && STS.HP >=80 && STS.NRG >= 10) {
STS.HAPP = STS.HAPP + Happy}
else {STS.HAPP = STS.HAPP - Happy}




if (STS.HP <= 0) {
  STS.HP = 0;
  STS.NRG = 0;
  STS.HNGR = 0;
  STS.HAPP = 0
}


if (STS.HP <= 0) {
  Petc = 1;
  Health = 0;
  Hunger = 0;
  Happy = 0;
  Energy = 0
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

else {STS.NRG = STS.NRG}

if (STS.NRG > 100) {
  STS.NRG = 100 
}

if (PY <= 200) {
  PY == 200;
} 


//map boundries
if (PX >= 600) {
  PX = -100
}
else if (PX <= -100) {
  PX = 600
}

if (PY >= 150) {
  PY = 180
}

}

function DIRT() {
BGbut = 0;
PY = 200;
PX = 200;
PW = 80;
PH = 100;
}

function SPAA() {
BGbut = 1
}

function food() {
  STS.HNGR = + 100
  image(LifeBlood, rand1, rand2, 50, 50)
}

function bench() {
  BGbut = 2
 PX = 999;

}

function RESET() {
  if (Petc == 1) {
  PET = P1;
  STS.HP = 100;
  STS.HNGR = 100;
  STS.NRG = 100;
  BGbut = 0;
  PY = 200
  PX = 200
  PW = 80
  PH = 100
  Petc = 0;
  Health = 0.1
  Hunger = 0.01;
  Energy = 0.1;
  Happy = 0.04
  DCounter = DCounter + 1
  }
  else {
  STS.HP = STS.HP;
  STS.HNGR = STS.HNGR;
  STS.NRG = STS.NRG;
  BGbut = BGbut;
  PY = PY;
  PX = PX;
  PW = PW;
  PH = PH;
  Petc = Petc;
  Health = Health;
  Hunger = Hunger;
  Energy = Energy;
  Happy = Happy;
  DCounter = DCounter
  }
}

function keyPressed() {
  if (keyIsPressed) {
		console.log(keyCode);
}
}