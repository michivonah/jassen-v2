// game.js
// Michi von Ah

let player0 = []; // Cards of the user
let player1 = []; // Cards of CPU Player 1
let player2 = []; // Cards of CPU Player 2
let player3 = []; // Cards of CPU Player 3
let trump; // The current trump
let currentTurn; // Which player is in turn
let givenCards = 0; // total given cards in this game
let scores = [ // The scoreboard
    {
        "score": "0"
    },
    {
        "score": "0"
    }
];

function startGame(){
    window.scroll(0, window.innerHeight);
    document.getElementById('home').style.display = "none";
    shuffleCards();
    distributeCards(player0, 0);
    distributeCards(player1, 1);
    distributeCards(player2, 2);
    distributeCards(player3, 3);
    generateTrump();
    nextPlayer();
    showHint("Spiel beginnt!", "ai-face-very-happy");
}

function shuffleCards(){
    const allCards = [
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-ass.gif",
            "Type": "A",
            "Color": "Eichel",
            "Points": "11",
            "PointsTrump": "11"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-koenig.gif",
            "Type": "K",
            "Color": "Eichel",
            "Points": "4",
            "PointsTrump": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-ober.gif",
            "Type": "O",
            "Color": "Eichel",
            "Points": "3",
            "PointsTrump": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-under.gif",
            "Type": "U",
            "Color": "Eichel",
            "Points": "2",
            "PointsTrump": "20"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-banner.gif",
            "Type": "B",
            "Color": "Eichel",
            "Points": "10",
            "PointsTrump": "10"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-neun.gif",
            "Type": "9",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "14"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-acht.gif",
            "Type": "8",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-sieben.gif",
            "Type": "7",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-sechs.gif",
            "Type": "6",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-ass.gif",
            "Type": "A",
            "Color": "Rose",
            "Points": "11",
            "PointsTrump": "11"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-koenig.gif",
            "Type": "K",
            "Color": "Rose",
            "Points": "4",
            "PointsTrump": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-ober.gif",
            "Type": "O",
            "Color": "Rose",
            "Points": "3",
            "PointsTrump": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-under.gif",
            "Type": "U",
            "Color": "Rose",
            "Points": "2",
            "PointsTrump": "20"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-banner.gif",
            "Type": "B",
            "Color": "Rose",
            "Points": "10",
            "PointsTrump": "10"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-neun.gif",
            "Type": "9",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "14"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-acht.gif",
            "Type": "8",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-sieben.gif",
            "Type": "7",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-sechs.gif",
            "Type": "6",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-ass.gif",
            "Type": "A",
            "Color": "Schelle",
            "Points": "11",
            "PointsTrump": "11"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-koenig.gif",
            "Type": "K",
            "Color": "Schelle",
            "Points": "4",
            "PointsTrump": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-ober.gif",
            "Type": "O",
            "Color": "Schelle",
            "Points": "3",
            "PointsTrump": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-under.gif",
            "Type": "U",
            "Color": "Schelle",
            "Points": "2",
            "PointsTrump": "20"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-banner.gif",
            "Type": "B",
            "Color": "Schelle",
            "Points": "10",
            "PointsTrump": "10"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-neun.gif",
            "Type": "9",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "14"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-acht.gif",
            "Type": "8",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-sieben.gif",
            "Type": "7",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-sechs.gif",
            "Type": "6",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-ass.gif",
            "Type": "A",
            "Color": "Schilte",
            "Points": "11",
            "PointsTrump": "11"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-koenig.gif",
            "Type": "K",
            "Color": "Schilte",
            "Points": "4",
            "PointsTrump": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-ober.gif",
            "Type": "O",
            "Color": "Schilte",
            "Points": "3",
            "PointsTrump": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-under.gif",
            "Type": "U",
            "Color": "Schilte",
            "Points": "2",
            "PointsTrump": "20"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-banner.gif",
            "Type": "B",
            "Color": "Schilte",
            "Points": "10",
            "PointsTrump": "10"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-neun.gif",
            "Type": "9",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "14"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-acht.gif",
            "Type": "8",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-sieben.gif",
            "Type": "7",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-sechs.gif",
            "Type": "6",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0"
        },
    ];
    
    let usedCards = [];
    // shuffle cards
    while(player0.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player0.push(allCards[random]);
            usedCards.push(random);
        }
    }
    while(player1.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player1.push(allCards[random]);
            usedCards.push(random);
        }
    }
    while(player2.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player2.push(allCards[random]);
            usedCards.push(random);
        }
    }
    while(player3.length < 9){
        var random = Math.floor(Math.random() * 36);
        if(!usedCards.includes(random)){
            player3.push(allCards[random]);
            usedCards.push(random);
        }
    }
}

function distributeCards(cards, playerNumber){
    var userShelf = document.getElementsByClassName('cardContainer')[playerNumber];
    for(var i = 0; i < cards.length; i++){
        var newCard = document.createElement('img');
    newCard.src = cards[i].imageUrl;
    newCard.classList = "card";
    newCard.dataset.points = cards[i].Points;
    newCard.dataset.pointsTrump = cards[i].PointsTrump;
    newCard.dataset.type = cards[i].Type;
    newCard.dataset.color = cards[i].Color;
    newCard.dataset.playedFrom = playerNumber;
    newCard.addEventListener('click', () => {
        giveCard(event.target, 0);
    });
    userShelf.appendChild(newCard);
    }
}

