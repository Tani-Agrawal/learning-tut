/*synatx
if(expression1){  
     //content to be evaluated if expression1 is true  
}  
else if(expression2){  
    //content to be evaluated if expression2 is true  
}  
else if(expression3){  
    //content to be evaluated if expression3 is true  
}  
else{  
    //content to be evaluated if no expression is true  
}  
*/


/* If Else If Condition */
var per = prompt("Enter your Percentage : ");

if (per >= 80 && per <= 100) {
    console.log("You are in Merit.");
} else if (per >= 60 && per < 80) {
    console.log("You are in Ist Division.");
} else if (per >= 45 && per < 60) {
    console.log("You are in IInd Division.");
} else if (per >= 33 && per < 45) {
    console.log("You are in IIIrd Division.");
} else if (per < 33) {
    console.log("You are Fail.");
} else {
    console.log("Please Enter Valid Percentage.");
}
