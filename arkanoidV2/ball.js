// Treating the ball as an object.
class Ball {

    // Initialization of object properties.
    constructor(pos, color) {

	this.color = color;
	this.elasticity = 1.05;
	//this.elasticity = 1.0;
	this.mass = 1;
	this.radius = 1.5 * tileSize / 2;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
        this.x = pos.x;
        this.y = pos.y;

    }

    // Drawing the ball on the canvas.
    draw() {

        ctx.beginPath();
        //ctx.rect(this.x, this.y, tileSize, tileSize);
	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();

    }

    // Moving the ball by updating position.
    move() {

        // Movement 
        this.x += this.velX * tileSize;
        this.y += this.velY * tileSize;

    }

    // Changing the direction of movement.
    dir(dirX, dirY) {

        this.velX = dirX;
        this.velY = dirY;

    }
    
    // Changing the direction of movement.
    gravitate() {

        this.velY += gravity;

    }
    
    
}
