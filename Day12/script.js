//Objects
//objects are key value functions and can be declared as follows
let user = new Object(); // "object constructor" syntax
let use = {};  // "object literal" syntax

let usr = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
  //property values are accessible through the .  for example usr.name gives John
  //to remove a property we use the delete ex delete usr.name
  let usep = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };


//let's speak more of the square brackets

// this would give a syntax error
user.likesbirds = true;
/*


let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

The dot notation cannot be used in a similar way:

let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
*/

//computed properties
//we learn that [] notations are more powerful that dot notations and can be used to input even values that are not in the objects

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

//
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

/*As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
*/

//now checking if a property does exist
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"  or


let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
// but note that the key properties are in quotes. the second one works better because in a case where you have a property whose value is undefined the result will be true since that property actually exist but the reverse is true for the noSuchProperty test


//wow we are noticing that there is a different kind of for loop that navigates objects. syntax

for (key in object) {
  // executes the body for each key among object properties
}



let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}//isn't this gorgeous...

//some special things we need to understand
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}//we see the order of display this is because these are number and remember in objects "0" and 0 as keys have no difference
//but for strings it display in order of addition of objects
 //to stop the effect of numbers we could use
 let codesi = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codesi) {
  alert( +code ); // 49, 41, 44, 1
}//we also came across somethings Math.trunc("1.2") to eliminate the decimal part // 1

//task

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

//task
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for(let key in salaries) {
   sum  += salaries[key];
   return sum;
}
alert(sum);


//task

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

let multi = 1;
function MultiNumeric(menu) {
for(let key in menu) {
if(typeof menu[key] === Number){
  multi = menu[key] * 2;
   } 
 }
}



