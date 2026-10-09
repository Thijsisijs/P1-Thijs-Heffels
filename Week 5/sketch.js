//guess the game
// vragen
//1. From what game is this tree
//2.
//3.
//4.
//5.
//6.
//7.
//8.
//9.
//10.

let Counter = 0
let img

//knoppen
let button1
let button2
let button3
let button4
let continuew
let buttons = [];
let magKlikken = true;

let vragen = [
    {
        Titel: "Vraag 1",
        Vraag: "What game is This?",
        Optie1: "The Witcher 3: Wild Hunt",
        Optie2: "Dark Souls III",
        Optie3: "The Elderscrolls V: Skyrim",
        Optie4: "Elden Ring",
        GA: 4,
        BackgroundPath: "Erdtree.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 2",
        Vraag: "What game is this?",
        Optie1: "Little Nightmares: HideAway",
        Optie2: "Hello Neighbor 2",
        Optie3: "Hello Neighbor: Alpha 3",
        Optie4: "Redident Evil 5",
        GA: 1,
        BackgroundPath: "Fireplace.png",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 3",
        Vraag: "What game is this?",
        Optie1: "Persona 5 Royal",
        Optie2: "Deltarune",
        Optie3: "Undertale",
        Optie4: "StardewValley",
        GA: 3,
        BackgroundPath: "House.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 4",
        Vraag: "What game is This?",
        Optie1: "Persona 5: Royal",
        Optie2: "Persona 3: Reload",
        Optie3: "Persona 4: Revival",
        Optie4: "Metaphore: ReFantazio ",
        GA: 2,
        BackgroundPath: "eenSchool.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 5",
        Vraag: "What game is This?",
        Optie1: "Pokémon Ultra Sun",
        Optie2: "Super Mario Odessey",
        Optie3: "Disney Infinity",
        Optie4: "Skylanders: TrapTeam",
        GA: 4,
        BackgroundPath: "Academy.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 6",
        Vraag: "What game is This?",
        Optie1: "The Elderscrolls V: Skyrim",
        Optie2: "Fallout 3",
        Optie3: "Fallout: New Vegas",
        Optie4: "Borderland 3",
        GA: 2,
        BackgroundPath: "Bomb.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 7",
        Vraag: "What game is This?",
        Optie1: "Resident evil 2 (Dreamcast)",
        Optie2: "Among Us",
        Optie3: "Five Nights At Freddy's 2",
        Optie4: "Phasmophobia",
        GA: 3,
        BackgroundPath: "Fred.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 8",
        Vraag: "What game is This?",
        Optie1: "Grand Theft Auto 4",
        Optie2: "Grand Theft Auto 5 ",
        Optie3: "Infamous: Second Son",
        Optie4: "Watch Dogs ",
        GA: 2,
        BackgroundPath: "Eenhoorn.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 9",
        Vraag: "What game is This?",
        Optie1: "Horizon: Forbidden West",
        Optie2: "Battlefield V",
        Optie3: "Star Wars: Jedi Fallen Order",
        Optie4: "Uncharted 4",
        GA: 3,
        BackgroundPath: "DeToren.jpg",
        BackgroundImage: null
    },
    {
        Titel: "Vraag 10",
        Vraag: "What game is This?",
        Optie1: "Hollow Knight: Silksong",
        Optie2: "DeadCells",
        Optie3: "Ori and the Blind Forest",
        Optie4: "Hollow Knight ",
        GA: 1,
        BackgroundPath: "a_Void.jpg",
        BackgroundImage: null
    },
    {
        Vraag: "Punten Gehaald",
        BackgroundPath: "Backgrnd.jpg",
        BackgroundImage: null
    }
]

let huidigeVraagIndex = 0;

let textkleur = "black"



function preload() {
    for (let i = 0; i < vragen.length; i++) {
        let vraag = vragen[i];
        vraag.BackgroundImage = loadImage(vraag.BackgroundPath);
    }
}

function setup() {
    createCanvas(800, 600);

    //vraag 1 buttons
    button1 = createButton("button1")
    button1.position(50, 300)
    button1.style("font-size", "30px")
    button1.mousePressed(buttonAA)
    buttons.push(button1);

    button2 = createButton("Button2")
    button2.position(450, 300)
    button2.style("font-size", "30px")
    button2.mousePressed(buttonBB)
    buttons.push(button2);

    button3 = createButton("button3")
    button3.position(50, 450)
    button3.style("font-size", "30px")
    button3.mousePressed(buttonCC)
    buttons.push(button3);

    button4 = createButton("hallo4")
    button4.position(450, 450)
    button4.style("font-size", "30px")
    button4.mousePressed(buttonDD);
    buttons.push(button4);

    continuew = createButton("Next question =>>")
    continuew.position(670, 550)
    continuew.hide()
    continuew.mousePressed(forward)
}

function draw() {
    background(220);

    let huidigeVraag = vragen[huidigeVraagIndex];

    image(huidigeVraag.BackgroundImage, 0, 0, 800, 600);

    button1.html(huidigeVraag.Optie1)
    button2.html(huidigeVraag.Optie2)
    button3.html(huidigeVraag.Optie3)
    button4.html(huidigeVraag.Optie4)

    strokeWeight(3);
    stroke(0);
    fill("white")
    textSize(50)
    text(huidigeVraag.Titel, 300, 100)
    textSize(30)
    text(huidigeVraag.Vraag, 270, 200)
    text("Punten",170, 320)
    text(Counter, 470, 320) //              <====================================================================================== counter text

}

// Alle buttons rood maken behalve het goede antwoord.
function refreshAnswerButtonColors(correctIndex) {
    for (let i = 0; i < buttons.length; i++) {

        if (i == correctIndex) {
            buttons[i].style("background-color", "#0dd206");
        }
        else {
            buttons[i].style("background-color", "#c41d1d");
        }
        if (huidigeVraagIndex >= 9) {
            buttons[i].hide();
            continuew.position(180, 300);
            continuew.style('font-size', '60px');
        }

    }
}

function buttonAA() {
    if (!magKlikken){
        return;
    }

    let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;

        if (huidigeVraag.GA == 1) {
        Counter = Counter + 1
    }

    // Gebruiker klikt op knop 1, dus check hier of GA ook echt 1 was!
    // Zo ja, score omhoog!
}


function buttonBB() {
    if (!magKlikken){
        return;
    }

     let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;
    if (huidigeVraag.GA == 2) {
        Counter = Counter + 1
    }
}


function buttonCC() {
    if (!magKlikken){
        return;
    }

     let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;

        if (huidigeVraag.GA == 3) {
        Counter = Counter + 1
    }
}


function buttonDD() {
    if (!magKlikken){
        return;
    }

     let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;

        if (huidigeVraag.GA == 4) {
        Counter = Counter + 1
    }
}


function forward() {
    continuew.hide();
    huidigeVraagIndex = huidigeVraagIndex + 1;
    button1.style("background-color", "#ffffff");
    button2.style("background-color", "#ffffff");
    button3.style("background-color", "#ffffff");
    button4.style("background-color", "#ffffff");
    textkleur = "white";
    magKlikken = true;
}

//maak een counter, vraag 4 - 10, eindscherm dat laat zien hoeveel je van de 10 goed had