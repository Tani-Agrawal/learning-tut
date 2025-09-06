//hosting in js 
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// hostings means taking declaration on the top

var jj = 10;
var ii = 50;
console.log("kk", jj+ii);


console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10


// console.log(myLet); // This would throw a ReferenceError due to the Temporal Dead Zone
let myLet = 20;
console.log(myLet); // Output: 20


sayHello(); // Output: Hello!

function sayHello() {
  console.log("Hello!");
}