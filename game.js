// game.js
// Michi von Ah

let player0 = []; // Cards of the user
let player1 = []; // Cards of CPU Player 1
let player2 = []; // Cards of CPU Player 2
let player3 = []; // Cards of CPU Player 3
let trump; // The current trump
let currentTurn; // Which player is in turn
let givenCards = 0; // total given cards in this game
let speed = 1000; // Speed of the CPU Players in ms
let scores = [ // The scoreboard
    {
        "score": "0",
        "lastRound": "0"
    },
    {
        "score": "0",
        "lastRound": "0"
    }
];

function startGame(){
    window.scroll(0, window.innerHeight);
    document.getElementById('home').style.display = "none";
    document.getElementById('game').style.display = "block";
    shuffleCards();
    distributeCards(player0, 0);
    distributeCards(player1, 1);
    distributeCards(player2, 2);
    distributeCards(player3, 3);
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
            "PointsTrump": "11",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "9"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-koenig.gif",
            "Type": "K",
            "Color": "Eichel",
            "Points": "4",
            "PointsTrump": "4",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "8"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-ober.gif",
            "Type": "O",
            "Color": "Eichel",
            "Points": "3",
            "PointsTrump": "3",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "7"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-under.gif",
            "Type": "U",
            "Color": "Eichel",
            "Points": "2",
            "PointsTrump": "20",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "6"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-banner.gif",
            "Type": "B",
            "Color": "Eichel",
            "Points": "10",
            "PointsTrump": "10",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "5"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-neun.gif",
            "Type": "9",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "14",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-acht.gif",
            "Type": "8",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-sieben.gif",
            "Type": "7",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "2"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/eichel-sechs.gif",
            "Type": "6",
            "Color": "Eichel",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "1"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-ass.gif",
            "Type": "A",
            "Color": "Rose",
            "Points": "11",
            "PointsTrump": "11",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "9"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-koenig.gif",
            "Type": "K",
            "Color": "Rose",
            "Points": "4",
            "PointsTrump": "4",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "8"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-ober.gif",
            "Type": "O",
            "Color": "Rose",
            "Points": "3",
            "PointsTrump": "3",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "7"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-under.gif",
            "Type": "U",
            "Color": "Rose",
            "Points": "2",
            "PointsTrump": "20",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "6"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-banner.gif",
            "Type": "B",
            "Color": "Rose",
            "Points": "10",
            "PointsTrump": "10",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "5"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-neun.gif",
            "Type": "9",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "14",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-acht.gif",
            "Type": "8",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-sieben.gif",
            "Type": "7",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "2"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/rosen-sechs.gif",
            "Type": "6",
            "Color": "Rose",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "1"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-ass.gif",
            "Type": "A",
            "Color": "Schelle",
            "Points": "11",
            "PointsTrump": "11",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "9"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-koenig.gif",
            "Type": "K",
            "Color": "Schelle",
            "Points": "4",
            "PointsTrump": "4",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "8"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-ober.gif",
            "Type": "O",
            "Color": "Schelle",
            "Points": "3",
            "PointsTrump": "3",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "7"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-under.gif",
            "Type": "U",
            "Color": "Schelle",
            "Points": "2",
            "PointsTrump": "20",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "6"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-banner.gif",
            "Type": "B",
            "Color": "Schelle",
            "Points": "10",
            "PointsTrump": "10",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "5"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-neun.gif",
            "Type": "9",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "14",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-acht.gif",
            "Type": "8",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-sieben.gif",
            "Type": "7",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "2"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schellen-sechs.gif",
            "Type": "6",
            "Color": "Schelle",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "1"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-ass.gif",
            "Type": "A",
            "Color": "Schilte",
            "Points": "11",
            "PointsTrump": "11",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "9"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-koenig.gif",
            "Type": "K",
            "Color": "Schilte",
            "Points": "4",
            "PointsTrump": "4",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "8"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-ober.gif",
            "Type": "O",
            "Color": "Schilte",
            "Points": "3",
            "PointsTrump": "3",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "7"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-under.gif",
            "Type": "U",
            "Color": "Schilte",
            "Points": "2",
            "PointsTrump": "20",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "6"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-banner.gif",
            "Type": "B",
            "Color": "Schilte",
            "Points": "10",
            "PointsTrump": "10",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "5"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-neun.gif",
            "Type": "9",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "14",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "4"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-acht.gif",
            "Type": "8",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "3"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-sieben.gif",
            "Type": "7",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "2"
        },
        {
            "imageUrl": "https://jass.von-ah.me/assets/cards/jassverzeichnis/schilten-sechs.gif",
            "Type": "6",
            "Color": "Schilte",
            "Points": "0",
            "PointsTrump": "0",
            "PointsObenabe": "0",
            "PointsUndeufe": "0",
            "SortingNr": "1"
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
    // sort cards
    cards.sort((a, b) => {
        const typeA = a.SortingNr.toUpperCase();
        const typeB = b.SortingNr.toUpperCase();
        if (typeA < typeB) {
          return -1;
        }
        if (typeA > typeB) {
          return 1;
        }
        return 0;
    });
    cards.sort((a, b) => {
        const colorA = a.Color.toUpperCase();
        const colorB = b.Color.toUpperCase();
        if (colorA < colorB) {
          return -1;
        }
        if (colorA > colorB) {
          return 1;
        }
        return 0;
    });
    // distribute
    var userShelf = document.getElementsByClassName('cardContainer')[playerNumber];
    for(var i = 0; i < cards.length; i++){
    var newCard = document.createElement('img');
    newCard.src = cards[i].imageUrl;
    newCard.classList = "card";
    newCard.classList.add("player" + playerNumber);
    newCard.dataset.points = cards[i].Points;
    newCard.dataset.pointsTrump = cards[i].PointsTrump;
    newCard.dataset.type = cards[i].Type;
    newCard.dataset.color = cards[i].Color;
    newCard.dataset.playedFrom = playerNumber;
    newCard.dataset.sortingNr = cards[i].SortingNr;
    newCard.addEventListener('click', () => {
        giveCard(event.target, 0);
    });
    userShelf.appendChild(newCard);
    }
}

