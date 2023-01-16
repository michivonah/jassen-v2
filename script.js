// script.js
// Michi von Ah

let player0 = []; // Cards of the user
let player1 = []; // Cards of CPU Player 1
let player2 = []; // Cards of CPU Player 2
let player3 = []; // Cards of CPU Player 3
let trump; // The current trump
let currentTurn; // Which player is in turn
let scores = [ // The scoreboard
    {
        "score": "0"
    },
    {
        "score": "0"
    },
    {
        "score": "0"
    },
    {
        "score": "0"
    }
];

function startGame(){
    //window.scroll(0, window.innerHeight);
    shuffleCards();
    distributeCards(player0, 0);
    distributeCards(player1, 1);
    distributeCards(player2, 2);
    distributeCards(player3, 3);
    generateTrump();
    nextPlayer();
    /*
    giveCard(document.getElementsByClassName('cardContainer')[1].childNodes[Math.floor(Math.random() * (document.getElementsByClassName('cardContainer')[1].childNodes.length))], 1);
    console.log(document.getElementsByClassName('cardContainer')[1].childNodes.length);*/
    /*while(document.getElementsByClassName('cardContainer')[1].childNodes.length > 1){
        giveCard(document.getElementsByClassName('cardContainer')[1].childNodes[Math.floor(Math.random() * (document.getElementsByClassName('cardContainer')[1].childNodes.length))], 1);
        console.log(document.getElementsByClassName('cardContainer')[1].childNodes.length);
    }*/
    //console.log("Game finished");
}

function shuffleCards(){
    const allCards = [
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-ass.gif",
            "Type": "A",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-koenig.gif",
            "Type": "K",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-ober.gif",
            "Type": "O",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-under.gif",
            "Type": "U",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-banner.gif",
            "Type": "B",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-neun.gif",
            "Type": "9",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-acht.gif",
            "Type": "8",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-sieben.gif",
            "Type": "7",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/eichel-sechs.gif",
            "Type": "6",
            "Color": "Eichel"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-ass.gif",
            "Type": "A",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-koenig.gif",
            "Type": "K",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-ober.gif",
            "Type": "O",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-under.gif",
            "Type": "U",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-banner.gif",
            "Type": "B",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-neun.gif",
            "Type": "9",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-acht.gif",
            "Type": "8",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-sieben.gif",
            "Type": "7",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/rosen-sechs.gif",
            "Type": "6",
            "Color": "Rose"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-ass.gif",
            "Type": "A",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-koenig.gif",
            "Type": "K",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-ober.gif",
            "Type": "O",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-under.gif",
            "Type": "U",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-banner.gif",
            "Type": "B",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-neun.gif",
            "Type": "9",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-acht.gif",
            "Type": "8",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-sieben.gif",
            "Type": "7",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schellen-sechs.gif",
            "Type": "6",
            "Color": "Schelle"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-ass.gif",
            "Type": "A",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-koenig.gif",
            "Type": "K",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-ober.gif",
            "Type": "O",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-under.gif",
            "Type": "U",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-banner.gif",
            "Type": "B",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-neun.gif",
            "Type": "9",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-acht.gif",
            "Type": "8",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-sieben.gif",
            "Type": "7",
            "Color": "Schilte"
        },
        {
            "imageUrl": "https://jassverzeichnis.ch/wp-content/uploads/2022/05/schilten-sechs.gif",
            "Type": "6",
            "Color": "Schilte"
        },
    ];
    
    let usedCards = [];
    // shuffle cards
    while(player0.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player0.push(allCards[random]);
        }
    }
    while(player1.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player1.push(allCards[random]);
        }
    }
    while(player2.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player2.push(allCards[random]);
        }
    }
    while(player3.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player3.push(allCards[random]);
        }
    }
}

function distributeCards(cards, playerNumber){
    var userShelf = document.getElementsByClassName('cardContainer')[playerNumber];
    for(var i = 0; i < cards.length; i++){
        var newCard = document.createElement('img');
    newCard.src = cards[i].imageUrl;
    newCard.classList = "card";
    newCard.addEventListener('click', () => {
        giveCard(event.target, 0);
    });
    userShelf.appendChild(newCard);
    }
}

function generateTrump(){
    trump = Math.floor(Math.random() * 3);
    var trumpIcon = document.getElementById("currentTrump");
    if(trump == 0) trumpIcon.src = "assets/cards/eichel.svg";
    else if(trump == 0) trumpIcon.src = "assets/cards/rose.svg";
    else if(trump == 0) trumpIcon.src = "assets/cards/schelle.svg";
    else trumpIcon.src = "assets/cards/schilte.svg";
}

function giveCard(card, playerNumber){
    if(playerNumber == currentTurn){ // You can only give a card if its your turn
        var jassteppich = document.getElementById('teppichContainer');
        card.classList.add("given");
        if(playerNumber == 0) card.classList.add("playerBottom");
        else if(playerNumber == 1) card.classList.add("playerLeft");
        else if(playerNumber == 2) card.classList.add("playerTop");
        else card.classList.add("playerRight");
        jassteppich.append(card);
        nextPlayer();
    }
}

function nextPlayer(){
    if(currentTurn == null) currentTurn = Math.floor(Math.random() * 3);
    currentTurn--;
    if(currentTurn < 0) currentTurn = 3;
}

function cpuPlayer(playerNumber){
    switch(playerNumber){
        case 1:
            var card = document.getElementsByClassName('cardContainer')[1].childNodes[Math.floor(Math.random() * (player1.length + 1))]
            giveCard(card, 1);
            break;
        case 2:
            var card = document.getElementsByClassName('cardContainer')[2].childNodes[Math.floor(Math.random() * (player2.length + 1))]
            giveCard(card, 2);
            break;
        case 3:
        default:
            var card = document.getElementsByClassName('cardContainer')[3].childNodes[Math.floor(Math.random() * (player3.length + 1))]
            giveCard(card, 3);
            break;
    }
}