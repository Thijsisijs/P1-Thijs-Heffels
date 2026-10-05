// vragen
//1. 
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

  vragen1(50, 300)
  text("Mario Kart World", 80, 360)
  vragen1(450, 300)
  text("Fortnite", 550, 360)
  vragen1(50, 450)
  text("Elderscrolls V: Skyrim", 55, 510)
  vragen1(450, 450)
  text("Elden Ring", 525, 510)



} 

function vragen1(rokX, rokY) {
  rect(rokX, rokY, 300, 100, 10)
}

function mousePressed() {

}