function generateTrump(cpuMode){
    if(!cpuMode){
        var trumpChooser = document.getElementById('trumpChooser');
        trumpChooser.style.display = "block";
    }
    else{
        var random = Math.floor(Math.random() * 3) + 1;
        shiftTrump(random);
    }
}

function setTrump(trumpNumber){
    var trumpChooser = document.getElementById('trumpChooser');
    trumpChooser.style.display = "none";
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
    trump = trumps[trumpNumber].trumpColor;
    var trumpIcon = document.getElementById("currentTrump");
    if(trump == "Eichel") trumpIcon.src = "assets/cards/eichel.svg";
    else if(trump == "Rose") trumpIcon.src = "assets/cards/rose.svg";
    else if(trump == "Schelle") trumpIcon.src = "assets/cards/schelle.svg";
    else trumpIcon.src = "assets/cards/schilte.svg";
}

function shiftTrump(playerNum){
    switch(playerNum){
        case 0:
            var deck = player0;
        case 1:
            var deck = player1;
        case 2:
            var deck = player2;
        case 3:
        default:
            var deck = player3;
    }
    var bestChoice = Math.floor(Math.random() * 4);
    var trumpCount = [
        {
            "name": "Eichel",
            "count": "0"
        },
        {
            "name": "Rose",
            "count": "0"
        },
        {
            "name": "Schelle",
            "count": "0"
        },
        {
            "name": "Schilte",
            "count": "0"
        }
    ];
    for(var i = 0; i < deck.length; i++){
        switch(deck[i].Color){
            case "Eichel":
                trumpCount[0].count = parseInt(trumpCount[0].count) + 1;
            case "Rose":
                trumpCount[1].count = parseInt(trumpCount[1].count) + 1;
            case "Schelle":
                trumpCount[2].count = parseInt(trumpCount[2].count) + 1;
            case "Schilte":
                trumpCount[3].count = parseInt(trumpCount[3].count) + 1;
            default:
                console.log("An error happend while shifting the trump. Please report this error with the included form. (Second button top left)");
        }
    }
    for(var chooseLoop = 0; chooseLoop < 3; chooseLoop++){
        if(parseInt(trumpCount[chooseLoop].count) > parseInt(trumpCount[bestChoice].count)){
            bestChoice = chooseLoop;
        }
    }
    setTrump(bestChoice);
}

