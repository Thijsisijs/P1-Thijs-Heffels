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



let img
let rokW = 300
let rokH = 100
let color = "gray"

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
        BackgroundPath: "https://static.wikia.nocookie.net/eldenring/images/a/ae/ER_Object_Erdtree.png/revision/latest/scale-to-width-down/1200?cb=20250131044337",
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
        Optie1: "DeltaRune",
        Optie2: "Persona 5 Royal",
        Optie3: "Undertale",
        Optie4: "StardewValley",
        GA: 3,
        BackgroundPath: "https://static.wikia.nocookie.net/undertale/images/9/9f/Papyrus_and_Sans%27s_House_location.png/revision/latest/scale-to-width-down/640?cb=20151226170410",
        BackgroundImage: null
    }
]

let huidigeVraagIndex = 0;

let textkleur = "black"
//Dark Souls III",
//The Witcher 3:",
//Wild Hunt",
//Elderscrolls V: Skyrim",
//Elden Ring"


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
}

// Alle buttons rood maken behalve het goede antwoord.
function refreshAnswerButtonColors(correctIndex) {
    for (let i = 0; i < buttons.length; i++) {

        if (i == correctIndex) {
            buttons[i].style("background-color", "#0dd206")
        }
        else {
            buttons[i].style("background-color", "#c41d1d");
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
}


function buttonCC() {
    if (!magKlikken){
        return;
    }

     let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;
}


function buttonDD() {
    if (!magKlikken){
        return;
    }

     let huidigeVraag = vragen[huidigeVraagIndex];
    refreshAnswerButtonColors(huidigeVraag.GA - 1);
    continuew.show()
    magKlikken = false;
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

//buttonAA/BB/CC/DD gemaakt?