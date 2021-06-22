// Treating the paddle as an object.
class Paddle {

    // Initialization of object properties.
    constructor(pos, color) {

	this.color = color;
	this.speed = 40;
	this.width = 8;
        this.velX = 0;
        this.velY = 0;
        this.x = pos.x;
        this.y = pos.y;

    }
    
    // Drawing the paddle on the canvas.
    draw() {

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width * tileSize, tileSize);
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
	if (Keys['left']) {
            this.x -= this.speed;
	};
	if (Keys['right']) {
            this.x += this.speed;
	};

    }
    
}
