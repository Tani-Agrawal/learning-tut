/*Global 
Jo variable function ke bahar declare hota hai.
Isko code ke har jagah use kiya jaa sakta hai (function ke andar bhi).
*/

 var a = "Yahoo Baba";
        function hello() {
            console.log(a + "<br>");
        }

        hello(); 
        console.log(a); 


/*local
Jo variable function ke andar declare hota hai.
Iski scope sirf us function tak limited hoti hai.
Bahar use access nahi kar sakte.*/
function hello(){
      var d = "Yahoo Baba";  // yeh sirf function ke andar kaam karega (local variable)
      console.log(d + "<br>");
    }

    hello();
    console.log(d);  // ❌ error aayega: "d is not defined"


//correct version 
function hello(){
  var d = "Yahoo Baba";  
  console.log(d + "<br>");
}

hello();
// console.log(d);  // yeh hata do, warna error aayega



