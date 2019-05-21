
var x= pieceGenerator(Math.round(Math.random()*5))
var huj = new Player(x)
huj.matrix.generateMap(mapHeight, mapWidth)

var play = setInterval(game,750)

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
	};
};
function game(){
	huj.dropOrReplace()
};
window.addEventListener("keydown", keystroke);