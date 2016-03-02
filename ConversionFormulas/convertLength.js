

var BN = require("bignumber.js");
BN.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4  });



function convertLength(unit1, unit2, inputNumber){			 
				
	var result = new BN(0);
	var output;
	switch(true){
	
			
		// in -> ft, yard, m, mile	
		case(unit1 == "in" && unit2 == "ft"):					
			// ft = in/12				
			//result =inputNumber/12.0;
			result = inputNumber.div(12);
			break;
		case(unit1 == "in" && unit2 == "yard"):					
			// yard = in /36
			//result = inputNumber / 36.0;
			result = inputNumber.div(36);
			break;					
		case(unit1 == "in" && unit2 == "m"):
			// 1m = in/39.370
			//result = inputNumber/39.370;
			result = inputNumber.div(39.370);
			break;
		case(unit1 == "in" && unit2 == "mile"):					
			// mile =  in/63360
			//result = inputNumber/63360.0;
			result = inputNumber.div(63360.0);
			
			break;
		
				
		// ft -> in, yard, m, mi 
		case(unit1 == "ft" && unit2 == "in"):					
			// in = ft*12				
			//result =inputNumber*12.0;
			result = inputNumber.times(12);
			break;
		case(unit1 == "ft" && unit2 == "yard"):					
			// yard = ft/3
			//result = inputNumber/3;
			result = inputNumber.div(3);
			break;					
		case(unit1 == "ft" && unit2 == "m"):
			// m = (39.370/12) * ft
			//result = inputNumber*(12/39.370);
			result = inputNumber.times(12).div(39.370);
			break;
		case(unit1 == "ft" && unit2 == "mile"):					
			// mile =  in/(63360/12)
			//result = inputNumber*(12/63360);
			result = inputNumber.times(12).div(63360);
			break;
		
			
		// yard -> in, ft, m, mile
		case(unit1 == "yard" && unit2 == "in"):					
			// in = yard * 36				
			//result = inputNumber*36.0;
			result = inputNumber.times(36);
			break;
		case(unit1 == "yard" && unit2 == "ft"):					
			// ft = yard * 3
			//result = inputNumber*3;
			result = inputNumber.times(3);
			break;					
		case(unit1 == "yard" && unit2 == "m"):
			// m = (yard*36)/ 39.370
			//result = (inputNumber*36)/ 39.370;
			result = inputNumber.times(36).div(39.370);
			break;
		case(unit1 == "yard" && unit2 == "mile"):					
			// mile = (yard*36)/(63360/12)
			//result = (inputNumber*36)/63360;
			result = inputNumber.times(36).div(63360);
			break;
		
				
		// m -> in, ft, yard, mile
		case(unit1 == "m" && unit2 == "in"):					
			// in = m*39.370			
			//result =inputNumber*39.370;
			result = inputNumber.times(39.370);
			break;
		case(unit1 == "m" && unit2 == "ft"):					
			// ft = m*(39.370/12) 
			//result = inputNumber*(39.370/12.0);
			result = inputNumber.times(39.370).div(12);
			break;					
		case(unit1 == "m" && unit2 == "yard"):
			// yard = (m*39.370)/36 
			//result = (inputNumber*39.370)/36.0;
			result = inputNumber.times(39.370).div(36);
			break;
		case(unit1 == "m" && unit2 == "mile"):					
			// mile = (m*39.370)/63360
			//result = (inputNumber*39.370)/63360.0;
			result = inputNumber.times(39.370).div(63360);
			break;
			
				
		// mile -> in, ft, yard, m
		case(unit1 == "mile" && unit2 == "in"):					
			// in = mile*63360			
			//result =inputNumber*63360.0;
			result = inputNumber.times(63360);
			break;
		case(unit1 == "mile" && unit2 == "ft"):					
			// ft = mile * (63360/12)
			//result = inputNumber* (63360.0/12.0);
			result = inputNumber.times(63360).div(12);
			break;					
		case(unit1 == "mile" && unit2 == "yard"):
			// yard = (mile * 63360)/36
			//result = (inputNumber* 63360.0)/36.0;
			result = inputNumber.times(63360).div(36);
			break;
		case(unit1 == "mile" && unit2 == "m"):					
			// m = (mile * 63360)/39.370
			//result = (inputNumber* 63360.0)/39.370;
			result = inputNumber.times(63360).div(39.370);
			break;
			
		default:
			result = "something broke";
			break;
	}
				 
	 
	return result;
}

module.exports = convertLength;