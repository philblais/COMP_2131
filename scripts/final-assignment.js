// constants
const gameStartView = document.getElementById('game-start');
const gameGridView = document.getElementById('game-grid');
const btnStartAnimation = document.getElementById('btn-start-animation');
const btnEndAnimation = document.getElementById('btn-end-animation');
const diceImageInHTML = document.getElementById('dice');
const diceAnimation = document.getElementById('dice-animation');

requestAnimationFrame( diceRolling );

function diceRolling(){

    // let children = diceAnimation.children;
    // for (let i = 0; i < children.length; i++) {
    //     let tableChild = children[i];
    //     let position = tableChild.style.left
    //     for (let j = position; j < 50; j++) {
    //         setInterval(function(){
    //             console.log(tableChild.style.left)
    //             tableChild.style.left = `${j}%`
    //         }, 1000);
    //     }
    // }
}

// listeners
btnStartAnimation.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "none")
    gameGridView.style.setProperty("display", "grid")
});

btnEndAnimation.addEventListener('click', function () {
    gameStartView.style.setProperty("display", "grid")
    gameGridView.style.setProperty("display", "none")
});
