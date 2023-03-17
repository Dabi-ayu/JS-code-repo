//string

//lets talk about qoutes
let single = 'single-quoted';
let double = "double-quoted";//single and double qoutes can be used for same purpose

let backticks = `backticks`;//Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:
//
let guestList = `Guest:
*Mary
*John
*Dabi` ;
alert(guestList);

//lets talk special Characters

let guestListi = "Guests:\n * John\n * Pete\n * Mary";

alert(guestListi); // a multiline list of guests, same as above
//so here we see the use of a \n.
alert( 'I\'m the Walrus!' ); // I'm the Walrus! to maintain the single code

//String length

alert( `My\n`.length ); // 3
//Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it. Not .length(), but .length.


//Accessing characters

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );
//Now let's get something here the str.at(pos) method allows one to actually access negative positions
//the [] doesn't it only gives undefined (-1) access the last number and -2 access the second to the last

let stri = `Hello`;

alert( stri[-2] ); // undefined
alert( stri.at(-2) ); // l
//
for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }


  //strings are immutable

  let star = 'Hi';

str[0] = 'h'; // error
alert( star[0] ); // doesn't work

//take a look
let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi


//changing the case of a string


alert('Interface'.toUpperCase()) //INTERFACE
alert('Interface'.toLowerCase()) //interface

//Searching for a substring: str.indexOf

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)


//this is for the first and second places where id is found
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12

//let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
// this is a more shorter form
/*
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );

  str.lastIndexOf(substr, position)
There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

It would list the occurrences in the reverse order.

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}

let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}
}*/


//we talk about the .include function
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

//we also have str.startsWith and str.endsWith which does what they say
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

//lets talk of There are 3 methods in JavaScript to get a substring: substring, substr and slice.

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

//If there is no second argument, then slice goes till the end of the string:

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'
//.substring doesn't support negative numbers

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)
//
// let str = "stringify";
// alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

//comparing strings
// note that a lowercase later is always greater than a uppercase
// different case letters have different codes. to get the codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

//alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument): to get the letters
//to compare the word with highest code
alert( 'Österreich'.localeCompare('Zealand') ); // -1
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.




//tasks

 function ucFirst(start) {

if(!start) return start;
 return start[0].toUpperCase() + start.slice(1);

}
alert(ucFirst("john"));

//task

function checkSpam(selt){

    if (selt.includes("viagra") || selt.includes("XXX")) return true;
    return false;

}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//task
function truncate(str, maxlength) {

  if (str.length > maxlength.length) {
    str.slice(0, maxlength - 1 ) =  + '...';
  }
}

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

//task

 function extractCurrencyValue(str) {
//task this can read 120 to $120;
function extractCurrencyValue(str) {
  return +str.slice(1);
}
}






