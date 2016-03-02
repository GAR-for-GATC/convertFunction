
var BN = require("bignumber.js");
BN.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4  });


function convertTemp(unit1, unit2, inputNumber){			 
				
	
	var result = new BN(0);
	var output;
	switch(true){
		//
		case(unit1 == "c" && unit2 == "f"):					
			// T(°F) = T(°C) × 9/5 + 32					
			//result =(inputNumber*(9.0/5.0)) + 32.0;
			result = inputNumber.times(9.0).div(5.0);
			result = result.plus(32);
			break;
		case(unit1 == "c" && unit2 == "k"):					
			// T(K) = T(°C) + 273.15
			//result = inputNumber + 273.15;
			result = inputNumber.plus(273.15);
			break;
		//=====================================
		case(unit1 == "f" && unit2 == "c"):
			// C = (F-32)* 5/9
			//result = (inputNumber-32.0) * (5.0/9.0);
			result = inputNumber.minus(32);
			result = result.times(5).div(9);
			break;
		case(unit1 == "f" && unit2 == "k"):
			
			// T(K) = (T(°F) + 459.67)× 5/9
			//result = (inputNumber+459.57) * (5.0/9.0);
			result = inputNumber.plus(459.57);
			result = result.times(5).div(9);
			break;
		//=====================================
		case(unit1 == "k" && unit2 == "c"):
			// C = K - 273.15
			//result = inputNumber - 273.15;
			result = inputNumber.minus(273.15);
			break;
		case(unit1 == "k" && unit2 == "f"):
			// F = (K * 9/5) - 459.67
			//result = (inputNumber*(9.0/5.0)) - 459.67;
			result = inputNumber.times(9).div(5);
			result = result.minus(459.67);
			break;
		default:
			result = "something broke";
			break;
	}
			 
	
	return result;
	
}

module.exports = convertTemp;