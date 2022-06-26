function resetGame(){
    game.round = 0
    game.player.score = 0
    game.player2.score = 0
    rollDiceEnabled = true
    yourDice1.src = "images/dice-6.svg"
    yourDice2.src = "images/dice-6.svg"
    player2Dice1.src = "images/dice-6.svg"
    player2Dice2.src = "images/dice-6.svg"
    yourScore.innerHTML = `0`
    player2Score.innerHTML = `0`
    yourTotalScore.innerHTML = `0`
    player2TotalScore.innerHTML = `0`
}

function closePopUp() {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
    popup.style.setProperty('z-index', '-1');
}

function endGame() {
    endGamePopup.classList.remove("hidden");
    endGamePopup.classList.add("visible");
    endGamePopup.style.setProperty('z-index', '1')

    let msg;
    if (player.score > player2.score) {
        msg = `${player.name} is the winner with a score of ${player.score}`
    }
    else if (player.score === player2.score) {
        msg = `${player.name} and ${player2.name} have tied with a score of ${player.score}`

    }
    else {
        msg = `${player2.name} is the winner with a score of ${player2.score}`
    }
    winnerMsg.innerHTML = msg
}

function showPopUp(popUp) {
    popUp.classList.remove("hidden");
    popUp.classList.add("visible");
    popUp.style.setProperty('z-index', '1')
}

function dismissPopUp(popUp) {
    popUp.classList.remove("visible");
    popUp.classList.add("hidden");
    popUp.style.setProperty('z-index', '-1')
}

function rollDice() {
    roll1 = Math.floor(Math.random() * 6)+1;
    roll2 =  Math.floor(Math.random() * 6)+1;
    roll3 = Math.floor(Math.random() * 6)+1;
    roll4 =  Math.floor(Math.random() * 6)+1;
    animate()
}

function updateUI () {
    yourDice1.src = `images/dice-${roll1}.svg`
    yourDice2.src = `images/dice-${roll2}.svg`
    player2Dice1.src = `images/dice-${roll3}.svg`
    player2Dice2.src = `images/dice-${roll4}.svg`
    let yourRound = roll1 + roll2
    let player2Round = roll3 + roll4

    if (roll1 === roll2) {
        yourRound *=2
    }

    if (roll1 === 1 || roll2 === 1 ) {
        yourRound = 0
    }

    if (roll3 === roll4) {
        player2Round *=2
    }

    if (roll3 === 1 || roll4 === 1 ) {
        player2Round = 0
    }

    game.player.score += yourRound
    game.player2.score += player2Round
    yourScore.innerHTML = `${yourRound}`
    player2Score.innerHTML = `${player2Round}`
    yourTotalScore.innerHTML = `${game.player.score}`
    player2TotalScore.innerHTML = `${game.player2.score}`

    game.round++
    if (game.round === 3) {
        endGame()
    }
}

function showWarning(){
    warningMsg.style.setProperty("display", "block")
    setTimeout(function(){
        warningMsg.style.setProperty("display", "none")
    }, timeDelay);
}