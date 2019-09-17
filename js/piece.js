function pieceGenerator(pieceNumber){
	switch (pieceNumber){
		case 0:
			let colour0 = "#581845"
			pieceType = [[5,5,["p", colour0]],[5,4,["p",colour0]],[5,6,["p",colour0]],[6,5,["p",colour0]]]
			return pieceType
		case 1:
			let colour1 = "#900C3F"
			pieceType = [[5,5,["p",colour1]],[5,4,["p",colour1]],[5,6,["p",colour1]],[5,7,["p",colour1]]]
			return pieceType
		case 2:
			let colour2 = "#C70039"
			pieceType = [[5,5,["p",colour2]],[5,4,["p",colour2]],[6,5,["p",colour2]],[6,6,["p",colour2]]]
			return pieceType
		case 3:
			let colour3 = "#FF5733"
			pieceType = [[5,5,["p",colour3]],[6,5,["p",colour3]],[6,4,["p",colour3]],[5,6,["p",colour3]]]
			return pieceType
		case 4:
			let colour4 = "#FFC300"
			pieceType = [[5,5,["p",colour4]],[5,4,["p",colour4]],[5,6,["p",colour4]],[6,6,["p",colour4]]]
			return pieceType
		case 5:
			let colour5 = "#DAF7A6"
			pieceType = [[5,5,["p",colour5]],[5,4,["p",colour5]],[5,6,["p",colour5]],[6,4,["p",colour5]]]
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