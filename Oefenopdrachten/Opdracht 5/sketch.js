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

  
  for (let r = 0; r < 5; r++) {

    if (r == 0) {
      fill(0)
    }
    if (r == 1) {
      fill(51)
    }
    if (r == 2)  {
      fill(102)
    }
    if (r == 3) {
      fill(153)
    }
    if (r == 4) {
      fill(204)
    }

    rect(20, r * 40 + 130, 40, 40)
  }


  fill(0)
  text("3.", 80, 105)
  let xOffset = 0;
  for (let q = 0; q < 4; q++) {
    if (q == 0) {
      fill("red")
    }
    if (q == 1) {
      fill("orange")
    }
    if (q == 2) {
      fill("yellow")
    }
    if (q == 3) {
      fill(100, 200, 100)
    }

    rect(80 + xOffset, 120, 20 * q + 20, 30)
    xOffset = xOffset + 20 * (q + 1)
  }


  fill(0)
  text("4.", 80, 205)
  let yOffset = 0;
  for (let e = 0; e < 4; e++) {
    if (e == 0) {
      fill("red")
    }
    if (e == 1) {
      fill("orange")
    }
    if (e == 2) {
      fill("yellow")
    }
    if (e == 3) {
      fill(100, 200, 100)
    }

    rect(80 + 20 * e, 210, 30, 20 * e + 20)
  }



  fill(0)
  text("5.", 540, 20)


  fill(0)
  text("6.", 350, 105)


  fill(0)
  text("7.", 625, 105)


}
