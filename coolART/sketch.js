let REQ = []
let RE = []
let circles = [];
function setup() {
  createCanvas(1960, 1080)
 //framerate
frameRate(240)
let gg = random(196, 980) 

  for (let i = 0; i < 1000; i++) {
    let cirkel = {
      Xpos: random(50, 600),
      Ypos: random(50, 300),
      rad: random(30, 50),
      kleur: random(["red", "green", "blue", "purple", "yellow", "pink", "orange"]),
      Xspeed: random(-5, 5),
      Yspeed: random(-5, 5),
    }
    circles.push(cirkel);

  }
}



function draw() {
//background
   for (let I = 0; I < RE.length; I++) {
   };
  for (let I = 0; I < 5; I++) {
    RE.push([random(255), random(255), random(255)])

  };

    for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(random(0, 255), random(0, 255), random(0, 255));
    circle(c.Xpos, c.Ypos, c.rad);
    c.Xpos = c.Xpos + c.Xspeed;
    c.Ypos = c.Ypos + c.Yspeed;

    if(c.Xpos < c.rad * 0.5 || c.Xpos > width - c.rad * 0.5){
      c.Xspeed = c.Xspeed * -1.0;
    }
    
    if (c.Ypos < c.rad * 0.5 || c.Ypos > height - c.rad * 0.5) {
      c.Yspeed = c.Yspeed * -1.0;
    }
  }
}