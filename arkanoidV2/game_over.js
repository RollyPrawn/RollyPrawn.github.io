// Game over screen class
class GameOverScreen {

    // Constructor
    constructor() {

	this.isInitialised = 0;
	this.isSleeping = 1;
	this.canvas;
	this.width;
	this.height;
	this.score;

    }

    // Main controller
    run() {

	if (this.isSleeping) {
	    return;
	}
	else if (!this.isInitialised) {
	    
	    this.init();
	    this.isInitialised = true;
	    
	}
	else {
	    
	    this.update();
	    
	};


    }
    
    // Initialise the game
    init() {

	// Dynamically controlling the size of canvas.
	this.width = tileSize * Math.floor(window.innerWidth / tileSize);
	this.height = tileSize * Math.floor(window.innerHeight / tileSize);;

	this.canvas = document.getElementById("game-area");
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	ctx = this.canvas.getContext("2d");

    }

    // Updating the frame using the main game logic
    update() {
	
	// Clearing the canvas for redrawing.
	ctx.clearRect(0, 0, this.width, this.height);

	this.showGameOver();
	
	// Flashing instructions
	/*if (instructionsShowing) {
	    
	    showStartInstructions();
	    
	    }*/
	
    }

    // Showing the start screen instructions      
    showGameOver() {
	
	ctx.textAlign = "center";
	ctx.font = "35px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Game over! You scored: " + this.score, this.width / 2, this.height / 2);
	ctx.fillText("Hit ENTER to try again!", this.width / 2, this.height / 1.6);
	
    }

}
