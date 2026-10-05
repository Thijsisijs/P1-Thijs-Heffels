function setup() {
  createCanvas(800, 400);
}

//opdracht 1 huisjes
function draw() {
  background(220);
  textSize(12)
text("1.", 20, 20);

tekenHuis(10);
tekenHuis(70);
tekenHuis(130);


//opdracht 2 vormen en text
text("2.", 20 , 125);

eenRondje(25, 160);
eenRechthoekje(40, 30)
eenLijntje(100, 190)
eenTextje(20, "green")
fill("gray")


//opdrracht 3 sommen
text("3.", 20, 250)
text(eenOptelSommetje(11, 57), 50, 270);
text(eenDeelSommetje(12300, 30),50, 300)
text(eenVermeenigvuldigSommetje(215, 3), 50, 330)
text(eenMinSommetje(449, 69), 50, 360)
}

//opdracht 1 huisjes
function tekenHuis(hX) {

  fill("gray");
  rect(hX, 50, 50);
  triangle(hX, 50, 25 + hX, 30, 50 + hX, 50);
  rect(25 + hX, 75, 10, 25);
  rect(10 + hX, 60, 10);
  rect(30 + hX, 60, 10);
}

//opdracht 2 vormen (cirkel)
function eenRondje(cX, cY,) {
circle(cX, cY, 40);
}

//opdracht 2 vormen (rechthoek)
function eenRechthoekje(rB, rH) {
rect(50, 145, rB, rH)
}

//opdracht 2 vormen (lijntje)
function eenLijntje(lX, lY) {
line(5, 190, lX, lY)
}

//opdracht 2 text (text)
function eenTextje(tS, tK) {
  textSize(tS)
  fill(tK)
text("EeNtExTjE", 35, 125)
}

//opdracht 3 sommen (optellen)
function eenOptelSommetje(OG1, OG2) {
    return OG1 + OG2;
}

//opdracht 3 sommen (delen)
function eenDeelSommetje(DG1, DG2) {
return DG1 / DG2;
}

//opdracht 3 sommen (vermenigvuldigen)
function eenVermeenigvuldigSommetje(VG1, VG2) {
return VG1 * VG2
}

//opdracht 3 sommen (aftrekken)
function eenMinSommetje(MG1, MG2) {
  return MG1 - MG2
}
