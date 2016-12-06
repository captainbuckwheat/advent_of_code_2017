//for the input see day_3_data.js

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
