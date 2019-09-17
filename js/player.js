function Player (x){
//OBJECTS
	this.matrix = new Matrix(mapHeight, mapWidth);
	this.piece = new Piece(x);
	this.draw = new Draw;	
//PIECE METHODS
	this.dropOrReplace = function(){// check row ?
		this.piece.dropSquares()
		if(this.checkMove(this.piece.squaresTemp)){
			this.finalizeMove()
		}
		else{
			this.solidifyAndCheckRow()
			this.piece = new Piece(pieceGenerator(Math.round(Math.random()*5)))
			if(this.checkMove(this.piece.squares)){
				this.drawSquares(this.piece.squares)
			}
			else{
				alert("Spierdalaj Huju!")
				clearInterval(play);
			};
		};	
	};
	this.rotatePiece = function(rotation){//rotation is -1 or 1
		this.piece.rotate(rotation)
		if(this.checkMove(this.piece.squaresTemp)){
			this.finalizeMove()
		};
	};
	this.moveHorizontaly = function(offset){// check row ?
		this.piece.moveHorizontaly(offset)
		if(this.checkMove(this.piece.squaresTemp)){
			this.finalizeMove()
		};
	};
	this.finalizeMove = function(){
		this.clearSquares(this.piece.squares)
		this.unDrawSquares(this.piece.squares)
			//check row
		this.piece.squares = this.piece.squaresTemp;
		this.writeSquares(this.piece.squares)
		this.drawSquares(this.piece.squares)
	};	
//MATRIX METHODS	
	this.checkMove = function(squares){
		let checkStatuses = new Array
		for(i=0; i<this.piece.squares.length;i++){
			checkStatuses.push(this.matrix.check(squares[i]))
		};
		return !checkStatuses.includes(0);
	};
	this.clearSquares = function(squares){
		for(i=0; i<this.piece.squares.length;i++){
			this.matrix.clear(this.piece.squares[i]);
		};
	};
	this.writeSquares = function(squares){
		for(i=0; i<this.piece.squares.length;i++){
			this.matrix.write(this.piece.squares[i]);
		};
	};
	this.solidifyAndCheckRow = function(squares){// separate solidify and check row
		let rowsToCheck = []
		for(i=0; i<this.piece.squares.length;i++){
			this.matrix.solidify(this.piece.squares[i]);
			rowsToCheck.push(this.piece.squares[i][0])
		};
		console.log(rowsToCheck)
		for(a=0; a<rowsToCheck.length; a++){
			console.log(rowsToCheck[a])
			this.checkRow(rowsToCheck[a]);
		};
	};
	this.checkRow = function (row){
		let rowStatus =[]
		for(i=0;i<mapWidth+2;i++){
			if(this.matrix.readState([[row],[i]])!=="0"){
				rowStatus.push(true)
			}
			else{
				rowStatus.push(false)
			};
		};
		if(rowStatus.includes(false)){
			console.log(row +"row ok!")
		}
		else{
			this.removeRow(row)
		};
	};
	this.removeRow = function(row){
		console.log(row + "removeRow!")
		this.matrix.storage.splice(row, 1)
		this.matrix.storage.splice(1,0, new Array(mapWidth).fill(["0","#FFFFFF"]))
		this.matrix.storage[1].push(["X","#219E88"])
		this.matrix.storage[1].unshift(["X","#219E88"])
		this.unDrawAll()
		this.drawAll()
	};
		
//DRAW METHODS
	this.drawSquares = function(squares){
		for(i=0; i<this.piece.squares.length;i++){
			this.draw.drawSquare(this.piece.squares[i]);
		};
	};
	this.unDrawSquares = function(squares){
		for(i=0; i<this.piece.squares.length;i++){
			this.draw.clearSquare(this.piece.squares[i]);
		};
	};
	this.drawAll = function(){
		for(y=0; y<mapHeight+2; y++){
			for(x=0; x<mapWidth+2; x++){
				this.draw.drawSquare([y,x,[this.matrix.readState([y,x]),this.matrix.readColour([y,x])]])
			};
		};
	return true
	};
	this.unDrawAll = function(){
		for(y=0; y<mapHeight+2; y++){
			for(x=0; x<mapWidth+2; x++){
				this.draw.clearSquare([y,x,[this.matrix.readState([y,x]),this.matrix.readColour([y,x])]])
			};
		};
	return true
	};
};