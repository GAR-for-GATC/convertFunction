

//convertValue is the value to be converted,
//	scale is an SI value thing.  if baseUnit is "g", but you'readonly
//		converting to or from "kg", then this should be 1000.
//	baseUnit is the base SI unit.  it should be "g" or "m" or some base
//		SI unit where there is no SI prefix in front of that letter.
//	if updown is 0, then the number is converted down to the base 
//		value.  ex:  you put in 10kg, you get 10,000g.  Conversely
//		if it's 1, then if you put in 100g and you want kg, you get
//		.1kg.
function convertSI(convertValue, scale, baseUnit, updown){
	//output for scale needs to be 1.
	//If scaleA is not 1, then the units need to be SI corrected.
	SIunits = ["g", "m"]
	//the line "SIunits.indexOf(baseUnit) > -1" returns true if the 
	//	 thing is in the array.
	if(scale != 1 && (SIunits.indexOf(baseUnit) > -1) && updown == 0 ){
		//convert the units to base units.  ex: kg -> g, um -> m
		//can also be used depending on the input to convert up too
		//convertValue = convertValue * scale;
		convertValue = convertValue.times(scale);		
	}
	else if(scale != 1 && (SIunits.indexOf(baseUnit) > -1) && updown == 1 ){
		//convert the units to base units.  ex: kg -> g, um -> m
		//can also be used depending on the input to convert up too
		//convertValue = convertValue / scale;
		convertValue = convertValue.div(scale);
	}
	
	return convertValue;			
}


module.exports = convertSI;