function Ball(x, y){
	this.x = x;
	this.y = y;
	this.xSpeed = 5;
	this.ySpeed = 5;
	this.move = function(){
		this.display();
		if(this.hitsPaddle()){
			this.ySpeed = -this.ySpeed;
			//Change direction if the ball hits the side of the paddle at an angle
			if(this.xSpeed > 0 && (this.x < paddle.x + 50) || this.xSpeed < 0 && (this.x > paddle.x + 150)){
				this.xSpeed = -this.xSpeed;
			}
			this.y -= 5;
		}
		if(this.hitBrick() != -1){
			var index = this.hitBrick();
			//If it hits the top or bottom reverse the ySpeed
			if(this.y === bricks[index].y + 40 || this.y === bricks[index].y){
				this.ySpeed = -this.ySpeed;
			} else {
				//If it hits the side reverse the xSpeed
				this.xSpeed = -this.xSpeed;
			}
			bricks.splice(index, 1);
			numBricks--;
		}
		this.checkWalls();
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	this.display = function(){
		fill(255);
		ellipse(this.x, this.y, 50, 50);
	}
	this.hitsPaddle = function(){
		return (this.y >= paddle.y && this.y <= paddle.y + 50) && (this.x >= paddle.x && this.x <= paddle.x + 200);
	}
	this.checkWalls = function(){
		if(this.x <= 0 || this.x >= width){
			this.xSpeed = -this.xSpeed;
		}
		if(this.y <= 0){
			this.ySpeed = -this.ySpeed;
		}
		if(this.y >= height){
			this.xSpeed = 0;
			this.ySpeed = 0;
		}
	}
	this.hitBrick = function(){
		for(var b = 0; b < numBricks; b++){
			if((this.y >= bricks[b].y && this.y <= bricks[b].y + 40) && (this.x >= bricks[b].x && this.x <= bricks[b].x + 125)){
				return b;
			}
		}
		return -1;
	}
}