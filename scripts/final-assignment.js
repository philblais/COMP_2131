// constants
const playerTitle = document.getElementById('player-title');
const playerName = document.getElementById('player-name');
const player2Title = document.getElementById('player-2-title');
const player2Name = document.getElementById('player-2-name');
const warningMsg = document.getElementById('warning-msg');
const winnerMsg = document.getElementById('winner');
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
const player2Dice1 = document.getElementById('player-2-dice-1');
const player2Dice2 = document.getElementById('player-2-dice-2');
const yourScore = document.getElementById('your-score');
const player2Score = document.getElementById('player-2-score');
const yourTotalScore = document.getElementById('your-total-score');
const player2TotalScore = document.getElementById('player-2-total-score');
const timeDelay = 2000
let roll1 = 0;
let roll2 = 0;
let roll3 = 0;
let roll4 = 0;


const player = new Player(`Phil`, 0);
const player2 = new Player(`Computer`, 0);
let game = new Game(player, player2, 0);

playerTitle.innerHTML = `${player.name}`
playerName.innerHTML = `${player.name}`
player2Title.innerHTML = `${player2.name}`
player2Name.innerHTML = `${player2.name}`

let rollDiceEnabled = true

// listeners
btnStartAnimation.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "none")
    gameGridView.style.setProperty("display", "grid")
});

btnEndGame.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "grid")
    gameGridView.style.setProperty("display", "none")
    resetGame(game)
});

btnNewGame.addEventListener('click', function () {
    resetGame(game)
});

btnRollDice.addEventListener('click', function () {
    if (rollDiceEnabled) {
        rollDice()
    } else {
        showWarning()
    }
});

btnGameRules.addEventListener('click', function () {
    showPopUp(popup)
});

btnClose.addEventListener('click', function () {
    closePopUp()
});

btnNewGamePopUp.addEventListener('click', function () {
    resetGame(game)
    dismissPopUp(endGamePopup)
});

btnDismissEndGamePopUp.addEventListener('click', function () {
    rollDiceEnabled = false
    dismissPopUp(endGamePopup)
});

