const readline = require('readline');
const { callbackify } = require('util');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});



reader.question("What would you like to calculate?", function (input) {
	tokens = input.split(' ');
	console.log("tokens,", tokens)
	mathSymbol = tokens[1];
	num1 = Number(tokens[0]);
	num2 = Number(tokens[2]);


	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol == "+") {

		console.log("in")
		console.log(num1 + num2);
	}
	else if (mathSymbol == "-") {
		console.log(num1 - num2)
	}
	else if (mathSymbol == "*") {
		console.log("in")
		console.log(num1 * num2);
	}

	// This line closes the connection to the command line interface.
	reader.close()

});




