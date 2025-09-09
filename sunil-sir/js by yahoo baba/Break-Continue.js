/*continue statement -Current iteration ko skip kar deta hai.
Loop agle iteration se continue hota hai. 

syntax:        
continue labelname;
 */

for(var a = 1; a <= 10; a++){
      if(a == 3){
        console.log("Hey : " + a );
        continue;
      }
      console.log("Number : " + a );
    }

/*break sattement - Loop ko turant terminate (band) kar deta hai.
Control loop ke baahar chala jaata hai.

syntax
break labelname;
*/

for(var c = 1; c <= 10; c++){
      if(c == 3){
        console.log("Hiii : " + c );
        break;
      }
      console.log("Number : " + c );
    }