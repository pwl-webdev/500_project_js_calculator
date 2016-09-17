//1) Build a function my_max() which takes an array and returns the maximum number.
function my_max(input_ar){
	var max = 0;
	for(var i = 0; i < input_ar.length; i++){
		if(input_ar[i] > max){
			max = input_ar[i];
		}
	}
	console.log("Maximum number found: "+max);
};

var ar = [12,23,754,46788];
my_max(ar);

//2) Build a function vowel_count() which takes a string and returns the number of vowels (AEIOUY).
function vowel_count(input_ar){
	var vowelc = 0;
	var vowels = ['a','e','i','o','u','y'];
	for(var i = 0; i < input_ar.length; i++){
		if (vowels.indexOf(input_ar[i].toLowerCase()) >= 0){
			vowelc ++;
		}
	}
	console.log("Number of vowels found: "+vowelc);
};
var inp = "wer s r d t yuu t sa xzx aq qdo p md a E U O TTY";
vowel_count(inp);
//3) Build a function reverse() which takes a string and returns all the characters in the opposite position, e.g. reverse("this is a string") // "gnirts a si siht"
function reverse(input){
	var result = [];
	for(var i = input.length - 1; i >= 0; i--){
		result.push(input[i]);
	}
	return result.join("");
}
var input = "Imadła lecą na MadaGaskar";
console.log(reverse(input));