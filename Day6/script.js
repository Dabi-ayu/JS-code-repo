//loop: While and for
//the while loop
/*while the condition is truthy, the code in the while loop is exercuted, also Curly braces are not required for a single-line body*/

 let i = 0;
 while (i < 3) { // shows 0, then 1, then 2
   alert( i );
   i++;
 }

 //the do while loop

 /*This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.*/
 let ie = 0;
 do {
   alert( ie );
   ie++;
 } while (ie < 3);


 //the for loop
 for (let id = 0; id < 3; id++) { // shows 0, then 1, then 2
     alert(id);
   }

 //here we talk about inline declaration and because of this the alert out of the loop shows error because it is not defined outside


   for (let it = 0; it < 3; it++) {
     alert(it); // 0, 1, 2
   }
  alert(i); // error, no such variable


 //here we are able to see the value 3 because ig was declared out of the loop. and also note that it is the current value of ig that is alerted
   let ig = 0;

 for (ig = 0; ig < 3; ig++) { // use an existing variable
   alert(ig); // 0, 1, 2
 }

 /*one thing to note is that you could also remove the first part then just put simi-colon, in the same way put ;; when omiting the two first part, for the third
// part, you could just put it in the alert like alert(i++);*/

 //lets look at braking loop
 /*Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.*/

 let sum = 0;

 while (true) {

   let value = +prompt("Enter a number", '');

   if (!value) break; // (*)

   sum += value;

 }
alert( 'Sum: ' + sum );

 //this next one is super cool; continue
 /*The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).*/

for (let i = 0; i < 10; i++) {

     // if true, skip the remaining part of the body
     if (i % 2 == 0) continue;
  
     alert(i); // 1, then 3, 5, 7, 9
 }//wow an easy way to print odd numbers;

 /*
 if (i > 5) {
     alert(i);
   } else { continue;
  } so what is said is continue shouldn't be used with ?*/

   //going through i,j, also here we cannot use break or continue in the code, it will only do that for the inner loop

  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // what if we want to exit from here to Done (below)?
    }
  }
  
  alert('Done!');// in other to correct that we use labels


//lables for brake and continue

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');
//alert(ig); // 3, visible, because declared outside of the loopd