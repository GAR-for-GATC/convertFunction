
var BN = require("bignumber.js");
BN.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4  });


function convertTime(unit1, unit2, inputNumber){          
   
	//var result;
	var result = new BN(0);
	var output;
	switch(true){
		
		case(unit1 == "sec" && unit2 == "min"):              
			//result = inputNumber/60;
			result = inputNumber.div(60);
			break;
		case(unit1 == "min" && unit2 == "hr"):                
			//result = inputNumber/60 ;
			result = inputNumber.div(60);
			break;
		//=====================================
		case(unit1 == "hr" && unit2 == "day"):
			//result = inputNumber/24;
			result = inputNumber.div(24);
			break;
		case(unit1 == "day" && unit2 == "year"):
		   //result = inputNumber/365;
		   result = inputNumber.div(365);
			break;
		//=====================================
		case(unit1 == "year" && unit2 == "day"):
			//result = inputNumber*365;
			result = inputNumber.times(365);
			break;
		case(unit1 == "day" && unit2 == "hr"):
			//result = inputNumber*24;
			result = inputNumber.times(24);
			break;
		case(unit1 == "hr" && unit2 == "min"):
			//result = inputNumber*60;
			result = inputNumber.times(60);
			break;
		case(unit1 == "min" && unit2 == "sec"):
			//result = inputNumber*60;
			result = inputNumber.times(60);
			break;
		case(unit1 == "sec" && unit2 == "hr"):
			result = convertTime("min", "hr", convertTime("sec", "min", inputNumber) );
			break;
		case(unit1 == "sec" && unit2 == "day"):
			result = convertTime("hr", "day", convertTime("sec", "hr", inputNumber) );
			break;
		case(unit1 == "sec" && unit2 == "year"):
			result = convertTime("day", "year", convertTime("sec", "day", inputNumber) );
			break;
		case(unit1 == "min" && unit2 == "day"):
			result = convertTime("hr", "day", convertTime("min", "hr", inputNumber) );
			break;
		case(unit1 == "min" && unit2 == "year"):
			result = convertTime("day", "year", convertTime("min", "day", inputNumber) );
			break;
		case(unit1 == "hr" && unit2 == "year"):
			result = convertTime("day", "year", convertTime("hr", "day", inputNumber) );
			break;
		case(unit1 == "year" && unit2 == "hr"):
			result = convertTime("day", "hr", convertTime("year", "day", inputNumber) );
			break;
		case(unit1 == "year" && unit2 == "min"):
			result = convertTime("hr", "min", convertTime("year", "hr", inputNumber) );
			break;
		case(unit1 == "year" && unit2 == "sec"):
			result = convertTime("min", "sec", convertTime("year", "min", inputNumber) );
			break;
		case(unit1 == "day" && unit2 == "min"):
			result = convertTime("hr", "min", convertTime("day", "hr", inputNumber) );
			break;
		case(unit1 == "day" && unit2 == "sec"):
			result = convertTime("min", "sec", convertTime("day", "min", inputNumber) );
			break;
		case(unit1 == "hr" && unit2 == "sec"):
			result = convertTime("min", "sec", convertTime("hr", "min", inputNumber) );
			break;
		   
		default:
			result = "Time convert function didnt work.";
			break;
	}
	       
	 
	return result;
}

module.exports = convertTime;