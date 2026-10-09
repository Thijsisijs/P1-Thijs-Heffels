let circles = [];
let counter = 0;
function setup() {
  createCanvas(600, 600)
  for (let i = 0; i < 50; i++) {
    let cirkel = {
      Xpos: random(50, 600),
      Ypos: random(50, 300),
      rad: random(30, 100),
      kleur: random(["red", "green", "blue", "purple", "yellow", "pink", "orange"]),
      Xspeed: random(-5, 5),
      Yspeed: random(-5, 5),
    }
    circles.push(cirkel);

  }
}


function draw() {
  background(13, 132, 164);
  
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(c.kleur);
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
  //counter
  textSize(50)
  fill(random(0, 255,), random(0, 255,), random(0, 255,))
  text(counter, 300, 300)
}

function mousePressed() {
  if(mouseButton != LEFT){
    return;
  }


  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    let afstandTotMuis = dist(mouseX, mouseY, c.Xpos, c.Ypos);
    if (afstandTotMuis < c.rad / 2.0) {
      circles.splice(i, 1);
      break; // ga uit de loop
    }

   for (let i = 0; i < circles.length; i++) {
     c = circles[i];
     afstandTotMuis = dist(mouseX, mouseY, c.Xpos, c.Ypos);
    if (afstandTotMuis < c.rad / 2.0)
      counter = counter + 1;
    }
    
  
  }
}