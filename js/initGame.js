
var x= pieceGenerator(Math.round(Math.random()*5))
var player1 = new Player(x)
player1.matrix.generateMap(mapHeight, mapWidth)
player1.drawAll()

var play = setInterval(game,750)
var play;


function keystroke(e){
	switch (e.key){
		case "ArrowLeft":
			player1.moveHorizontaly(-1)
			return 
		case "ArrowRight":
			player1.moveHorizontaly(1)
			return 
		case "ArrowUp":
			player1.rotatePiece(-1)
			return 
		case "ArrowDown":
			player1.dropOrReplace()
			return 
		case " ":
			//playPause()
			return 
	};
};
function playPause (){
	var onOff = 0
	if(x===0){
		clearInterval(play);
		var onOff = 1
	}
	else{
		play = setInterval(game,750)
		var onOff = 0
	};
};
function game(){
	player1.dropOrReplace()
};
window.addEventListener("keydown", keystroke);