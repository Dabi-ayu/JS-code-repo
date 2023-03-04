//Arrow functions

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
/*

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//we can do that with arrow functions
//lets look at multilines arrow functions


let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3// so when using arrow functions a return is required
  */

  //task


function ask(question, yes, no){
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  

  //Javascript specials
  //this is a recap of what we've studied so far let's go
  /*so we started with code structure: we saw that each line of code ends with a semi-colon and a new line may symbolize a semi colon
  it doesn't work for codes that are obvious for example a line starting with [ ];

  - we saw the use strict mode which gives the script a modern way syntax
  - we learned that we could declare variables using the let const and var key words.
  - and there are 8 types of data types which are number,boolean,string,null, undefined, bigint, object and symbol for complex data structures
  -we learn about interactions which are alert, confirm, prompt. and we learned that all these are modal that's the stop the exercution of the script until theyre attended to 
  - we learned about operator; + * / % - operators
  - also learned about the conditional operator 
  - nullish coalescing operator ??.
  - strict equality
  - loops
  
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}


  -the switch which functions with break
  let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

 - functions 
 fuction declaration
 function sum(a, b) {
  let result = a + b;

  return result;
}

function expression
let sum = function(a, b) {
  let result = a + b;

  return result;
};

arrow functions
// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;

Functions may have local variables: those declared inside its body or its parameter list. 
Such variables are only visible inside the function.
Parameters can have default values: function sum(a = 1, b = 2) {...}.
Functions always return something. If there’s no return statement, then the result is undefined.

*/
