/* REFER TO day_3_data.js TO GET THE INPUT
You move deeper into the labyrinth of hallways and office furniture that makes up this part of Easter Bunny HQ. This must be a graphic design department; the walls are covered in specifications for triangles.

Or are they?

The design document gives the side lengths of each triangle it describes, but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.

In a valid triangle, the sum of any two sides must be larger than the remaining side. For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.

In your puzzle input, how many of the listed triangles are possible?
*/

var input = inp.split(/\n/g);

var triangle_num = function(z){
    var i, count, triangle; 
    count = 0;
    for (i = 0; i < z.length; i++){
		triangle = is_digit(z[i]);
		//console.log("triangle sides are "+triangle[0]+", "+triangle[1]+", "triangle[2]);
        if (triangle[0] + triangle[1] > triangle[2] && triangle[0] + triangle[2] > triangle[1] && triangle[1] + triangle[2] > triangle[0]){
            count++;
        }
    }
    return count;
}

var is_digit = function(x){
	var i, j, sides; 
	sides = [];
	j = 0;
	for (i = 0; i < x.length; i++){
		if (x[i] !== ""){
			sides[j] = Number(x[i]); 
			j++;
		}
	}
	return sides;
}

