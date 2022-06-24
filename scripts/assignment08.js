// constants
const btnStartAnimation = document.getElementById('btn-start-animation');
const btnStopAnimation = document.getElementById('btn-stop-animation');
const bikeImageInHTML = document.getElementById('bike');
const popup = document.getElementById('pop-up');
const closeButton = document.getElementById('close-pop-up');
const contentWrapper = document.getElementById('content-wrap');
const bikeAnimationDelay = 75;
const popupDelay = 3000;

// variables
let bikeAnimation;
let position = 0;
let isAnimating = false;
let timeoutHandler;
let popupTimeoutHandler;

// listeners
btnStartAnimation.addEventListener('click', function () {
    clearTimeout(popupTimeoutHandler);
    if (!isAnimating) {
        isAnimating = true;
        bikeAnimation = requestAnimationFrame(rotate);
    }
});

btnStopAnimation.addEventListener('click', function () {
    cancelAnimationFrame(bikeAnimation);
    clearTimeout(timeoutHandler);
    isAnimating = false;
});

closeButton.addEventListener('click', function () {
    closePopUp()
});

// functions

popupTimeoutHandler = setTimeout(function () {
    popup.classList.remove("hidden");
    popup.classList.add("visible");
    popup.style.setProperty('z-index', '1')
    contentWrapper.style.setProperty('z-index', '-1')
}, popupDelay);

function rotate() {
    timeoutHandler = setTimeout(function () {
            if (position < 34) {
                position++;
            } else {
                position = 1;
            }
            bikeImageInHTML.src = `images/bike-${position}.jpg`
            bikeAnimation = requestAnimationFrame(rotate);
        }, bikeAnimationDelay);
}

function closePopUp() {
    clearTimeout(popupTimeoutHandler);
    popup.classList.remove("visible");
    popup.classList.add("hidden");
    popup.style.setProperty('z-index', '-1');
    contentWrapper.style.setProperty('z-index', '1');
}