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


