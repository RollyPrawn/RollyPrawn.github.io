// Treating the ball as an object.
class Ball {

    // Initialization of object properties.
    constructor(pos, color) {

	this.color = color;
	this.elasticity = 1.05;
        this.velX = Math.random() * 2 - 1;
        this.velY = Math.random() * 2 - 1;
        this.x = pos.x;
        this.y = pos.y;

    }

    // Drawing the paddle on the canvas.
    draw() {

        ctx.beginPath();
        ctx.rect(this.x, this.y, tileSize, tileSize);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();

    }

    // Moving the paddle by updating position.
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
