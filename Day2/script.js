//conversions
/*to convert some value to a string  for example we can convert a boolean to string*/
let main = true; 
main = String(main);
 alert(typeof main);

 /*then we have to covert a string to a number. But a string which can't be converted into a number l return a NaN for the typeof*/
let vinic = "123";
vinic = Number(vinic);
alert(vinic);//if you alert the type of you'll see that it's type is Number;

/*then we have the conversion of the boolean
undefined	NaN
null	0
true / false	1 / 0 in summary undifined-Nan,null-0,""-false and anything else is true*/
alert(Boolean(1)); //it gives a true and a 0 gives a false


//operators, maths
/*addition +
multiplication *
division /
exponential **
remainder %
*/
//string concatination
/*only the + supports concatenation. subtraction does not like 
let num = 6 - "2" answer is 4. so the string is converted to a number same with division.*/
//but this works as Number(); alert(+"3" + +"4"); its output is 7;