function giveCard(card, playerNumber){
    if(playerNumber == currentTurn && !card.classList.contains('given')){ // You can only give a card if its your turn
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
    else if(card.classList.contains('given')){
        showHint("Du musst eine deiner Karten geben.", "ai-triangle-alert-fill");
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
        if(givenCards == 0){
            if(currentTurn > 0 && currentTurn < 4) generateTrump(true);
            else generateTrump(false);
        }
        if(currentTurn > 0 && currentTurn < 4) cpuPlayer(currentTurn);
    }
}

function cpuPlayer(playerNumber){
    setTimeout(function(){
        var deck = document.getElementsByClassName('player' + playerNumber);
        var firstGivenCard = document.getElementsByClassName('given')[0];
        if(firstGivenCard == null){
            firstGivenCard = deck[0];
        }
        if(firstGivenCard.dataset.color){
            var currentColor = firstGivenCard.dataset.color;
        }
        else{
            var currentColor = trump;
        }
        var cardToGive = deck[0];
        // HIER DEN ALGORITHMUS DER GEGNER PROGRAMMIEREN
        for(var i = 0; i < deck.length; i++){
            var cardScore = 0; // Min: 0, Max: 100
            if(deck[i].dataset.color == currentColor) cardScore += 50;
            if(deck[i].dataset.color == trump) cardScore += 40;
            if(parseInt(deck[i].dataset.sortingNr) < 4) cardScore += 1;
            else if(parseInt(deck[i].dataset.sortingNr) == 4) cardScore += 8;
            else if(parseInt(deck[i].dataset.sortingNr) == 5) cardScore += 9;
            else if(parseInt(deck[i].dataset.sortingNr) >= 6 && parseInt(deck[i].dataset.sortingNr) < 8) cardScore += 10;
            else if(parseInt(deck[i].dataset.sortingNr) == 9) cardScore += 9;
            deck[i].dataset.cardScoring = cardScore;
            console.log(cardScore);
        }
        for(var i = 0; i < deck.length; i++){
            if(parseInt(deck[i].dataset.cardScoring) >= parseInt(cardToGive.dataset.cardScoring)){
                cardToGive = deck[i];
            }
        }
        giveCard(cardToGive, playerNumber);
    }, speed);
}

function countPoints(){
    var jassteppich = document.getElementById('teppichContainer');
    var cards = document.getElementsByClassName('given');
    var sum = 0;
    var yourPoints = document.getElementById('yourPoints');
    var opponentPoints = document.getElementById('opponentPoints');
    // calculate the points
    var highestValue = 0;
    var highestCard = cards[0];
    var firstCard = cards[0];
    var winnerTeam = 0;
    for(var card = 0; card < cards.length; card++){
        var playedCard = cards[card];
        var higher = false;
        if(trump == playedCard.dataset.color){
            var pointsForWinner = parseInt(playedCard.dataset.pointsTrump);
            var cardPoints = 20;
            if(parseInt(playedCard.dataset.type) == 9 || playedCard.dataset.type == "9"){
                cardPoints += 10;
            }
            else if(playedCard.dataset.type == "U"){
                cardPoints += 11;
            }
            else{
                cardPoints += parseInt(playedCard.dataset.sortingNr);
            }
        }
        else{
            var pointsForWinner = parseInt(playedCard.dataset.points);
            var cardPoints = parseInt(playedCard.dataset.sortingNr);
        }
        if(cardPoints > highestValue){
            if(playedCard.dataset.color == trump){
                // Die gegegebene Karte auch ein Trumpf mit einem h??heren Wert.
                higher = true;
            }
            else if(highestCard.dataset.color != trump && playedCard.dataset.color == firstCard.dataset.color){
                // Die Karte welche bisher die gr??sste war ist kein Trumpf. Die Karte hat die gleiche Farbe wie die erste gegebene und hat einen h??heren Wert als diese.
                higher = true;
            }
            else if(highestCard.dataset.color == trump && playedCard.dataset.color != trump){
                // Die Karte welche bisher die gr??sste war ist ein Trumpf. Die gegebenen ist kein Trumpf.
                higher = false;
            }
            else{
                // Jeder sonstige Fall wenn die gegeben Karte gr??sser ist als die bisherigen
                higher = false;
            } 

            if(higher == true){
                highestValue = cardPoints;
                winnerTeam = parseInt(playedCard.dataset.playedFrom);
                highestCard = playedCard;
            }
            else{
                winnerTeam = parseInt(highestCard.dataset.playedFrom);
            }
        }
        sum += pointsForWinner;
    }
    highestCard.classList.add('best');
    switch(winnerTeam){
        case 0:
        case 2:
            scores[0].score = parseInt(scores[0].score) + sum;
            if(givenCards > 35) scores[0].score = parseInt(scores[0].score) + 5;
            if(givenCards > 35 && parseInt(scores[1].score) == 0) scores[0].score = parseInt(scores[0].score) + 100;
            yourPoints.textContent = "" + scores[0].score;
            break;
        case 1:
        case 3:
            scores[1].score = parseInt(scores[1].score) + sum;
            if(givenCards > 35) scores[1].score = parseInt(scores[1].score) + 5;
            if(givenCards > 35 && parseInt(scores[0].score) == 0) scores[1].score = parseInt(scores[1].score) + 100;
            opponentPoints.textContent = "" + scores[1].score;
            break;
        default:
            winnerTeam = 0;
            console.log('Error, no team won. Next turn: Player ' + winnerTeam);
            alert("Fehler aufgetren! Das Spiel geht weiter, jedoch bist du nun an der Reihe.");
            break;
    }
    
    setTimeout(function(){
        jassteppich.innerHTML = "";
        currentTurn = winnerTeam + 1;
        if(currentTurn > 3) currentTurn = 0;
        nextPlayer();
    }, speed);

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

function newGame(withoutStart){
    var yourPoints = document.getElementById('yourPoints');
    var opponentPoints = document.getElementById('opponentPoints');
    var yourPointsOld = document.getElementById('yourPointsOld');
    var opponentPointsOld = document.getElementById('opponentPointsOld');
    scores[0].lastRound = parseInt(scores[0].lastRound) + parseInt(scores[0].score);
    scores[1].lastRound = parseInt(scores[1].lastRound) + parseInt(scores[1].score);
    scores[0].score = 0;
    scores[1].score = 0;
    yourPoints.textContent = scores[0].score;
    opponentPoints.textContent = scores[1].score;
    yourPointsOld.textContent = scores[0].lastRound;
    opponentPointsOld.textContent = scores[1].lastRound;
    var endscreen = document.getElementById('gameSummary');
    endscreen.style.display = "none";
    player0 = [];
    player1 = [];
    player2 = [];
    player3 = [];
    givenCards = 0;
    if(!withoutStart) startGame();
}

function resetGame(confirmMessage, close){
    if(confirmMessage != null){
        var confirmed = confirm(confirmMessage);
    }
    else{
        var confirmed = confirm("Die aktuelle Runde wird beendet und es startet eine neue Runde. Bist du einverstanden?");
    }
    if(confirmed){
        var decks = document.getElementsByClassName('cardContainer');
        for(var i = 0; i < decks.length; i++){
            decks[i].innerHTML = "";
        }
        var jassteppich = document.getElementById('teppichContainer');
        jassteppich.innerHTML = "";
        if(!close) newGame();
    }
}

function closeGame(){
    resetGame("Die aktuelle Runde wird abgebrochen und du kehrst zum Startbildschirm zur??ck. Bist du sicher?", true);
    document.getElementById('home').style.display = "grid";
    document.getElementById('game').style.display = "none";
    window.scroll(0, 0);
    document.getElementById('teppichContainer').innerHTML = "";
    scores[0].score = "0";
    scores[1].score = "0";
}

function toggleMusic(){
    var player = document.getElementById('backgroundMusic');
    player.play();
    player.volume = 0.3;
    if(player.muted == true){
        player.muted = false;
    }
    else{
        player.muted = true;
    }
}

function saveSettings(){
    speed = document.getElementById("playerSpeed").value;
    localStorage.setItem("speed", speed);
    localStorage.setItem("playerNames", document.getElementById("playerNames").value);
    showPlayerNames();
    localStorage.setItem("enableDetailedTracking", document.getElementById('trackingOptIn').checked);
}

function loadSettings(){
    if(localStorage.getItem("speed")){
        speed = parseInt(localStorage.getItem("speed"));
        document.getElementById("playerSpeed").value = speed;
    }
    if(localStorage.getItem("playerNames")){
        document.getElementById("playerNames").value = localStorage.getItem("playerNames");
        showPlayerNames();
    }
    else{
        localStorage.setItem("playerNames", "Sepp, Kari, Heidi");
    }
    if(localStorage.getItem("enableDetailedTracking") == true || localStorage.getItem("enableDetailedTracking") == "true"){
        document.getElementById('trackingOptIn').checked = true;
    }
}

function showPlayerNames(){
    var playerNames = localStorage.getItem("playerNames");
    var playerNamesSplit = playerNames.split(",");
    var cpuPlayerDivs = document.getElementsByClassName('cpuPlayer');
    for(var i = 0; i < cpuPlayerDivs.length; i++){
        var currentName = playerNamesSplit[i];
        if(i == 1) currentName += " (mit dir)";
        cpuPlayerDivs[i].childNodes[1].textContent = currentName;
    }
}