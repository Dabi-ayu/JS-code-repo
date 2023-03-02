
//functions
//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
//this is the syntax the keyword function first, then the name of the function then brackets for parameters then curly braces


function showMessage() {
    alert( 'Hello everyone!' );
  }// calling the function will be here; if we call the function twice then the alert message will show twice.
  //so we can say that functions minimize duplication of code.

  //local variables
   //a variable declaration inside a function can only be seen in that function
   function showMes() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMes(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function
  



  //outer variables
  //ok now a function can access an outer variable. here the function can fully access the outer variable and even make changes to it
  let userName = 'John';

function showMe() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMe(); // Hello, John
//note that the variables outside(global variables) the functions are overshadowed by the variables inside(local variables). it is advisable to use locals instead of globals


//parameters

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
//this is really nice, look closely at the logic in this code


//default values
/* if we have showMessage("Ann");
That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.
We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

like this 
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given*/
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
//wow so the value of the anotherFunction() becomes the value of text
//now in old scripts we could fined this because old javascript didn't support defaults

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
//…Or using the || operator:

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  
}

/* also note this
Modern JavaScript engines support the nullish coalescing operator ??, 
it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
*/


//returning variables

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

//cool code wow
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
//A function with an empty return, returns undefined
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}//note that javascript requires a semi-colon after a return. you could also do return(a+b..)


//naming functions

/*Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does*/

//this is a function to output a prime number ohhh so self explained not like the other code we saw
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

//task

function min(a,b) {
  if(a < b) {
    return a;
  } else {
    return b;
  }
}