function generateTrump(){
    var random = Math.floor(Math.random() * 4);
    var trumps = [
        {
            "trumpColor": "Eichel"
        },
        {
            "trumpColor": "Rose"
        },
        {
            "trumpColor": "Schelle"
        },
        {
            "trumpColor": "Schilte"
        }
    ];
    trump = trumps[random].trumpColor;
    var trumpIcon = document.getElementById("currentTrump");
    if(trump == "Eichel") trumpIcon.src = "assets/cards/eichel.svg";
    else if(trump == "Rose") trumpIcon.src = "assets/cards/rose.svg";
    else if(trump == "Schelle") trumpIcon.src = "assets/cards/schelle.svg";
    else trumpIcon.src = "assets/cards/schilte.svg";
}

function giveCard(card, playerNumber){
    if(playerNumber == currentTurn){ // You can only give a card if its your turn
        givenCards++;
        var jassteppich = document.getElementById('teppichContainer');
        card.classList.add("given");
        if(playerNumber == 0) card.classList.add("playerBottom");
        else if(playerNumber == 1) card.classList.add("playerLeft");
        else if(playerNumber == 2) card.classList.add("playerTop");
        else card.classList.add("playerRight");
        jassteppich.append(card);
        nextPlayer();
    }
    else if(playerNumber == 0){
        showHint("Du bist nicht an der Reihe!", "ai-triangle-alert-fill");
    }
}

function nextPlayer(){
    var cardCount = document.getElementsByClassName('given').length;
    if(cardCount > 3){
        countPoints();
    }
    else{
        if(currentTurn == null) currentTurn = Math.floor(Math.random() * 3);
        currentTurn--;
        if(currentTurn < 0) currentTurn = 3;
        if(currentTurn > 0 && currentTurn < 4) cpuPlayer(currentTurn);
    }
}

function cpuPlayer(playerNumber){
    setTimeout(function(){
        var deck = document.getElementsByClassName('cardContainer')[playerNumber].childNodes;
        var countTrumpCards = 0;
        var currentColor = 0;
        var cardToGive;
        for(var count = 0; count < deck.lenght; count++){
            if(deck[count].dataset.color == document.getElementsByClassName('given')[0]){
                // counts all cards which have the same color like the first given card
                currentColor++;
                cardToGive = deck[count];
            }
            else if(deck[count].dataset.color == trump){
                // counts all cards which are trump
                countTrumpCards++;
                cardToGive = deck[count];
            }
        }
        if(cardToGive){
            giveCard(cardToGive, playerNumber);
        }
        else{
            giveCard(deck[Math.floor(Math.random() * (deck.length))], playerNumber);
        }
    }, 1000);
}

function countPoints(){
    var jassteppich = document.getElementById('teppichContainer');
    var cards = jassteppich.childNodes;
    var sum = 0;
    var yourPoints = document.getElementById('yourPoints');
    var opponentPoints = document.getElementById('opponentPoints');
    // calculate the points
    var highestValue = 0;
    var highestCard = cards[0];
    var winnerTeam;
    for(var card = 1; card < cards.length; card++){
        var playedCard = cards[card];
        if(trump == playedCard.dataset.color){
            var cardPoints = parseInt(playedCard.dataset.pointsTrump);
        }
        else{
            var cardPoints = parseInt(playedCard.dataset.points);
        }
        if(cardPoints > highestValue){
            highestValue = cardPoints;
            winnerTeam = parseInt(playedCard.dataset.playedFrom);
            highestCard = playedCard;
        }
        sum += cardPoints;
    }
    if(highestCard != null) highestCard.classList.add('best');
    switch(winnerTeam){
        case 0:
        case 2:
            scores[0].score = parseInt(scores[0].score) + sum;
            yourPoints.textContent = "Du: " + scores[0].score;
            break;
        case 1:
        case 3:
            scores[1].score = parseInt(scores[1].score) + sum;
            opponentPoints.textContent = "Gegner:  " + scores[1].score;
            break;
        default:
            winnerTeam = Math.floor(Math.random() * 3);
            console.log('Error, no team won. Next turn: Player ' + winnerTeam)
            break;
    }
    
    setTimeout(function(){
        jassteppich.innerHTML = "";
        currentTurn = winnerTeam + 1;
        if(currentTurn > 3) currentTurn = 0;
        nextPlayer();
    }, 1000);

    if(givenCards > 35) endGame();
}

function showHint(content, icon){
    var hint = document.getElementById('hint');
    var hintTxt = document.getElementById('hintTxt');
    var hintIcon = document.getElementById('hintIcon');
    hint.style.display = "flex";
    hint.style.opacity = "100%";
    hintTxt.textContent = content;
    hintIcon.classList = icon;
    setTimeout(function(){
        hint.style.opacity = "0%";
        hint.style.display = "none";
    }, 1500);
}

function endGame(){
    var endscreen = document.getElementById('gameSummary');
    var endIcon = document.getElementById('summaryIcon');
    var endTxt = document.getElementById('summaryTxt');
    if(parseInt(scores[0].score) > parseInt(scores[1].score)){
        endIcon.classList = "ai-victory-hand";
        endTxt.textContent = "Du hast gewonnen!";
    }
    else{
        endIcon.classList = "ai-face-sad";
        endTxt.textContent = "Du hast verloren!";
    }
    endscreen.style.display = "flex";
}

function newGame(){
    var endscreen = document.getElementById('gameSummary');
    endscreen.style.display = "none";
    player0 = [];
    player1 = [];
    player2 = [];
    player3 = [];
    givenCards = 0;
    startGame();
}