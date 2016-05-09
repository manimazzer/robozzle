//create an array of blocks whose color and position follow the "mountain" pattern
var blocks= ["x","b","b","b","b","b","b","b","b","b","b","r","b","r","g","g","g","g","g","g","g","g","g","g","r","g","r","b","b","b","b","b","b","b","b","b","b","r","b","r","g","g","g","g","g","g","g","g","g","g","r","g","r","b","b","b","b","b","b","b","b","b","b","r","b","r","g","g","g","g","g","g","g","g","g","g","r","g","r","b","b","b","b","b","b","b","b","b","b","r","b","r","g","g","g","g","g","g","g","g","g","g","r","g" ]

//create an array that will hold the set of instructions for the ship to follow
var instructions= [];

//functions that creates instructions for the blue straightaways
function first(colors){
	while(colors.length>1){
		console.log("straight");
		instructions.push("straight");
		colors.shift();
		
		if(colors[0]=="r"){
			console.log("right");
			instructions.push("right");
			first(colors);
		}else if(colors[0]== "g"){
			second(colors);
		}else{
			first(colors);
		}
		
	}
}

//functions that creates instructions for the green straightaways
function second(colors){
	while(colors.length>1){
		console.log("straight");
		instructions.push("straight");
		colors.shift();
		
		if(colors[0]=="r"){
			console.log("left");
			instructions.push("straight");
			second(colors);
		}else if(colors[0]== "b"){
			first(colors);
		}else{
			second(colors);
		}
		
	}
}

//create the set of instructions and print to the console
first(blocks);

//total number of instructions
instructions.length;
