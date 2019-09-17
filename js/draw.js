function Draw(){
	this.drawSquare = function(square){
		if(square[2][0]!=="0"){
			ctx.fillStyle = "#000000"	
			ctx.fillRect((square[1]*30),(square[0]*30),29,29)	
			//ctx.fillStyle = "#219E88"	
			//ctx.fillRect((square[1]*30)+3,(square[0]*30)+3,30,30)		
			ctx.fillStyle = square[2][1]		
			ctx.fillRect((square[1]*30)+1,(square[0]*30)+1,29,29)
		}
		else{
		
		};
	};
	this.clearSquare = function(square){
		ctx.clearRect((square[1]*30),(square[0]*30),30,30) 
	};
};