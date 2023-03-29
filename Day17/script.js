//Arrays
//to declare an array
let arr = new Array();
//or
let array = [];


let fruits = ["Mango", "Pear", "orange"];

alert(fruits[0]); // Mango
//to know the length of an array

alert(fruits.length) // 3. arrays can store anytype of datatype. wow i man functions

// mix of values
let arry = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arry[1].name ); // John

// get the function at index 3 and run it
arry[3](); // hello

//now to access the last element of the array
let aray = ["Beri","Anne"];
alert(aray.at(-1));
/*
or
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
*/


//let's get into stepping into the methods of an array
//push,pop,shift,unshift
//push appends an element to the end of the array
//pop removes an array from the end
//shift swipes the first elements position with the second and so
//wow so in javascript an array can operate both as a stack(LIFO) and a queue(FIFO)
let arrin = ["pear", "pawpaw", "watermelon"];
alert(arrin.pop());//removes watermelon and alerts it
alert(arrin); //pear, pawpaw
//lets see how push works
let admire = ["hack", "mille","piza"];
alert(admire.push("binial"));//it adds binial to the array

//let's look at methods which works with the begining of array
//shift extracts the last element of the array and returns it

// let's see the unshift
//it adds elements to the begining of an array
let frit = ["pinapple", "pears"];

frit.push("orange", "mango");
frit.unshift("pawpaw", "wahirai");
alert(frit);


