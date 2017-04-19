var width = window.innerWidth;
var height = window.innerHeight;
var paddle, ball;
var bricks = [];
var numBricks = 36;

function setup(){
	createCanvas(window.innerWidth, window.windowHeight);
	paddle = new Paddle();
	ball = new Ball(100, 250);
	//4 Rows of 9 bricks
	for(var row = 0 ; row < 4; row++){
		for(var b = 0; b < 9; b++){
			var brick = new Brick(b*125 + 225 , 80 + row*40);
			bricks.push(brick);
		}
	}
}

function draw(){
	background(0);
	paddle.move();
	ball.move();
	for(var b = 0; b < numBricks; b++){
		bricks[b].display();
	}
}

function Paddle(){
	this.x = width/2 - 100;
	this.y = height - 100; 
	this.display = function(){
		fill(255);
		rect(this.x, this.y, 200, 50);
	}
	this.move = function(){
		this.display();
		if(keyIsDown(LEFT_ARROW) && this.x > 0){
			this.x -= 10;
		}
		if (keyIsDown(RIGHT_ARROW) && this.x < width - 200){
			this.x += 10;
		}
	}
}

function Brick(x, y){
	this.x = x;
	this.y = y;
	this.display = function(){
		fill(255);
		rect(this.x, this.y, 125, 40);
	}
}
