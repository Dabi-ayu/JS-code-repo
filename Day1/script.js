//javascript was created to make webpages alive.its first name was livescript. but since JAVA was popular by then it was decided to name it JavaScript. so the page are called scripts
//so this projects are being done with the help of javascript.info
//lets go!

//Hello world

alert("hello world, I'm JavaScript");


//code structure
/*Javascript considers a brake to be a simicolon but not in all cases for example alert("hellol world")tap[1,2].forEach javascript doesn't considers to but a semi colon because it knows it will be incorrect.*/
//comments are very important for understanding of code.

//use strict
//wow so programmers use "use strict" at the beginning of every script so as to make code more morden
//but with the use of modules and classes no need, cus its already in it

//variables

/*let message = "on a trip with javascript";
let box;
 
box = message;
alert(message); alert(box);*/


let admin;
let name = "John";
admin = name;
alert(admin);

//data types
/*what we have is string, number, float..
so  javascript can't store numbers greater or less than(+_2*53-1), so store such numbers, the concept of Bigint comes in when declaring the number should end with an n
like so let Bigint = 199999456819990333300n
*/
//string; strings must be in qoutes
/* double qoutes which is similar to single
and backticks which is use to take say a parameter like so
*/

let adva = "princess";
alert(`Hello,${adva}!`)//the expression within the {} is evaluated and the result added to the string.only backticks have this functionality

//interaction:alert,prompt,confirm. all this pause the exercution of script

let cue = prompt("How old are you?");//basically prompt comes with the input
alert(`I am ${cue}`);//displays just a message
let vasca = confirm("Are you a student?");
alert(vasca);//so the confirm returns true when ok is clicked and false when otherwise


//last task

let mavel = prompt("please what is your name?");
alert(`my name is ${mavel}`);
