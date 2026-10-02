let KLR = []
let RD = []

function setup() {
  createCanvas(380, 350);
  for (let I = 0; I < 5; I++) {
    KLR.push([random(255), random(255), random(255)])

  };

  for (let I = 0; I < 12; I++) {
    let randomGetal = random(100);
    let afgerondRandomGetal = round(randomGetal);
    RD.push(afgerondRandomGetal);
  }

}

function draw() {
  textSize(12)
  let kleuren = ["red", "green", "blue", "purple", "yellow"]
  let getallen = [400,
    240,
    10,
    490,
    30,
    60,
    244,
    500,
    301,
    300]

  background(220);

  //Opdracht 1: Kleuren in een array
  fill(0)
  text("1.", 20, 15)

  for (let I = 0; I < 5; I++) {

    fill(kleuren[I])
    text(kleuren[I], 20, 25 + 15 * I)

  }

  // Opdracht 2: Pas de array aan met pop
  fill(0)
  text("2.", 20, 100)
  kleuren.push("red")

  kleuren.shift()
  for (let I = 0; I < 5; I++) {

    fill(kleuren[I])
    text(kleuren[I], 20, 110 + 15 * I)

  }


  //Opdracht 3: Twee kleuren weghalen
  fill(0)
  text("3.", 20, 190)

  kleuren.splice(1, 2);

  for (let I = 0; I < kleuren.length; I++) {

    fill(kleuren[I])
    text(kleuren[I], 20, 200 + 15 * I)

  }



  //Opdracht 4: Getallen filteren
  fill(0);
  text("4.", 20, 245);

  let Y = 0

  for (I = 0; I < getallen.length; I++) {



    if (getallen[I] < 300) {


      text(getallen[I], 20, (260 - Y) + 15 * I);

      if (I <= 1) {
        Y = 30
      }
    }

  }




  // Opdracht 5: Meerdere arrays optellen bij elkaar
  fill(0)
  let araya51 = [3, 55, 93, 20, 102, 6]
  let araya52 = [14, 22, 80, 5]
  let antwoord = 0
  text("5.", 120, 15);

  for (let I = 0; I < araya51.length; I++) {

    antwoord = antwoord + araya51[I]

    if (I < araya52.length) {
      antwoord = antwoord + araya52[I];
    }


  }

  textSize(30)
  text(antwoord, 120, 50)



  //opdracht 6: Letters tellen
  let woord = "Overheidsfinancieringstekort";
  textSize(12)
  fill(0);
  text("6.", 120, 100);
  textSize(30);
  let teller = 0;
  for (I = 0; I < woord.length; I++) {

    if(woord[I] == "e" || woord[I] == "E"){
      teller++;
    }
  }

  text(teller + "x", 120, 150);


  // Opdracht 7: Alfabetische volgorde
  let coluors = ["red", "green", "blue", "purple", "yellow"]
  textSize(12)
  fill(0)
  text("7.", 120, 190)

  for (I = 0; I < coluors.length; I++) {
    coluors.sort()
    fill(coluors[I])
    text(coluors[I], 120, 200 + 15 * I)
  }



  fill(0)
  //Opdracht 8: Random kleuren op een rij
  text("8.", 120, 280)
  fill(255)

  for (let I = 0; I < 5; I++) {
    fill(KLR[I])
    rect(120 + I * 50, 290, 50)
  }



  //Opdracht 9: Random getallen en hun gemiddelde
  fill(0)
  let totaal = 0
  let afgerond = 0
  text("9.", 240, 15)
  textSize(12)
  for (let I = 0; I < RD.length; I++) {
    text(RD[I], 240, 30 + 15 * I)
    totaal = totaal += RD[I];

    afgerond = totaal / RD.length

  }
  afgerond = round(afgerond)
  textSize(20)
  text("Totaal = " + totaal, 200, 215)
  text("Afgerond = " + afgerond, 200, 235);


}
