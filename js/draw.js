function Draw(){
	this.drawSquare = function(square){
		ctx.font = "25px Arial"
		console.log(square)
		console.log(square[2])
		ctx.clearRect((square[1]*30),(square[0]*30)-30,30,30) 
		ctx.fillStyle = square[2][1]
		
		ctx.fillRect((square[1]*30),(square[0]*30)-30,30,30)
	};
	this.clearSquare = function(square){
		ctx.font = "30px Arial"
		ctx.clearRect((square[1]*30),(square[0]*30)-30,30,30) 
	};
};