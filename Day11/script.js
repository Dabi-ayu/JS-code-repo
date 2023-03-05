//code quality

//debuging in the browser, before writting more complex code lets talk more using the browser to debugg
//Debugging is the process of finding and fixing errors within a script
//The source panel

//Navigate to sources 

/*Breakpoints
A breakpoint.
The debugger statements.
An error (if dev tools are open and the button  is “on”).
When paused, we can debug: examine variables and trace the code to see where the execution goes wrong.*/

//coding style

//our code most be clear to understand
/*we learned of the different ways to make our code clean by giving spaces where needed. both vertical and horizontal indentation
there should not be nine lines of code without vertical indentation
- always put semi-colons at the end of every line in your code.
- make sure to avoid nexting like this

for (let i = 0; i < 10; i++) {
  if (cond) {
    ... // <- one more nesting level
  }
}

this is better
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...  // <- no extra nesting level
}


- we learn that to declare functions we need to first start with the declaration before moving to the actuall 
function.

All syntax rules described in this chapter (and in the style guides referenced)
 aim to increase the readability of your code. All of them are debatable.

When we think about writing “better” code, the questions we should ask ourselves are: “What makes the code more readable and easier to understand?” and “What can
 help us avoid errors?” These are the main things to keep in mind when choosing and debating code styles.

Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices.

//let's fix this code
function pow(x, n) {
  let result = 1;

  for(let i = 0;i < n; i++) {
    result *= x;
}
  return result;
}

let x = prompt("x?", ''), 

n = prompt("n?", '');

if (n <= 0)
{
  alert(`Power ${n} is not supported, 
  please enter an integer number greater than zero`);
}
else
{
  alert( pow(x, n) );
}*/


//comments
//avoid comments that tells what is actually happening in the code. in the first place a code should be self discriptive.




