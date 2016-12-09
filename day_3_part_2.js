/* REFER TO day_3_data.js TO GET THE INPUT (var inp)
Now that you've helpfully marked up their design documents, 
it occurs to you that triangles are specified in groups of three vertically. 
Each set of three numbers in a column specifies a triangle. Rows are unrelated.

For example, given the following specification, numbers with the same hundreds digit would be part of the same triangle:

101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603
In your puzzle input, and instead reading by columns, how many of the listed triangles are possible?
*/
var digit = function(x){
	var digits, i, j; 
	digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	for (j = 0; j < digits.length; j++){
		if (x===digits[j]){
			return true;
		}
	}
	return false;
}

var make_array = function(x){
	var nums, i, j, saw_digit, num; 
	nums = []; 
	j = 0; 
	num = 0;
	x = x + " ";
	for (i = 0; i < x.length; i++){
		if(digit(x[i])){
			saw_digit = true;
			num = num*10 + Number(x[i]);
		} else if(saw_digit){
			nums[j] = num; 
			num = 0;
			j++;
			saw_digit = false;
		}
	}
	return nums; 
}

var input = make_array(inp);

var find_triangles = function(x){
	var i, j, count, side_a, side_b, side_c; 
	count = 0;
	for (i = 0; i < x.length; i = i+9){
		for (j = i; j < i+3; j++){
			side_a = x[j]; 
			side_b = x[j+3]; 
			side_c = x[j+6]; 
			if (side_a + side_b > side_c && side_a + side_c > side_b && side_b + side_c > side_a) {
				count++;
			}
		}
	}
	return count; 
}
