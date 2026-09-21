let getal = 0
let stoplichtkleur = 0
let eball = 200
let eballspeed = 0
let ebally = 200
let eballyspeed = 0

function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(220);

  fill(0)
  text("1. Blokje laten verschijnen", 10, 10)

  fill(200, 0, 0)
  if (keyIsDown(66)) {
    rect(20, 20, 60)
  }

  fill(0)
  text("2. Teller", 10, 100)

  getal += 1

  fill(0, 200, 0)
  text(getal, 20, 120)
  if (keyIsDown(32)) {
    getal = -1
  }
  if (getal >= 500) {
    getal = -1
  }
  //fsr -1 is 0. komt denk ik door de  getal += 1

  fill(0)
  text("3. Werkend verkeerslicht", 10, 140)
  fill(100)
  rect(10, 160, 30, 70)
  rect(20, 230, 10, 30)


  if (stoplichtkleur == 0) {
    fill(200, 0, 0)
  }
  else {
    fill(250)
  }
  circle(25, 170, 20)


  if (stoplichtkleur == 1) {
    fill(200, 150, 0)
  }
  else {
    fill(250)
  }
  circle(25, 195, 20)



  if (stoplichtkleur == 2) {
    fill(0, 200, 0)
  }
  else {
    fill(250)
  }
  circle(25, 220, 20)

  fill(0)
  text("4. Moving eightball", 10, 280)

  eball = eball + eballspeed
  ebally = ebally + eballyspeed
  circle(eball, ebally, 50)
  fill(255)
  text("8", eball - 4, ebally,)

  
  if (keyIsDown (68)) {
    eballspeed = 1
  }
  else if (keyIsDown (65)) {
    eballspeed = -1
  }
  else {
  eballspeed = 0
}

  if (keyIsDown (87)) {
    eballyspeed = 1
  }
  else if (keyIsDown (83)) {
    eballyspeed = -1
  }
  else {
  eballyspeed = 0
}
}

function keyPressed() {
  if (keyCode == 13) {
    stoplichtkleur = stoplichtkleur + 1
  }

  if (stoplichtkleur == 3) {
    stoplichtkleur = 0
  }

  console.log(keyCode)
}

