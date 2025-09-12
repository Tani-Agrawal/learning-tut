//condition
//if statement (Agar condition true hai to block ke andar ka code chalega.)
// if...else statement (Agar condition true hai to ek block chalega, warna dusra block.)
//if...else if...else (Multiple conditions ko chain me check karne ke liye.)
// Nested if (Ek if ke andar doosra if use karke detailed checking karte hain.)
// switch statement  (Ek variable ke multiple fixed values check karne ke liye cleaner code.
// Ternary Operator  (Short form of if-else (ek line me decision).))
// Logical Conditions (inside if) (Directly &&, ||, ! ka use karke multiple checks. )

var abc = 10;
var xyz = 5;

//if else
if(abc > xyz){
    console.log("ABC is greater than XYZ");
}
else{
    console.log("ABC is less than XYZ");
}

//if elseif else
    var randomNumber = Math.floor(Math.random()*10);
//this will generate a random no. b/w 0 to 10  

console.log("Random Number is ",randomNumber);
    
if (randomNumber <=3){
    console.log("number is less then or equal to 3(IF)");
}
else if(randomNumber <=7){
    console.log("number is  less then or equal to 7(ELSE IF)");
}
else{
    console.log("nummber is greater than 7(ELSE)");
}

//ternary operator
var randomNum = Math.floor(Math.random()*10);
//this will generate a random no. b/w 0 to 10  

console.log("rn", randomNum);

randomNum >= 5 ? console.log("num is greater than 5"): console.log("num is less than 5");

//switch statement 
 
var generateNum = Math.floor(Math.random()*10);
console.log("generatednum", generateNum);


switch(generateNum){
    case 7: 
      console.log("generated no. is 7");
      break;
    case 8: 
       console.log("generated no. is 8");
       break;
    case 5: 
       console.log("generated no. is 5");
       break;
    case 0: 
       console.log("generated no. is 0");
       break;
    case 3: 
       console.log("generated no. is 3");
       break;
    case 1: 
       console.log("generated no. is 1");
        break;


    default:
        console.log("generated no. is not 7,8,5,0,3,1");
        break;
}