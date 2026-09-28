function setup() {
  createCanvas(1500, 705);
}

function draw() {
  background(220);
  strokeWeight(1)
  text("1.", 20, 15)

  for (let i = 0; i < 10; i++) {

    if (i == 6) {
      fill(112, 0, 200)
    }
    else {
      fill("white")
    }

    rect(20 + i * 50, 40, 50)


  }


  fill(0)
  text("2.", 20, 105)


  for (let r = 0; r < 5; r++) {

    fill(40 * r)

    rect(20, r * 40 + 130, 40, 40)
  }


  fill(0)
  text("3.", 80, 105)
  let xOffset = 0;
  for (let q = 0; q < 4; q++) {

    fill(0, 40 * q, 50)

    rect(80 + xOffset, 120, 20 * q + 20, 30)
    xOffset = xOffset + 20 * (q + 1)
  }



  fill(0)
  text("4.", 80, 205)

  fill("gray")
  let tOffset = 0;
  for (let t = 0; t < 4; t++) {
    rect(80 + tOffset + 20 * t, 215, 20 + 25 * t, 40 + 25 * t);
    tOffset = tOffset + 25 * t
  }


  fill(0)
  text("5.", 540, 20)

  fill("gray")
  for (let C = 0; C < 6; C++) {
    strokeWeight(2 * C)
    circle(600 + 35 * C, 20, 30)
  }

  strokeWeight(1)
  fill(0)
  text("6.", 350, 105)

  for (let A = 10; A > 0; A--) {
    if (A % 2 !== 0) {
      fill("white")
    }
    else {fill("red")}
    circle(500, 205, 20 * A);

  }


  fill(0)
  text("7.", 625, 105)
  fill("gray")

  for (let J = 0; J < 21; J++) {
    if (J < 11) {
      rect(625, 120 + J * 20, 20 + J * 20, 20)
    }
    if (J >= 11) {
      rect(625, 120 + J * 20, 420 - J * 20, 20)
    }

  }

}
