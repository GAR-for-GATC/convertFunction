
var BN = require("bignumber.js");
BN.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4  });

function convertMass(unit1, unit2, inputNumber){			 
				
	
	var result = new BN(0);
	var output;
	switch(true){
					
		//lb -> g, oz, stone, ton
		case(unit1 == "lb" && unit2 == "g"):					
			//g = pounds*453.59237				
			//result = inputNumber * 453.59237;
			result = inputNumber.times(453.59237);
			break;
		case(unit1 == "lb" && unit2 == "oz"):					
			// oz = pounds*16 
			//result = inputNumber *16.0;
			result = inputNumber.times(16);
			break;					
		case(unit1 == "lb" && unit2 == "stone"):
			//stone = pound/14
			//result = inputNumber/14.0;
			result = inputNumber.div(14);
			break;
		case(unit1 == "lb" && unit2 == "ton"):					
			//1 Metric Ton =  Pounds/2 204.62262
			//result = inputNumber/2204.62262;
			result = inputNumber.div(2204.62262);
			break;
		
		//g -> lb, oz, stone, ton
		case(unit1 == "g" && unit2 == "lb"):					
			//pounds =  g/453.59237					
			//result = inputNumber/453.59237;
			result = inputNumber.div(453.59237);
			break;
		case(unit1 == "g" && unit2 == "oz"):					
			//oz = g*0.0352739619 
			//result = inputNumber*0.0352739619;
			result = inputNumber.times(0.0352739619);
			break;					
		case(unit1 == "g" && unit2 == "stone"):
			//stone =  (g/453.59237)/14 
			//result = (inputNumber/453.59237)/14.0;
			result = inputNumber.div(453.59237).div(14);
			break;
		case(unit1 == "g" && unit2 == "ton"):					
			//Metric Ton = (g/453.59237)/2204.62262
			//result = (inputNumber/453.59237)/2204.62262;
			result = inputNumber.div(453.59237).div(2204.62262);
			break;
		
		// oz -> g, lb, stone, ton
		case(unit1 == "oz" && unit2 == "g"):					
			// Gram = Ounce/0.0352739619 				
			//result = inputNumber/0.0352739619;
			result = inputNumber.div(0.0352739619);
			break;
		case(unit1 == "oz" && unit2 == "lb"):					
			//pounds = oz/16
			//result = inputNumber/16.0;
			result = inputNumber.div(16);
			break;					
		case(unit1 == "oz" && unit2 == "stone"):
			//stone = (oz/0.0352739619)/(14*453.59237)
			//result = (inputNumber/0.0352739619)/(14.0*453.59237);
			result = inputNumber.div(0.0352739619).div(14).times(453.59237);
			break;
		case(unit1 == "oz" && unit2 == "ton"):					
			//Metric Ton  = (oz/16 )/ 2204.62262
			//result = (inputNumber/16.0)/2204.62262;
			result = inputNumber.div(16).div(2204.62262);
			break;	
		
		//ton -> g, oz, stone, lb
		case(unit1 == "ton" && unit2 == "g"):					
			// g = Metric Ton * 157.473044 * 14 * 453.59237  				
			//result = inputNumber * 157.473044 * 14.0 * 453.59237;
			result = inputNumber.times(157.473044).times(14).times(453.59237);
			break;
		case(unit1 == "ton" && unit2 == "oz"):					
			//oz = (Metric Ton* 157.473044)*(14*453.59237)*0.0352739619 
			//result = (inputNumber * 157.473044)*(14.0*453.59237)*0.0352739619;
			result = inputNumber.times(157.473044).times(14).times(453.59237).times(0.0352739619);
			break;					
		case(unit1 == "ton" && unit2 == "stone"):
			//stone = Metric Ton*157.473044 
			result = inputNumber*157.473044;
			result = inputNumber.times(157.473044);
			break;
		case(unit1 == "ton" && unit2 == "lb"):					
			//pound = Metric Ton*157.473044 * 14 
			result = inputNumber * 157.473044 * 14.0;
			result = inputNumber.times(157.473044).times(14);
			break;
						
		//stone -> g, oz, lb, ton
		case(unit1 == "stone" && unit2 == "g"):					
			// g = stone * 14 * 453.59237 				
			//result = inputNumber * 14.0 * 453.59237;
			result = inputNumber.times(14).times(453.59237);
			break;
		case(unit1 == "stone" && unit2 == "oz"):					
			//oz = stone*(14*453.59237)*0.0352739619  
			//result = inputNumber *(14.0*453.59237)*0.0352739619;
			result = inputNumber.times(14).times(453.59237).times(0.0352739619);
			break;					
		case(unit1 == "stone" && unit2 == "lb"):
			//pound = stone*14 
			//result = inputNumber*14.0;
			result = inputNumber.times(14);
			break;
		case(unit1 == "stone" && unit2 == "ton"):					
			//1 Metric Ton =  Stones/157.473044
			//result = inputNumber/157.473044;
			result = inputNumber.div(157.473044);
			break;
			
		default:
			result = "something broke";
			break;
	}

	return result;				 
	
}

module.exports = convertMass;