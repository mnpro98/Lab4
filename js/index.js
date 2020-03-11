var a;
var b;
var result = "";

var operation_queue = [];
var display_queue = [];

var state = 0; //0 - input, 1 - multiplication, 2 - division

document.getElementById('logInformation').value = "";
document.getElementById('resultValue').value = "";

document.getElementById("addButton").addEventListener("click", addition);
document.getElementById("substractButton").addEventListener("click", substraction);
document.getElementById("multiplicationButton").addEventListener("click", multiplication);
document.getElementById("divisionButton").addEventListener("click", division);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("equal").addEventListener("click", equal);

function addition(event){
	if(document.getElementById('input').value != ""){
		switch(state){
			case 0:
				a = Number(document.getElementById('input').value);
				display_queue.push(a);
				display_queue.push('+');
				break;
			case 1:
				b = document.getElementById('input').value;
				display_queue.push(b);
				display_queue.push('+');
				a = a * b;
				break;
			case 2:
				b = document.getElementById('input').value;
				display_queue.push(b);
				display_queue.push('+');
				a = a / b;
				break;
		}
		operation_queue.push(a);
		operation_queue.push('+');
		document.getElementById('input').value = "";
		state = 0;
		console.log(operation_queue);
	}
}

function substraction(event){
	if(document.getElementById('input').value != ""){
		switch(state){
			case 0:
				a = Number(document.getElementById('input').value);
				display_queue.push(a);
				display_queue.push('-');
				break;
			case 1:
				b = document.getElementById('input').value;
				display_queue.push(b);
				display_queue.push('-');
				a = a * b;
				break;
			case 2:
				b = document.getElementById('input').value;
				display_queue.push(b);
				display_queue.push('-');
				a = a / b;
				break;
		}
		operation_queue.push(a);
		operation_queue.push('-');
		document.getElementById('input').value = "";
		state = 0;
		console.log(operation_queue);
	}
}

function multiplication(event){
	if(document.getElementById('input').value != ""){
		switch(state){
			case 0:
				a = Number(document.getElementById('input').value);
				display_queue.push(a);
				display_queue.push('*');
				document.getElementById('input').value = "";
				break;
			case 1:
				b = Number(document.getElementById('input').value);
				a = a * b;
				display_queue.push(b);
				display_queue.push('*');
				document.getElementById('input').value = "";
				break;
			case 2:
				b = Number(document.getElementById('input').value);
				a = a / b;
				display_queue.push(b);
				display_queue.push('*');
				document.getElementById('input').value = "";
				break;
		}
		state = 1;
		console.log(operation_queue);
	}
}

function division(event){
	if(document.getElementById('input').value != ""){
		switch(state){
			case 0:
				a = Number(document.getElementById('input').value);
				display_queue.push(a);
				display_queue.push('/');
				document.getElementById('input').value = "";
				break;
			case 1:
				b = Number(document.getElementById('input').value);
				a = a * b;
				display_queue.push(b);
				display_queue.push('/');
				document.getElementById('input').value = "";
				break;
			case 2:
				b = Number(document.getElementById('input').value);
				a = a / b;
				display_queue.push(b);
				display_queue.push('/');
				document.getElementById('input').value = "";
				break;
		}
		state = 2;
		console.log(operation_queue);
	}
}

function reset(event){
	clearAll();
	document.getElementById('resultValue').value = "";
}

function equal(event){
	if(document.getElementById('input').value != ""){
		b = Number(document.getElementById('input').value);
		display_queue.push(b);
		switch(state){
			case 0:
				operation_queue.push(b);
				break;
			case 1:
				a = a * b;
				operation_queue.push(a);
				break;
			case 2:
				a = a / b;
				operation_queue.push(a);
				break;
		}

		display_queue.push('=');

		for (i = 0; i < operation_queue.length; i++){
			switch(operation_queue[i]){
				case '+':
					a = a + Number(operation_queue[i + 1]);
					i++;
					break;
				case '-':
					a = a - Number(operation_queue[i + 1]);
					i++;
					break;
				default:
					a = Number(operation_queue[i]);
					break;
			}
		}

		display_queue.push(a);
		document.getElementById('resultValue').value = a;
		/*
		b = document.getElementById('input').value;
		display_queue.push(b);
		display_queue.push("=");
		*/
		console.log(operation_queue);
		displayQueue();
		clearAll();
	}
}

function displayQueue(){
	result = "";
	for (i = 0; i < display_queue.length; i++) { 
    	result = result.concat(display_queue[i]);
	}
	//console.log(result);
	document.getElementById('logInformation').value = document.getElementById('logInformation').value.concat(result + '\n');
}

function clearAll(){
	a = 0;
	b = 0;
	operation_queue = [];
	display_queue = [];
	state = 0;
	document.getElementById('input').value = "";
}