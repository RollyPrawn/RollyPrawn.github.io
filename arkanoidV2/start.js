// Start screen class
class StartScreen {

    // Constructor
    constructor() {

	this.isInitialised = 0;
	this.isSleeping = 0;
	this.canvas;
	this.width;
	this.height;

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

	this.showStartInstructions();
	
	// Flashing instructions
	/*if (instructionsShowing) {
	    
	    showStartInstructions();
	    
	    }*/
	
    }

    // Showing the start screen instructions      
    showStartInstructions() {
	
	ctx.textAlign = "center";
	ctx.font = "35px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Use LEFT and RIGHT keys to move.",
		     this.width / 2,
		     this.height / 2.5);
	ctx.fillText("Press SPACE to pause.",
		     this.width / 2,
		     this.height / 2.1);
	ctx.fillText("Hit ENTER to begin!", this.width / 2, this.height / 1.5);
	
    }

}
