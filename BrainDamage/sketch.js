let REQ = []
let RE = []
function setup() {
  createCanvas(1960, 1080)
 //framerate
frameRate(240)
}



function draw() {
//background
   for (let I = 0; I < RE.length; I++) {
    background(RE[I]);
   };
  for (let I = 0; I < 5; I++) {
    RE.push([random(255), random(255), random(255)])

  };
  



}