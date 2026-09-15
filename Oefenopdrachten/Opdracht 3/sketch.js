let score;


function setup() {
  createCanvas(400, 200);

  score = random(100);
}

function draw() {
  background(220);



if (score >90) {fill(50, 240, 50);
  text("Uitstekend!", 200, 100)
}
else if(score >=70) {fill(50, 100, 200);
  text("Goed Gedaan!", 200, 100)
}
else if (score >= 50) {fill(200, 100, 0);
  text("voldoende", 200, 100)
}
else {fill(250, 20, 20);
  text("Onvoldoende", 200, 100)
}
 
}
