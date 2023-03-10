//object referencing and copying
let message = "Hello!";
let phrase = message;
//both variable have thesame thing stored in them hello

//for objects only the references are copied.so we have 2 references here and a single memo. each reference can modify the information in the memo

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

//comparison by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//an important something to note const objects can be modified
//In other words, the const user gives an error only if we try to set user=... as a whole.
const use = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(use.name); // Pete

//cloning and merging

//to copy the entire object to something new we could use the following syntax. cool isn't it?

let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object

//talking abit about Object.assign
  let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true


//we can also do cloning with Object.assign

let usil = {
    name: "John",
    age: 30
}

let cclone = Object.assign({}, usil);

alert(cclone.name); // john
alert(cclone.age); //30

//nested cloning

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 60, get the result from the other one


//the structured clone to make the different objects to be independent, not related
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related
//learn about .me thesame thing
  let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true


//Garbage collection
//hmm only God knows what was here



//object methods😊

