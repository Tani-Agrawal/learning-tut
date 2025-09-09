/*nested loop -- jb ek loop ke andr dusra loop chlta h 
syntax
for(let i = 0 ; i < limit; i++)
{
   for(let j = 0 ; j < limit; j++)
   {
      // statement
   }
   // statement for outer loop
}
*/

for(var a = 1; a <= 5; a++){
      for(var b = 1; b <= a ; b++){
       console.log(a +  " ");
      }
     console.log("---------------");
    }


    //another
    let result = "";

for (let i = 1; i <= 11; i++) {        // rows
  for (let j = 1; j <= i; j++) {      // columns
    result += "* ";
  }
  result += "\n"; // next line
}

console.log(result);

//another 
 for (var u = 5; u >= 1; u--) {
            for (var v = 1; v <= u; v++) {
                console.log(u + " ");
            }
            console.log("");
        }

//another
 for (var p = 5; p >= 1; p--) {
            for (var q = p; q >= 1; q--) {
                console.log(q + " ");
            }
            console.log("");
        }