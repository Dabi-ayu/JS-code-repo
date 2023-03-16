//Data types

//primitives
let str = "Hello";

alert( str.toUpperCase() ); // HELLO

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

//

//numbers

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

let mcs = 1e-6; // five zeroes to the left from 1 microseconds

//so javascript uses hexadecimals for colors oxff = 255

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides


let num = 255;

alert(num.toString(16))//ff
alert(num.toString(2))//111111111

//Roundings lets see  howmany functions are there for rounding up
/*
- Math.floor 
this is for round down 2.1 becomes 2 and -1.1  becomes -2

- Math.ceil 
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

-Math.round : this is proper round up 3.1 is 3 and 3.6 is 4 and 3.5 is 4 too

-Math.trunc (not supported by Internet Explorer)
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.



*look at another way to round to 2dp
let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


***implicite calculations
*/

//paseInt and paseFloat

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
//so the parseInt function can be used to say look fo numbers in other bases.

//other maths functions

/*
- Math.random()
Returns a random number from 0 to 1 (not including 1).

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

--Math.max(a, b, c...) // it gives the highest value
--Math.min(a, b, c...) // it gives the minimum value
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1



Math.pow(n, power)
Returns n raised to the given power.
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024
*/

//tasks

let num1 = +prompt("enter a number", "");
let num2 = +prompt("enter a number", "");

alert(num1 + num2);


//task

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);
  //Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity.



  function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

  //task
  function randomInteger(min, max) {
    return min + max + Math.random() *(max-min);


    //to include both max and min values
    function randomInteger(min, max) {
        // here rand is from min to (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      
  }

