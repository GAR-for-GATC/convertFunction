

function unitCast(baseUnitA, baseUnitB){
	var unitCast;
	var out1;
	var out2;

	unitCast = ["sec", "Sec", "SEC", "secs", "Secs", "SECS", "second", "seconds"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "sec";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "sec";
		}
	}

	unitCast = ["Min", "min", "MIN", "Mins", "mins", "MINS", "minute", "minutes"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "min";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "min";
		}
	}

	unitCast = ["hr", "Hr", "HR", "hrs", "Hrs", "HRS", "hours", "hour"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "hr";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "hr";
		}
	}

	unitCast = ["day", "Day", "DAY", "days", "Days", "DAYS"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "day";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "day";
		}
	}

	unitCast = ["year", "Year", "YEAR", "years", "Years", "YEARS"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "year";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "year";
		}
	}
	
	unitCast = ["g", "G", "gram", " grams"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "g";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "g";
		}
	}

	unitCast = ["lb", "Lb", "LB", "pound", "pounds"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "lb";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "lb";
		}
	}

	unitCast = ["oz", "Oz", "OZ", "ounce", "ounces"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "oz";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "oz";
		}
	}

	unitCast = ["stone", "Stone", "stones", "stones"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "stone";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "stone";
		}
	}

	unitCast = ["ton", "Ton", "tons", "Tons"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "ton";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "ton";
		}
	}
	
	unitCast = ["m", "meters", "meter"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "m";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "m";
		}
	}

	unitCast = ["ft", "FT", "Ft", "feet", "foot"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "ft";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "ft";
		}
	}

	unitCast = ["in", "IN", "In", "inch", " inches"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "in";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "in";
		}
	}

	unitCast = ["mi", "MI", "Mi", "mile", "miles"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "mile";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "mile";
		}
	}

	unitCast = ["yard", "Yard", "yards", "Yards"];
	for( var i=0; i<unitCast.length; i++ ){
		if(unitCast[i] == baseUnitA){
			out1 = "yard";
		}
		if(unitCast[i] == baseUnitB){
			out2 = "yard";
		}
	}
	var output = [out1, out2];
	return output;
};

module.exports = unitCast;