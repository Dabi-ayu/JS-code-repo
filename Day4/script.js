//logic operators
/*there are four 
|| for OR
&& for AND
!  for Not
?? this is  the nullish coalescing*/

let hours = 24;
let rest = prompt("enter an hour");
let itsWeekend = true;

if (hours < rest || rest > 18 || itsWeekend) {

    alert("don't you get it? its weekend!");
}
//this is done in alert
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
//The difference is that AND returns the first falsy value while OR returns the first truthy one.
alert( 1 && 2 && 3 ); // 3, the last one, since all values are truthy it returns the last

//task
alert( alert(1) || 2 || alert(3) );//here since the || operator evaluates its left first 
//this will diplay 1 then since alert(1) is falsy it moves to the next truthy value 2.
alert( 1 && null && 2 );//this will out put null since its the first falsy value

//task
let age = prompt("enter age");
if (age >= 14 && age <=90){
alert("succeed");
}
//task
if (-1 || 0) alert( 'first' );//this will execute the first truthy value which is -1
if (-1 && 0) alert( 'second' );// something cannot be both true and false so will not execute
if (null || -1 && 1) alert( 'third' );// now taking -1&&1 first since && has a higher precedence which is true 1 then null or 1, this displays the first truthy value 1.

//task
//if (!(age >= 14 && age <= 90)) see how ! works


//task
let signin = prompt("please login");
if (signin === "Admin") {
let password = prompt("enter password");
if (password === "TheMaster") {
    alert("Welcome");
} else if(password == "" || password === null) {
alert("Canceled");
}
else {
    alert("Wrong password");
}
}
else if(signin == "" || signin === null) {
alert("cancelled");
} else {
    alert("I don't know you");
} //perfect so the Esc button can be represented as null


