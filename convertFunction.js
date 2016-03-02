
var BN = require("bignumber.js");
BN.config({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4  });
var formulaList = require("./ConversionFormulas/index.js");
var unitList = require("./Units/unitList.js");


//console.log(unitList);

//this function parses 4'10ft to some number of inches
function parseFt(ftString){
	var ftGroup = ftString.split("'");

	if (ftGroup.length == 2){
		var a = new BN(parseInt(ftGroup[0]));
		var b = new BN(parseInt(ftGroup[1]));
		a = formulaList.convertLength("ft", "in", a );
		return  a.plus(b);
	}
	else{
		return "something went wrong ;-;";
	}
}


module.exports = { 
	convert: function (inputString){
		var units = unitList;
		var unit1;
		var unit2;
		var type;		
		
		//w for weight, t for temp, l for length, ti for time			
		
		
		if (/help/.test(inputString)){
			return "Type \"!convert 5unit1 to unit2\" or \"5 unit1 to unit2\".  You can substitue \"to\" with \"->\".  You can also type \"!convert about\" for information, and \"!convert units\" for avaliable units.  ex: !convert 6'1 ft to cm";
		}		
		if (/about/.test(inputString)){
			return "This function was written by Muggy8 and Catie and can convert weight, length, time and temperature.\n     All units are rounded to the 10th decimal place and rounded up when the lowest decimal is >= 0.5.  All calculations use the JS BigNumber library.  More conversions will be added in the future.  ";
		}		
		if (/units/.test(inputString)){
			return ["The accepted units at the time are:  \n     SI units:(" +
				units.SIPrefix + ") \n     Weight Units:(" + units.weightUnits + ") \n     Length Units:(" + units.lengthUnits +
				") \n     Time Units:(" + units.timeUnits + ") \n     Temperature Units:(" + units.tempUnits + ")", ""];	
		}
		var groups = inputString.split(" ")
				
		//changes "5 in to ft" to "5in to ft"
		if (groups.length == 4 && (groups[2] == "to" || groups[2]=="->")){
			inputString = inputString.replace(" ", "")
			groups = inputString.split(" ");
		}				
	   
		if (groups.length == 3 && (groups[1] == "to" || groups[1]=="->")){
			
			var flagTypeA;
			var flagTypeB;
			var convertValue;
			var scaleA, scaleB;
			var baseUnitA, baseUnitB;
			
						
			
			for (var i = 0; i < units.SIPrefix.length; i++){
				
				for (var j = 0; j < units.weightUnits.length; j++){
					//alert(units.SIPrefix[i] + ", " + units.weightUnits[j] /*+ ", " + i + ", " + j*/);
					//If in the "5kg" group look for the SIUnit + unitType (eg: kg, cm, etc) 
					//	and if found, chop off the SIUnit + unitType from that string and if we 
					//	are left with no letters in the string then the correct unit is found.
					
					if (groups[0].indexOf(units.SIPrefix[i]+ units.weightUnits[j]) > 0 
							&& !groups[0].replace(units.SIPrefix[i]+units.weightUnits[j], "").match(/[a-z]/i)){
							
						convertValue = groups[0].replace(units.SIPrefix[i]+units.weightUnits[j], "");
						unit1 = units.SIPrefix[i]+units.weightUnits[j];
						flagTypeA = 'w';
						scaleA = units.SIScale[i];
						baseUnitA = units.weightUnits[j];
					}
					
					
					
					if (groups[2]==(units.SIPrefix[i]+units.weightUnits[j])){
						unit2 = units.SIPrefix[i]+units.weightUnits[j];
						flagTypeB = 'w';
						scaleB = units.SIScale[i];
						baseUnitB = units.weightUnits[j];
					}
					//alert(flagA + ", " + flagB);
					if (flagTypeA == flagTypeB && flagTypeA == "w"){
						type = 'w';
						i = units.SIPrefix.length;
						j = units.weightUnits.length;
					}
				}
			   
				for (var j = 0; j < units.lengthUnits.length; j++){
					//alert("unit: " + units.SIPrefix[i]+units.lengthUnits[j] + ". letter in " + groups[0].replace(units.SIPrefix[i]+units.lengthUnits[j], "") + ": " + groups[0].match(/[a-z]/i));
					if (groups[0].indexOf(units.SIPrefix[i]+units.lengthUnits[j]) > 0 
							&& !groups[0].replace(units.SIPrefix[i]+units.lengthUnits[j], "").match(/[a-z]/i)){
							
						convertValue = groups[0].replace(units.SIPrefix[i]+units.lengthUnits[j], "");
						unit1 = units.SIPrefix[i]+units.lengthUnits[j];
						flagTypeA = 'l';
						scaleA = units.SIScale[i];
						baseUnitA = units.lengthUnits[j];
					}
					if (groups[2]==(units.SIPrefix[i]+units.lengthUnits[j])){
						unit2 = units.SIPrefix[i]+units.lengthUnits[j];
						flagTypeB = 'l';
						scaleB = units.SIScale[i];
						baseUnitB = units.lengthUnits[j];
					}
					if (flagTypeA == flagTypeB && flagTypeA == "l"){
						type = 'l';
						i = units.SIPrefix.length;
						j = units.lengthUnits.length;
					}
				}
			   
				for (var j = 0; j < units.timeUnits.length; j++){
					if (groups[0].indexOf(units.SIPrefix[i]+units.timeUnits[j]) > 0 
							&& !groups[0].replace(units.SIPrefix[i]+units.timeUnits[j], "").match(/[a-z]/i)){
							
						convertValue = groups[0].replace(units.SIPrefix[i]+units.timeUnits[j], "");
						unit1 = units.SIPrefix[i]+units.timeUnits[j];
						flagTypeA = "ti";
						scaleA = units.SIScale[i];
						baseUnitA = units.timeUnits[j];
					}
					if (groups[2]==(units.SIPrefix[i]+units.timeUnits[j])){
						unit2 = units.SIPrefix[i]+units.timeUnits[j];
						flagTypeB = "ti";
						scaleB = units.SIScale[i];
						baseUnitB = units.timeUnits[j];
					}
					if (flagTypeA == flagTypeB && flagTypeA == "ti"){
						type = 'ti';
						i = units.SIPrefix.length;
						j = units.timeUnits.length;
					}
				}
			   
				for (var j = 0; j < units.tempUnits.length; j++){
					if (groups[0].indexOf(units.SIPrefix[i]+units.tempUnits[j]) > 0 
							&& !groups[0].replace(units.SIPrefix[i]+units.tempUnits[j], "").match(/[a-z]/i)){
							
						convertValue = groups[0].replace(units.SIPrefix[i]+units.tempUnits[j], "");
						unit1 = units.SIPrefix[i]+units.tempUnits[j];
						flagTypeA = 't';
						scaleA = units.SIScale[i];
						baseUnitA = units.tempUnits[j];
					}
					if (groups[2]==(units.SIPrefix[i]+units.tempUnits[j])){
						unit2 = units.SIPrefix[i]+units.tempUnits[j];
						flagTypeB = 't';
						scaleB = units.SIScale[i];
						baseUnitB = units.tempUnits[j];
					}
					if (flagTypeA == flagTypeB && flagTypeA == "t"){
						type = 't';
						i = units.SIPrefix.length;
						j = units.tempUnits.length;
					}
				}
			}
			try{
				baseUnitA = baseUnitA.toLowerCase();
				baseUnitB = baseUnitB.toLowerCase();
			}
			catch(err){
				return ["You did not enter an appropriate unit.  These units are accepted units:  \n SI units:(" +
				units.SIPrefix + ") \n Weight Units:(" + units.weightUnits + ") \n Length Units:(" + units.lengthUnits +
				") \n Time Units:(" + units.timeUnits + ") \n Temperature Units:(" + units.tempUnits + ")", ""];
			}
			if (flagTypeA != flagTypeB){
				return ["Sorry your units do not match. please try inputing units" + 
					" of the same class. Cannot convert " + unit1 + 
					" to " + unit2 + " " + type, ""];
			}
			else{
				
				//Changes 
				if (baseUnitA == "ft"){
					//var purple = new BN(convertValue);
                    convertValue = parseFt(convertValue);
                    baseUnitA = "in";
                }
				console.log(baseUnitA);
				var stuffHere = formulaList.unitCast(baseUnitA, baseUnitB);
				if(stuffHere[0]){
					
					baseUnitA = stuffHere[0];
					console.log(baseUnitA);
				}
				if(stuffHere[1]){
					
					baseUnitB = stuffHere[1];
				}
				
				
				
				convertValue = parseFloat(convertValue); //changes the string to an int.
				
				//convert larger SI values back to basic values
				///var purple = convertSI(convertValue, scaleA, baseUnitA, 0);
				//document.write(purple);
				//document.write("<br>");
				//if w convert weight 
				
				////var purple = convertValue;
				var purple = new BN(convertValue);
				
				
				
				if(type == "w"){
					//if the input type is SI but the base isnt in "g" or "m"
					if(baseUnitA == "g" && unit1 != "g"){
						purple = formulaList.convertSI(purple, scaleA, baseUnitA, 0);
					}
					
					//if both units are SI units, then don't convert them with 
					//	the convertMass formula.
					if(!(baseUnitB == "g" && baseUnitA =="g")){
						purple = formulaList.convertMass(baseUnitA, baseUnitB, purple);
					}						
					
					//if the output type is in SI units but is not in the base unit "g"
					if(baseUnitB == "g" && unit2 != "g"){
						purple = formulaList.convertSI(purple, scaleB, baseUnitB, 1);
					}
					
				}
				if(type == "l"){
					if(baseUnitA == "m" && unit1 != "m"){
						purple = formulaList.convertSI(purple, scaleA, baseUnitA, 0);
					}			
					//if a user using the function wants to find a height conversion, this is 1.  else 0.
					var heightTest = 	(baseUnitA == "in" && baseUnitB == "m") || 
										(baseUnitA == "m" && baseUnitB == "ft") ||										
										(baseUnitA == "m" && baseUnitB == "in");
										
										
					if(!(baseUnitB == "m" && baseUnitA == "m") && (heightTest == 0)){
						//console.log("big cocks" + baseUnitA + " " + baseUnitB + " " + purple);
						purple = formulaList.convertLength(baseUnitA, baseUnitB, purple);
					}
					else if(heightTest == 1){
						
						//output feet as feet and inches.
						if(baseUnitA == "m" && baseUnitB == "ft"){
							purple = formulaList.convertLength(baseUnitA, baseUnitB, purple);
							var decimals = purple.modulo(1);
							//console.log(decimals);
							var myint = purple.floor();
							//convert feet to in
							decimals = formulaList.convertLength("ft", "in", decimals);
							var footoutput = [purple + " ft, or " + myint + "ft " + decimals + "in", ""];
							return footoutput;							
						}
						else{
							purple = formulaList.convertLength(baseUnitA, baseUnitB, purple);
						}
						
					}
					
					if(baseUnitB == "m" && unit2 != "m"){
						purple = formulaList.convertSI(purple, scaleB, baseUnitB, 1);
					}
					
					//if units are output in feet, give the decimals for feet and also print the 
					//inches too.
				}
				if(type == "ti"){
					purple = formulaList.convertTime(baseUnitA, baseUnitB, purple);
				}
				if(type == "t"){
					purple = formulaList.convertTemp(baseUnitA, baseUnitB, purple);
				}
				
				//return [convertValue, unit1, scaleA, baseUnitA, unit2, scaleB, baseUnitB, type];
				console.log([convertValue, unit1, scaleA, baseUnitA, unit2, scaleB, baseUnitB, type]);
				var finalOutput = [purple, unit2];
				
				return finalOutput;
				
			}
		   
		}
	   
		else {
			return ["Your format is incorrect. The correct format is: !convert <number> <unit> to/-> <unit> (example: !convert 5'11ft to cm)", ""];
		}
	   
		return ["something went wrong somewhere... D:", ""];
	}
	
};

