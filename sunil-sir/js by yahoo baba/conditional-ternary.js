/*
Syntax:
condition ? value if true : value if false

condition: Expression to be evaluated which returns a boolean value.

value if true: Value to be executed if the condition results in a true state.

value if false: Value to be executed if the condition results in a false state.
*/


var a = 100;
var b;

b = "Value is " + (a > 10 ? "True" : "False");

console.log(b);



var c = 40;
var e;
e = "Value is " + (c < 20 ? "True" : "False");

console.log(e);
