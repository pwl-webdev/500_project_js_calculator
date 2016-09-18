$(document).ready(function(){
	var input = [];
	var dotAlready = false;

	$( "#1" ).click(function() {
	  console.log("1");
	  input.push(1);
	  refresh_display(input);
	});
	$( "#2" ).click(function() {
	  console.log("2");
	  input.push(2);
	  refresh_display(input);
	});
	$( "#3" ).click(function() {
	  console.log("3");
	  input.push(3);
	  refresh_display(input);
	});
	$( "#4" ).click(function() {
	  console.log("4");
	  input.push(4);
	  refresh_display(input);
	});
	$( "#5" ).click(function() {
	  console.log("5");
	  input.push(5);
	  refresh_display(input);
	});
	$( "#6" ).click(function() {
	  console.log("6");
	  input.push(6);
	  refresh_display(input);
	});
	$( "#7" ).click(function() {
	  console.log("7");
	  input.push(7);
	  refresh_display(input);
	});
	$( "#8" ).click(function() {
	  console.log("8");
	  input.push(8);
	  refresh_display(input);
	});
	$( "#9" ).click(function() {
	  console.log("9");
	  input.push(9);
	  refresh_display(input);
	});
	$( "#0" ).click(function() {
		if(input.length == 0 ||  ["1","2","3","4","5","6","7","8","9","+","-","x","/","."].indexOf(input[input.length-1].toString()) > -1  || dotAlready){
	  		console.log("0");
	  		input.push(0);
	  		refresh_display(input);
		}
	});
	$( "#plus" ).click(function() {
	  console.log("plus");
	  input.push("+");
	  refresh_display(input);
	  dotAlready = false;
	});
	$( "#minus" ).click(function() {
	  console.log("minus");
	  input.push("-");
	  refresh_display(input);
	  dotAlready = false;
	});
	$( "#multiply" ).click(function() {
	  console.log("multiply");
	  input.push("x");
	  refresh_display(input);
	  dotAlready = false;
	});
	$( "#divide" ).click(function() {
	  console.log("divide");
	  input.push("/");
	  refresh_display(input);
	  dotAlready = false;
	});
	$( "#period" ).click(function() {
		console.log("!dot already "+!dotAlready);
		console.log("index of "+["1","2","3","4","5","6","7","8","9","0"].indexOf(input[input.length-1].toString()));
		if(!dotAlready && ["1","2","3","4","5","6","7","8","9","0"].indexOf(input[input.length-1].toString()) > -1 ){
	  		console.log("period");
	  		input.push(".");
	  		refresh_display(input);
	  		dotAlready = true;
		}
	});
	$( "#c" ).click(function() {
	  console.log("c");
	  input = [];
	  refresh_display(input);
	  dotAlready = false;
	});
	$( "#equals" ).click(function() {
	  console.log("equals");
	  input.push("=");
	  dotAlready = false;
	  //refresh_display(input);
	  var result = calculate(input);
	  input = [];
	  input = result;
	  refresh_display(input);
	});
});

function refresh_display(input){
	document.getElementById("display").textContent = input.join("");
}
function calculate(input){
	var subresult = [];
	var inputC = [];
	var result = [];
	var lastNumber = null;
	for(var j = 0; j < input.length; j++){
		if(!isNaN(input[j])){
			if(lastNumber == null){
				lastNumber = input[j];
			}else{
				lastNumber = lastNumber.toString()+input[j].toString();
			}
		} else if (input[j] == "."){
			console.log("j "+j+" input[j] "+input[j]);
			lastNumber = lastNumber.toString()+input[j].toString()+input[j+1].toString();
			j++;
		}else{
			if(lastNumber != null){
				inputC.push(parseFloat(lastNumber));
				lastNumber = null;
			}
			inputC.push(input[j]);
		}
	}
	console.log("inputC "+ inputC);
	for(var i = 0; i < inputC.length; i++){
		if(inputC[i] == 'x'){
			subresult[subresult.length-1] = subresult[subresult.length-1]*inputC[i+1];
			i++;
		} else if(inputC[i] == '/'){
			subresult[subresult.length-1] = subresult[subresult.length-1]/inputC[i+1];
			i++;			
		} else{
			subresult.push(inputC[i]);
		}
	}
	console.log("subresult "+subresult);
	for(var i = 0; i < subresult.length; i++){
		if(subresult[i] == "+"){
			result[result.length-1] = result[result.length-1]+subresult[i+1];
			i++;
		} else if(subresult[i] == '-'){
			result[result.length-1] = result[result.length-1]-subresult[i+1];
			i++;
		}else if (subresult[i] != '='){
			result.push(subresult[i]);
		}
	}
	console.log("result "+result);
	return result;
}