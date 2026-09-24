function setup() {
  createCanvas(1500, 705);
}

function draw() {
  background(220);

  text("1.", 20, 15)

  for (let i = 0; i < 10; i++) {
    
    if (i == 6) {
      fill(112, 0, 200)
    }
    else
    {
      fill("white")
    }

    rect(20 + i * 50, 40, 50)


  }


  fill(0)
  text("2.", 20, 105)
  text("3.", 80, 105)
  text("4.", 80, 205)
  text("5.", 540, 20)
  text("6.", 350, 105)
  text("7.", 625, 105)

}
