let Ex
let Ey
let Ew
let Ez

let Eco = []
let Ecol = []
function setup() {
  createCanvas(1500, 705)

  //framerate
frameRate(8)
}


function draw() {

  //background randomizer
   for (let I = 0; I < Eco.length; I++) {
    background(Ecol[I]);
   }
Ex = random(1500)
Ey = random (705)
Ew = random (705)
Ez = random (705)

//vorm randomizer
  for (let I = 0; I < 5; I++) {
    Ecol.push([random(255), random(255), random(255)])

  };
  
for (let I = 0; I < 5; I++) {
    Eco.push([random(255), random(255), random(255)])

  };

   for (let I = 0; I < Eco.length; I++) {
    fill(Eco[I])

  }
//vormen
rect(Ex, Ey, Ew, Ez)
circle(Ex, Ey, Ez,)
triangle(Ex, Ey, Ew, Ey, Ex, Ez)
rect(Ex, Ey, Ew, Ez)
circle(Ex, Ey, Ez,)
triangle(Ex, Ey, Ez, Ex, Ew, Ey)
rect(Ez, Ey, Ew, Ex)
circle(Ez, Ex, Ey,)
triangle(Ex, Ex, Ex, Ex, Ex, Ex)
rect(Ex, Ez, Ew, Ex)
circle(Ey, Ey, Ey,)
triangle(Ez, Ex, Ew, Ez, Ew, Ez)

}