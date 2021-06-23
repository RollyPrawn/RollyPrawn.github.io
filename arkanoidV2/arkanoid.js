// Arkanoid screen class
class ArkanoidScreen {

    // Constructor
    constructor() {

	this.ballList = {};
	this.ballMultiplicity = 10;
	this.isInitialised = 0;
	this.isPaused = 0;
	this.isSleeping = 1;
	this.score = 0;
	this.canvas;
	this.paddle;
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
    
    // Showing the score of the player.
    showScore() {
	
	ctx.textAlign = "center";
	ctx.font = "25px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("SCORE: " + this.score, this.width - 120, 30);
	
    }

    // Showing if the game is paused.
    showPaused() {
	
	ctx.textAlign = "center";
	ctx.font = "35px Arial";
	ctx.fillStyle = "white";
	ctx.fillText("PAUSED", this.width / 2, this.height / 2);
	
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

	this.isPaused = false;
	this.score = 0;
	this.paddle = new Paddle({x : this.width / 2, y : Math.floor(this.height * 0.9)}, "red");	
	
	for (let i = 0; i < this.ballMultiplicity; i++) {
	    
	    this.ballList[i] = new Ball(randomSpawnLocation(this.width, this.height, tileSize), "blue");	   
	    
	}
	
	/*this.ballList[1] = new Ball(spawnLocation(this.width / 4, Math.floor(this.height * 0.1)), "green");
	this.ballList[2] = new Ball(spawnLocation(this.width / 2, Math.floor(this.height * 0.1)), "blue");*/
	
    }

    // Updating the frame using the main game logic
    update() {
	
	// Checking if game is paused.
	if (this.isPaused) {
            return;
	}

	// Clearing the canvas for redrawing.
	ctx.clearRect(0, 0, this.width, this.height);

	this.paddle.draw();
	this.paddle.move();
	this.paddle.velX = 0;
	this.paddle.velY = 0;
	
	// Loop for handling balls
	for (const [i, ball] of Object.entries(this.ballList)) {
	    
	    ball.draw();
	    ball.move();
	    ball.gravitate();

	    // Collisions between balls
	    for (const [j, ball2] of Object.entries(this.ballList)) {
		
		if (i == j) {continue}
		else if (distance({'x' : ball.x, 'y' : ball.y},
				  {'x' : ball2.x, 'y' : ball2.y}) <
			 (ball.radius + ball2.radius)) {
		    
		    let vx1 = elasticLinearCollisionV1(ball.mass,
							 ball2.mass,
							 ball.velX,
							 ball2.velX
							)
		    let vx2 = elasticLinearCollisionV2(ball.mass,
							  ball2.mass,
							  ball.velX,
							  ball2.velX
							 )

		    let vy1 = elasticLinearCollisionV1(ball.mass,
							 ball2.mass,
							 ball.velY,
							 ball2.velY
							)
		    let vy2 = elasticLinearCollisionV2(ball.mass,
							  ball2.mass,
							  ball.velY,
							  ball2.velY
						      )
		    ball.velX = vx1;
		    ball2.velX = vx2;
		    
		    ball.velY = vy1;
		    ball2.velY = vy2;
		    
		    break;

		}		
	    }
	    
	    // Collisions between balls and paddle
	    if ((ball.y > this.paddle.y - 1 * tileSize) &
		(ball.x < this.paddle.x + Math.floor(this.paddle.width * tileSize) &
		 ball.x > this.paddle.x - Math.floor(this.paddle.width)))
	    {
		this.score += 1;
		ball.velY *= -1 * ball.elasticity;
	    }
	    
	    // Balls bounce off walls
	    if ((ball.x < 0) | (ball.x > this.width - tileSize)) {
		ball.velX *= -1 * ball.elasticity;
	    }

	    if (ball.y < 0) {
		ball.velY *= -1 * ball.elasticity;
	    }
	    
	    // Balls disappear when they fall out of the screen	
	    if (ball.y > this.height * 1.0) {
		delete this.ballList[i];
	    }

	    // Game over if no balls left
	    if (Object.keys(this.ballList).length == 0) {
		this.isSleeping = 1;
		this.isInitialised = 0;
		GameOver.isSleeping = 0;
		GameOver.score = this.score;
		this.score = 0;
	    }

	}
	
	this.showScore();
	
	// Paddle can't disappear from screen
	if (this.paddle.x < -this.paddle.width * tileSize) {
	    this.paddle.x = this.width - this.paddle.width * tileSize;
	}
	else if (this.paddle.x > this.width ) {
	    this.paddle.x = 0;
	}
	
	this.showScore();
	
    }
	
}
