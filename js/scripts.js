var romanNumerals = function(number) {
 var number = number
 var numbers = Math.floor(number).toString().split("").map(Number);
 var numberSize = numbers.length();
 var I = 1;
 var V = 5;
 var X = 10;
 var L = 50;
 var C = 100;
 var D = 500;
 var M = 1000;
 var value = "";

 numbers.forEach(function(number, i) {
   for(var b=0; b<number; b++) {
     if( i===0 && i===(numberSize - 1) && number < 3) {
       value = value + "M";
     }
   }
  //  for(var c=0; c<number; c++) {
  //    if( i===0 && i===(numberSize - 1) && number < 4) {
  //      value = value + "I";
  //    }
  //  }

 });

 return value;

};
