function pieceGenerator(pieceNumber){
	switch (pieceNumber){
		case 0:
			pieceType = [[5,5,["0","#17202A"]],[5,4,["0","#17202A"]],[5,6,["0","#17202A"]],[6,5,["0","#17202A"]]]
			return pieceType
		case 1:
			pieceType = [[5,5,["0","#17202A"]],[5,4,["0","#17202A"]],[5,6,["0","#17202A"]],[5,7,["0","#17202A"]]]
			return pieceType
		case 2:
			pieceType = [[5,5,["0","#A569BD"]],[5,4,["0","#A569BD"]],[6,5,["0","#A569BD"]],[6,6,["0","#A569BD"]]]
			return pieceType
		case 3:
			pieceType = [[5,5,["0","#5DADE2"]],[6,5,["0","#5DADE2"]],[6,4,["0","#5DADE2"]],[5,6,["0","#5DADE2"]]]
			return pieceType
		case 4:
			pieceType = [[5,5,["0","#16A085"]],[5,4,["0","#16A085"]],[5,6,["0","#16A085"]],[6,6,["0","#16A085"]]]
			return pieceType
		case 5:
			pieceType = [[5,5,["0","#CB4335"]],[5,4,["0","#CB4335"]],[5,6,["0","#CB4335"]],[6,4,["0","#CB4335"]]]
			return pieceType
	};
};
function Piece(pieceType) {
//SQUARES
    this.squares = [pieceType[0], pieceType[1], pieceType[2], pieceType[3]];
	this.squaresTemp = []
//MOVES
    this.dropSquares = function (){
		this.squaresTemp = []
		for(i=0; i<this.squares.length;i++){
			this.squaresTemp.push([this.squares[i][0] + 1, this.squares[i][1], this.squares[i][2]])
		};
    };
    this.rotate = function (rotation) {
		this.squaresTemp = []
        let centerY = this.squares[0][0];
        let centerX = this.squares[0][1];
		for(i=0; i<this.squares.length;i++){
			let newDeltaY = -rotation * (this.squares[i][1] - centerX);
			let newDeltaX = rotation * (this.squares[i][0] - centerY);			
			this.squaresTemp.push([ newDeltaY + centerY, newDeltaX + centerX, this.squares[i][2]])
		};
	};
    this.moveHorizontaly = function (offset) {
		this.squaresTemp = []
		for(i=0; i<this.squares.length;i++){
			this.squaresTemp.push([this.squares[i][0], this.squares[i][1]+offset, this.squares[i][2]])
		};
    };
};