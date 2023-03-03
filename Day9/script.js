//las task on functions
function pow(x,n){

   let result = x;

   for (let i = 1; i < n; i++) {
     result *= x;
   }
return result;
 
}
let x = prompt("Enter the base");
let n = prompt("Enter the exponent");

if (n == 0) {
   alert(1);
 } else  if (n < 0){
   alert(`power of ${n} is not supported`);
 } else{
   alert(pow(x,n));
 }


 //function expression
 let sayHi = function() {
   alert( "Hello" );
 };


 /*As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
create a function and put it into the variable sayHi".
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
so to note, function expressions end with a simi-colon*/


//call back functions

function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
 }
 
 function showOk() {
   alert( "You agreed." );
 }
 
 function showCancel() {
   alert( "You canceled the execution." );
 }
 
 // usage: functions showOk, showCancel are passed as arguments to ask
 ask("Do you agree?", showOk, showCancel);

 //The arguments showOk and showCancel of ask are called callback functions or just callbacks.


//function declaration vs function expression
/*A Function Expression is created when the execution reaches it and is usable only from that moment.

A Function Declaration can be called earlier than it is defined.
so we can say function expression have a block scope and is not visible in the entire script.
*/


let ag = 16; // take 16 as an example

if (ag < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

//see difference

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

