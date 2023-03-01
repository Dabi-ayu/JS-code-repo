//loop tasks
/*Now we need to notice i++ and ++i; hmm for ++i the value is incremented before the condition holds take for example
let i = 0;
while (++i < 5) alert( i ); this will print from 1-4 and remember that alert is a function on its owni it just prints the current value of i
so this comparison actually goes to check if 5<5

while for i++
let i = 0;
while (i++ < 5) alert( i ); this will display 1-5. now i++ works such that it makes use of the old value, that is it actually starts
the comparison from i=0 but since alert gives the current i, 1 is alerted. so this will go to 4<5 but we have4++ so we have
5 beign alerted.

//now for the for loop
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i ); 
 this will output thesame results. note that for the for loop the first value is printed before the condition begins
 If true – execute the loop body alert(i), and then i++; wow we see the difference between the while and for loop
 so if condition is true it skips the i++ and exercutes body first before incrementing i. so i++ and ++i and same hea*/


 //task
 /*
 for(i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
        alert(i);
    }
 }*/
//for loop now to while
/*
 for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }


//while loop
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}//wow!

//task
//wow this keeps the input on untill a number greater than 100 is written
//The loop do..while repeats while both checks are truthy:

let num;
do {
    num = prompt("Enter a nuber greater than 100?", 0);
} while (num <= 100 && num);//the check && num is false if num is null or an empty string and the loops will stop
//If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.


let n =prompt("enter a number", 0);
for(let i = 0; i <= n; i++) {
    if((n > 1) && (n % 2) && (n % 1)){

        alert(i);
    }
}

let N = 10;

nextPrime:
for (let i = 2; i <= N; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
*/


//switch statment


//a switch statement can replace multiple if checks

/*switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
  }
  The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).
*/
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}//here the corresponding cases are compared with the value 4 and the corresponding output
//if we don't have breakes then well see 3 consecutive alerts no brake which is wierd
//note that case also allows binary operations like case b + 1: and we can also group cases like case 3: case 5: then alert
//also note that the switch uses the strict equal to to compare so it wont work for different datatypes


//task rewriting switch with if
if ( browser === "Edge"){
    alert("youve got the Edge!");
} else if ((browser === "Chrome") || (browser === "Firefox") || (browser === "Safari") || (browser === "Opera")) {
    alert("Okay we support these browsers too");
} else {

    alert( 'We hope that this page looks ok!' );

}//task from if to switch
let b = +prompt('b?', '');

switch(b) {
    case 0:
        alert( 0 );
    break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert("where are you form?");
}
