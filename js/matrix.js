function Matrix(mapHeight, mapWidth){
	this.storage = new Array(mapHeight);
	this.generateMap = function(mapHeight, mapWidth){
		for(i=0; i<mapHeight; i++){
			this.storage[i] = new Array(mapWidth).fill(["0","#FFFFFF"]);
			this.storage[i].push(["X","	#FFFFFF"]);
			this.storage[i].unshift(["X","#FFFFFF"]);
		};
		this.storage.push(new Array(mapWidth+2).fill(["X","#FFFFFF"]));
		this.storage.unshift(new Array(mapWidth+2).fill(["X","#FFFFFF"]));
	};
	this.check = function (square){ 
		if (this.storage[square[0]][square[1]][0][0] !== "X"){
			return 1;
		}
		else{
			return 0;
		}
	};
	this.write = function (square){ 
		this.storage[square[0]][square[1]] = square[2];
	};
	this.readState = function (square){
		return this.storage[square[0]][square[1]][0];
	};
	this.readColour = function (square){
		return this.storage[square[0]][square[1]][1];
	};
	this.clear = function (square){
		this.storage[square[0]][square[1]] = ["0","#FFFFFF"];
	};
	this.solidify = function (square){
		this.storage[square[0]][square[1]] = ["X",square[2][1]];
	};
};