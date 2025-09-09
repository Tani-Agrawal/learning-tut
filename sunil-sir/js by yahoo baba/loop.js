/*while loop 
while loop in JavaScript tab tak chalega jab tak uska condition true rahe.
syntax
while (condition) 
{
    // code block to be executed
} */

    /*Increase While Loop Condition */
        var a = 1;

        while (a <= 3) {
            console.log(a + ") Hello Yahoo Baba <br>");
            a = a + 1;
        }

        /*  Decrease While Loop Condition */
        
        var x = 10;

        while (x >= 1) {
            console.log(x + ") Hello Yahoo Baba <br>");
            x = x - 1;
        }


        //another eg 
        let i = 2;
while(i <= 10) {
  console.log(i);  // prints even numbers
  i += 2; 
}
/*while loop → pehle condition check, fir code run.
do...while loop → pehle code run, fir condition check. */

/*  do while loop = Ye loop pehle code block execute karta hai,
Fir condition check karta hai.
Matlab code kam se kam ek baar zaroor chalega, chahe condition false hi kyu na ho.

syntax
do {
    // Statements
}
while(conditions)
*/
var t = 1;
    do{
      console.log(t + " Hello bunny");
      t++;
    }while(t <= 8)


/*Loops - Loop ek control structure hai jo same code ko bar-bar chalata hai jab tak condition true rahe.
syntax
for (expression 1; expression 2; expression 3)
{
       // code block to be executed
}
*/
//for loop -  Jab iterations ka number pehle se pata ho.
for(var x = 1; x <= 10; x++){
       console.log("Hello Yo Buddy");
    }