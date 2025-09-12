//functions in js =A function is a block of code that we can reuse. 
//Instead of writing the same code again and again, we put it inside a function and just call it whenever needed.

//Function Declaration → Normal function jo `function` keyword se banti hai, hoisting hoti hai.
//Function Expression→ Function ko ek variable me assign karte hain, hoisting nahi hoti.
//Arrow Function (ES6)→ Short syntax, mostly modern JS me use hoti hai.
//Anonymous Function → Naam nahi hota, mostly callbacks me use hoti hai.
// Named Function Expression→ Expression ke saath naam bhi dete hain (debugging ke liye useful).
//Immediately Invoked Function Expression (IIFE) → Function jo turant execute ho jata hai, mostly private scope ke liye.
//Generator Function (`function*`)→ Special function jo pause/resume ho sakta hai, `yield` use karta hai.
// Async Function  → Promise return karti hai, `await` ke saath asynchronous kaam handle karti hai.

 function myFunc(){
    console.log("I'm a function")
 }

 myFunc();


function addNumbers(){    //yh without parameters ke check kiya tha 
    var nu1 = 10;
    var nu2 =20;
    var nu3 = nu1 + nu2;
    console.log("addition is", nu3);
}
addNumbers();


function add(a,b){ // with parameters h 
console.log("addition is :", a + b);
}
add(4,10)

//arrow function ES6
const myFuncArrow = ()=> console.log("I am simple arrow function");
myFuncArrow();

const addArrowFunc = (a,b)=> console.log("i am additipn arrow fun. with parameters", a + b);
addArrowFunc(5,25);

const addArrowFunction = a => console.log("i am additipn arrow fun. with parameters", a + 7);
addArrowFunction(20);
