let x = 100
let greeting = "Hello World!"
let a = 20
let b = 10

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);

text(x, 20, 20);

text(greeting, 20, 40);

let optelResultaat = a + b;
text("Optellen:" + optelResultaat, 20, 60);
//text(a + b, 70, 60)

let opterlResultaat2 = a - b;
text("Aftrekken:" + opterlResultaat2, 20, 80);

let optelResultaat3 = a * b;
text("Vermenigvuldigen:" + optelResultaat3, 20, 100);

let optelResultaat4 = a / b;
text("Delen:" + optelResultaat4, 20, 120);

}
