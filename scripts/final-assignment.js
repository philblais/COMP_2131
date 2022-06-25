// constants
const gameStartView = document.getElementById('game-start');
const gameGridView = document.getElementById('game-grid');
const popup = document.getElementById('pop-up');
const endGamePopup = document.getElementById('end-game-pop-up');
const btnStartAnimation = document.getElementById('btn-start-animation');
const btnNewGame = document.getElementById('btn-new-game');
const btnRollDice = document.getElementById('btn-roll-dice');
const btnEndGame = document.getElementById('btn-end-game');
const btnGameRules = document.getElementById('game-rules');
const btnClose = document.getElementById('close-pop-up');
const btnNewGamePopUp = document.getElementById('new-game-pop-up-btn');
const btnDismissEndGamePopUp = document.getElementById('dismiss-end-game-pop-up');
const yourDice1 = document.getElementById('your-dice-1');
const yourDice2 = document.getElementById('your-dice-2');
const compDice1 = document.getElementById('comp-dice-1');
const compDice2 = document.getElementById('comp-dice-2');
const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');
const yourTotalScore = document.getElementById('your-total-score');
const compTotalScore = document.getElementById('comp-total-score');

let yourCurrentScore = 0
let compCurrentScore = 0
let round = 0
let rollDiceEnabled = true

// listeners
btnStartAnimation.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "none")
    gameGridView.style.setProperty("display", "grid")
});

btnEndGame.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "grid")
    gameGridView.style.setProperty("display", "none")
    resetGame()
});

btnNewGame.addEventListener('click', function () {
    resetGame()
});

btnRollDice.addEventListener('click', function () {
    if (rollDiceEnabled) {
        let roll1 = Math.floor(Math.random() * 6)+1;
        let roll2 =  Math.floor(Math.random() * 6)+1;
        let roll3 = Math.floor(Math.random() * 6)+1;
        let roll4 =  Math.floor(Math.random() * 6)+1;

        yourDice1.src = `images/dice-${roll1}.svg`
        yourDice2.src = `images/dice-${roll2}.svg`
        compDice1.src = `images/dice-${roll3}.svg`
        compDice2.src = `images/dice-${roll4}.svg`

        let yourRound = roll1 + roll2
        let compRound = roll3 + roll4

        if (roll1 === roll2) {
            yourRound *=2
        }

        if (roll1 === 1 || roll2 === 1 ) {
            yourRound = 0
        }

        if (roll3 === roll4) {
            compRound *=2
        }

        if (roll3 === 1 || roll4 === 1 ) {
            compRound = 0
        }

        yourCurrentScore += yourRound
        compCurrentScore += compRound
        yourScore.innerHTML = `${yourRound}`
        computerScore.innerHTML = `${compRound}`
        yourTotalScore.innerHTML = `${yourCurrentScore}`
        compTotalScore.innerHTML = `${compCurrentScore}`

        round++
        if (round === 3) {
            endGame()
        }
    }
});

btnGameRules.addEventListener('click', function () {
    popup.classList.remove("hidden");
    popup.classList.add("visible");
    popup.style.setProperty('z-index', '1')
});

btnClose.addEventListener('click', function () {
    closePopUp()
});


btnNewGamePopUp.addEventListener('click', function () {
    resetGame()
    endGamePopup.classList.remove("visible");
    endGamePopup.classList.add("hidden");
    endGamePopup.style.setProperty('z-index', '-1')
});

btnDismissEndGamePopUp.addEventListener('click', function () {
    rollDiceEnabled = false
    endGamePopup.classList.remove("visible");
    endGamePopup.classList.add("hidden");
    endGamePopup.style.setProperty('z-index', '-1')
});

function resetGame(){
    round = 0
    rollDiceEnabled = true
    yourDice1.src = "images/dice-6.svg"
    yourDice2.src = "images/dice-6.svg"
    compDice1.src = "images/dice-6.svg"
    compDice2.src = "images/dice-6.svg"
    yourCurrentScore = 0
    compCurrentScore = 0
    yourScore.innerHTML = `0`
    computerScore.innerHTML = `0`
    yourTotalScore.innerHTML = `0`
    compTotalScore.innerHTML = `0`
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
}