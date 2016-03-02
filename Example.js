

var Convert = require('./convertFunction.js');

try{
	//example inputs:  15 lb to tons, 12c to f, 1500um to ft
	var input = "5'6ft to cm";
	
	var output = Convert.convert(input);
	console.log(output);
}				
catch(e){	
	console.log( '\tname: ' + e.name + ' message: ' + e.message + ' at: ' + 
						e.at + ' text: ' + e.text + "\n\n"+ e.stack);
}