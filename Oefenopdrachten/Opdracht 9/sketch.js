let circles = [];
function setup() {
  createCanvas(600, 600)
  for (let i = 0; i < 999; i++) {
    let cirkel = {
      Xpos: random(50, 600),
      Ypos: random(50, 300),
      rad: random(10, 50),
      kleur: random("red", "green", "blue"),
      Xspeed: random(1, 5),
      Yspeed: random(1, 5),
    }
    circles.push(cirkel);

    circles.Xpos = circles.Xpos + circles.Xspeed
    circles.Ypos = circles.Ypos + circles.Yspeed
  }
}


function draw() {
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(c.kleur);
    circle(c.Xpos, c.Ypos, c.rad)
  }
}