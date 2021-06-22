let Arkanoid;
let Start;
let ctx;
let gravity = 0.05;
let tileSize = 20;

var Keys = {

    left : false,
    right : false

}

// Two functions to track whether keys are pressed
// This helps with smoothing out the movement
window.onkeydown = function(e) {

    var kc = e.keyCode;
    //e.preventDefault();

    if      (kc === 37) Keys.left = true;
    else if (kc === 39) Keys.right = true;
    
};

window.onkeyup = function(e) {

    var kc = e.keyCode;
    //e.preventDefault();

    if      (kc === 37) Keys.left = false;
    else if (kc === 39) Keys.right = false;
    
};

// Adding an event listener for key presses.
window.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 32) {
        evt.preventDefault();
        Arkanoid.isPaused = !Arkanoid.isPaused;
        Arkanoid.showPaused();
    }

    if (evt.keyCode === 13) {
        evt.preventDefault();
	Arkanoid.isSleeping = 0;
	Start.isSleeping = 1;
	GameOver.isSleeping = 1;	
    }

});

// Loading the browser window
window.addEventListener("load",function(){

    main();

});

// Main program
function main() {

    let fps = 20;
    
    Arkanoid = new ArkanoidScreen();
    Start = new StartScreen();
    GameOver = new GameOverScreen();
   
    var interval = setInterval(function(){
	Start.run();
	Arkanoid.run();
	GameOver.run();	
    }, 1000/fps);
    
    //console.log('Executed main() successfully.')

}
