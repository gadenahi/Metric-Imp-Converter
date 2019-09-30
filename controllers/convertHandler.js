/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) { 

    var result = [];
    
//     var ex1 = /(\d+)(\D+)/;
//     var ex2 = /(\d+\.\d+)(\D+)/;
//     var ex3 = /(\d+[\*/]\d+)(\D+)/;
//     var ex4 = /(\d+\.\d+[\*/]\d+)(\D+)/
//     var ex5 = /(\d+[\*/]\d+\.\d+)(\D+)/
//     var ex6 = /(\d+\.\d+[\*/]\d+\.\d+)(\D+)/
    
//     if (input.match(ex6)) {
//         result = eval(input.match(ex6)[1])
//         } else if (input.match(ex5)) {
//           result = eval(input.match(ex5)[1])
//         } else if (input.match(ex4)) {
//           result = eval(input.match(ex4)[1])
//         } else if (input.match(ex3)) {
//           result = eval(input.match(ex3)[1])
//         } else if (input.match(ex2)) {
//           result = eval(input.match(ex2)[1])
//         } else if (input.match(ex1)) {
//           result = eval(input.match(ex1)[1])
//         } else {
//           result = undefined
//         }
    
    // console.log(input)
    input = input.toLowerCase();
    if (input == "km" || input == "mi" || input == "lbs" || input == "kg" || input == "gal" || input == "l") {
      result = 1
    } else if (input.match(/\++|\-+/g)) {
      result = undefined
    } else {
    try {
      var input2 = input.replace(/[^\d\/\.\*]/g, "") 
      var Regex =  /\+{2,}|\-{2,}|\*{2,}|\/{2,}/g
      if (input2.match(Regex)) {
        result = undefined
      }
      else{
    result = eval(input2)
      }
    } catch(e) {
      result = undefined  // if try fails, return undefined
    }}

    // console.log(result)
    
    return result
  };
  
  this.getUnit = function(input) {
    var result;
//     var ex1 = /(\d+)(\D+)/;
//     var ex2 = /(\d+\.\d+)(\D+)/;
//     var ex3 = /(\d+[\*/]\d+)(\D+)/;
//     var ex4 = /(\d+\.\d+[\*/]\d+)(\D+)/
//     var ex5 = /(\d+[\*/]\d+\.\d+)(\D+)/
//     var ex6 = /(\d+\.\d+[\*/]\d+\.\d+)(\D+)/
    
//     if (input.match(ex6)) {
//         result = input.match(ex6)[2]
//         } else if (input.match(ex5)) {
//           result = input.match(ex5)[2]
//         } else if (input.match(ex4)) {
//           result = input.match(ex4)[2]
//         } else if (input.match(ex3)) {
//           result = input.match(ex3)[2]
//         } else if (input.match(ex2)) {
//           result = input.match(ex2)[2]
//         } else if (input.match(ex1)) {
//           result = input.match(ex1)[2]
//         } else {
//           result = undefined 
//         }   

    result = input.replace(/[^a-zA-Z]/g, "").toLowerCase()
    // console.log(result)
    
    if (result == "km" || result == "mi" || result == "lbs" || result == "kg" || result == "gal" || result == "l") {    
      // console.log(result)    
      return result;
    } else {
      result = undefined
      // console.log(result)
      return result
    }
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit) {
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;        
    }
    // console.log(result)  
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    // initNum = parseInt(initNum)
    switch(initUnit) {
      case 'km':
        result = initNum * miToKm
        break;
      case 'mi':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;        
    }    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var initstring
    var returnstring

    
    switch(initUnit) {
      case 'km':
        initstring = 'kilometers'
        returnstring = 'miles'
        break;
      case 'mi':
        initstring = 'miles'
        returnstring = 'kilometers'
        break;
      case 'lbs':
        initstring = 'pounds'
        returnstring = 'kilograms'
        break;
      case 'kg':
        initstring = 'kilograms'
        returnstring = 'pounds'
        break;
      case 'gal':
        initstring = 'gallons'
        returnstring = 'liters'
        break;
      case 'l':
        initstring = 'liters'
        returnstring = 'gallons'
        break;        
    }        
    
    // result = initNum +" "+ initUnit + " converts to " + returnNum + " " + returnUnit
        
    if (initNum == undefined & initUnit == undefined) {
      result = "invalid number and unit"
    } else if (initNum == undefined) {
      result = "invalid number"
    } else if (initUnit == undefined) {
      result = "invalid unit"      
    } else {
      result = initNum +" "+ initstring + " converts to " + returnNum.toFixed(5) + " " + returnstring
      // console.log(result)
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
