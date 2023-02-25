//comparisons 
/* in summary
> greater than,
 < less than,
 != not equal to,
 >= greater than or equal to, 
<= less than or equal to,
 == this is for equal to,
 = this for assignment,*/
 //string comparison
 /*for instance alert('Z' > 'A'); true this gives true because Z is greater.  compares number after number alert("Boo" > "Boe"); true
 
 */

 
let a = 0;
alert( Boolean(a) ); // false, 0 is false

let b = "0";
alert( Boolean(b) ); // true, something is in so its true 

alert(a == b); // true, this is true because "0" is converted to a number so its true

//Note 

alert( 0 == false ); // true
//The same thing happens with an empty string:

alert( '' == false ); // true
//A strict equality operator === checks the equality without type conversion.
alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false
//notice that
alert( null == undefined ); // true


alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false this is because the null is been set only equal undefined
alert( null >= 0 ); // (3) true the comparison test converts null to a number which is 0 then compares it y we have true here

5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //false
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" // false
//When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check ===).


//CONDITIONAL BRANCHING IF 
 //note that you can't have something like if (0)or null or undefined or NaN.
 let year = 2005;
if ( year = 2001) {
   // ...
}

//with multiple conditions we use else if
let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 < 2015) {
  alert( 'Too early...' );
} else if (year1 > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
//...
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
// this is a shorter way. checks the condition then if true value1 is return else value2.
let result = condition ? value1 : value2;

//task
let task = prompt("what is the official name of JavaScript?", " ");

if (task === "ECMAScript") {
    alert("Right!");

} else{
    alert("You don't know? ECMAScript!");
}

//task
 let numer = +prompt("get a number");
 if (numer > 0) {
    alert(1);
 } else if (numer < 0) {
    alert(-1);
 } else {
    alert(0);
 }

 //task
 let resu = (a + b < 4) ? 'Below':'Over';
 alert(resu);
 //task
 let messa = (login == 'Employee')? 'Hello':
 (login == 'Director')? 'Greetings':
 (login == '') ?
 'No login':
 '';
 