//Nullish coalescing operator "??" This is a recent addition to the language
//it similar to the || operator but return the first value which is defined while || returns the first truthy value
result = a ?? b //result = (a !== null && a !== undefined) ? a : b;

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder 

let height = 0;
alert(height || 100); // 100 the first truthy value, || doesn’t distinguish between false, 0, an empty string "" and null/undefined
alert(height ?? 100); // 0 the first defined value, atually 0 is a  valid value which is to be replaced by the default so ?? is right

// set height=100, if height is null or undefined
height = height ?? 100;

//note something here, even these parameters are assigned to null all, they have been assigned already
let heigh = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
//