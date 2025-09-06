
//datatype -String → "Hello"

//Number → 10, 3.14
//Boolean → true / false
//Undefined → let a; (value assign nahi hui)
//Null → intentionally empty
//Symbol → unique identifier
//BigInt → very large numbers


var  Name = "Tani";       // String
var age = 12;            // Number
var isHappy = true;      // Boolean
var car = null;          // Null //object
var phone;               // Undefined

var person = {            //object
    name:"tanu" ,
    age:33,
}

var employees = ["Tom", "Jerry", "Don", "Harry"];   //array

//how to check the datatype of a variable ?
// for that we have a typeog operator

console.log(typeof Name);
console.log(typeof age);
console.log(typeof isHappy);
console.log(typeof car);
console.log(typeof phone);
console.log(typeof person);
console.log(typeof employees); // idr yeh aaray ko object bta rha h 

//normal way 
console.log("Name", Name);
console.log("employees", employees); 

//ab kese pta lre ki data type jo h voh objecct h ya array 
//uske liye humare psss ek operator h instanceof
console.log(person instanceof Array)

console.log(employees instanceof Array)

