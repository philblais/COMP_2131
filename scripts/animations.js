const diceAnimationDelay = 100;
let position = 0;
let diceAnimation;
let isAnimating = false;
let timeoutHandler;
let popupTimeoutHandler;

function animate() {
    clearTimeout(popupTimeoutHandler);
    if (!isAnimating) {
        isAnimating = true;
        diceAnimation = requestAnimationFrame(rotate);
    }
}


function rotate() {
    timeoutHandler = setTimeout(function () {
        position += 60;
        let roll = position % 360
        yourDice1.style.transform = `rotate(${roll}deg)`
        yourDice2.style.transform = `rotate(${roll}deg)`
        player2Dice1.style.transform = `rotate(${roll}deg)`
        player2Dice2.style.transform = `rotate(${roll}deg)`
        if (roll === 0) {
            stopAnimating()
        } else {
            isAnimating = true;
            diceAnimation = requestAnimationFrame(rotate);
        }
    }, diceAnimationDelay);
}

function stopAnimating() {
    cancelAnimationFrame(diceAnimation);
    clearTimeout(timeoutHandler);
    isAnimating = false;
    updateUI ()
}