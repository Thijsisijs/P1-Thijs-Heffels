//guess the game
// vragen
//1. From what game is this tree
//2.
//3.
//4.
//5.
//6.
//7.
//8.
//9.
//10.


let img;
let rokW = 300
let rokH = 100
let colorV = "gray"
let colorX = "grey"
let coleur1 = "white"
let coleur2 = "white"
let vraag1T = ["Dark Souls III",
"The Witcher 3:",
"Wild Hunt",
"Elderscrolls V: Skyrim",
"Elden Ring"]
function preload() {
  img = loadImage("https://static.wikia.nocookie.net/eldenring/images/a/ae/ER_Object_Erdtree.png/revision/latest/scale-to-width-down/1200?cb=20250131044337");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
    image(img, 0, 0, 800, 600);

  textSize(50)
  text("Vraag 1.", 300, 100)
  textSize(30)
  text("What game is this?", 270, 200)

  
//Vakjes Vraag 1
fill(coleur1)
  Vraag1(50, 300)
  Vraag1(450, 300)
  Vraag1(50, 450)
  fill(coleur2)
  Vraag1(450, 450)

  // text/opties vraag 1
  fill(0)
  text(vraag1T[0], 100, 360)
  text(vraag1T[1], 500, 340)
  text(vraag1T[2], 530, 380)
  text(vraag1T[3], 55, 510)
  text(vraag1T[4], 525, 510)



} 

function Vraag1(rokX, rokY) {


    if (mouseX > rokX && mouseX < rokX + rokW && 
    mouseY > rokY && mouseY < rokY + rokH) {
  fill(colorV)}
  else {
    fill(220)
  }

  if (mouseX > 450 && mouseX < 450 + rokW && 
    mouseY > 450 && mouseY < 450 + rokH &&
    mouseButton == LEFT) {
    colorV = "green"
  }
  else{
    colorX = "gray";
    colorV = "gray"
  }


 rect(rokX, rokY, 300, 100, 10)
}

function mousePressed() {
if (mouseButton == LEFT) {
  console.log("hi")
}
}