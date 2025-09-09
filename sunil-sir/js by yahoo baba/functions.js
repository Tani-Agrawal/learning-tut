/*JavaScript Function Syntax
The syntax of declaring function is given below.         

function functionName([arg1, arg2, ...argN])
{  
      //code to be executed  
}   */

function hello() {
    console.log("Hello Everybody");
}

function yahoo() {
    console.log("Yahoo Baba");
}

hello(); 
console.log("\n"); 
yahoo();
console.log("\n");
hello();
console.log("\n"); 
hello();
//another example
function greet(name) {
    console.log("Hello " + name + " 👋");
}

greet("Tani");
greet("buddy");



/*Syntax: function with parameters
function Name(paramet1, paramet2, paramet3,...) 
{
     // Statements
}*/

/* Functions With Parameters */
function hello(fname = "Yahoo", lname = "Baba") {
    console.log("Hello " + fname + " " + lname);
}

hello("Ram", "Singh");
hello("Salman", "Khan");
hello(); // agar koi value na do to default wala chalega

//another eg
/* Function with Parameters + Default Values */
function addNumbers(a = 0, b = 0) {
    console.log("Sum of " + a + " and " + b + " is: " + (a + b));
}  

/*   ("Sum of " + a + " and " + b + " is: " + (a + b));)
"Sum of " → ek normal string hai.
+ a → string ke sath variable a add ho jayega.
Agar a = 10 hai to ye "Sum of 10" banega.
" and " → phir ek aur string jod di.
+ b → string ke sath variable b add ho jayega.
Agar b = 20 hai to ab tak ka result "Sum of 10 and 20" hoga.
" is: " → ek aur string add ho gayi.
+ (a + b) → yahaan parentheses important hain.
(a + b) pehle calculate hoga → 10 + 20 = 30.
Phir string me add hoga → "Sum of 10 and 20 is: 30". */

// Function calls
addNumbers(10, 20);   // dono parameters diye
addNumbers(50);       // ek parameter diya (b = 0 ho jaayega)
addNumbers();         // dono default 0 use honge


/* function with return value
Syntax
return value;
*/

function fullname(fname = "Yahoo", lname = "Baba") {
            var a = fname + " " + lname;

            return a;
        }
        
        var fn = fullname("Ram","Singh");
        console.log(fn);

//another example 
 function sum(math,eng,sc){
      var s = math + eng + sc;

      return s;
    }

    function percentage(tt){
       var per = tt/300 * 100;
       console.log(per);
    }

    var total = sum(80,80,80);

    percentage(total);

//one more

function area(length = 1, width = 1) {
    var result = length * width;
    return result;
}

// Function calls
var a1 = area(10, 5);
console.log("Area of Rectangle: " + a1);

var a2 = area(7);  // width default 1 use hogi
console.log("Area of Rectangle: " + a2);

var a3 = area();   // dono default 1 honge
console.log("Area of Rectangle: " + a3);
