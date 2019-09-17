
var x= pieceGenerator(Math.round(Math.random()*5))
var huj = new Player(x)
huj.matrix.generateMap(mapHeight, mapWidth)
huj.drawAll()

var play = setInterval(game,750)
var play;


function keystroke(e){
	switch (e.key){
		case "ArrowLeft":
			huj.moveHorizontaly(-1)
			return 
		case "ArrowRight":
			huj.moveHorizontaly(1)
			return 
		case "ArrowUp":
			huj.rotatePiece(-1)
			return 
		case "ArrowDown":
			huj.dropOrReplace()
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
	huj.dropOrReplace()
};
window.addEventListener("keydown", keystroke);