/* REFER TO day_2_data.js TO GET THE INPUT
--- Part Two ---

You finally arrive at the bathroom (it's a several minute walk from the lobby so visitors can behold the many fancy conference rooms and water coolers on this floor) and go to punch in the code. Much to your bladder's dismay, the keypad is not at all like you imagined it. Instead, you are confronted with the result of hundreds of man-hours of bathroom-keypad-design meetings:

    1
  2 3 4
5 6 7 8 9
  A B C
    D
You still start at "5" and stop when you're at an edge, but given the same instructions as above, the outcome is very different:

You start at "5" and don't move at all (up and left are both edges), ending at 5.
Continuing from "5", you move right twice and down three times (through "6", "7", "B", "D", "D"), ending at D.
Then, from "D", you move five more times (through "D", "B", "C", "C", "B"), ending at B.
Finally, after five more moves, you end at 3.
So, given the actual keypad layout, the code would be 5DB3.

Using the same instructions in your puzzle input, what is the correct bathroom code?
*/

input = input.split(/\n/g);
var instructions = [];
instructions = input; 

var get_code = function(instr){
	var start, i, j, x, y, grid, code, x_replace, y_replace; 
	grid = [
		[0,0,1,0,0],
		[0,2,3,4,0],
		[5,6,7,8,9],
		[0,"A","B","C",0],
		[0,0,"D",0,0],
	];
	x = 2;
	y = 0;
	code = "";
	for (i = 0; i < instr.length; i++){
		for(j = 0; j < instr[i].length; j++){
			x_replace = x; 
			y_replace=y; 
			if (instr[i][j] === "U"){
				if(x > 0) x = x-1;
				if(grid[x][y]===0) x = x_replace;
			} else if (instr[i][j] === "D"){
				if(x < 4) x = x+1; 
				if(grid[x][y]===0) x = x_replace;
			} else if (instr[i][j] === "L"){
				if(y > 0) y = y-1;
				if(grid[x][y]===0) y = y_replace;
			} else if (instr[i][j] === "R"){
				if (y < 4) y = y+1;
				if(grid[x][y]===0) y = y_replace;
			}
		}
		code=code+grid[x][y];
	}
	return code; 
}

get_code(instructions);

