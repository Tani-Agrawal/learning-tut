//comparison operator (values compare karne ke liye → true/false)
// == → Sirf value compare karta hai (5 == "5" → true)
// === → Value + Type dono compare karta hai (5 === "5" → false)
//  Sirf value alag hai ya nahi check karta hai → !=
//  Value ya type alag hai ya nahi check karta hai → !==
// > → Greater than (bada hai ya nahi check karta hai)
// < → Less than (chhota hai ya nahi check karta hai)
// >= → Greater than or equal to
// <= → Less than or equal to

var aone = 10;
var atwo = 20;
var athree = 10;
var afour = "10";
// ==
console.log("double equals to",aone == atwo);
console.log("double equals to",aone == atwo, "----", aone == athree);
console.log("double equals to",aone == atwo,"----", aone == athree, "----", aone == afour);
// here == jo h voh only consider value not the datatype

// ===
console.log("triple equals to",aone === atwo);
console.log("triple equals to",aone === atwo, "----", aone === athree);
console.log("triple equals to", aone === afour); 
// === jo h checks the value as well as data type of the var

// greater than
console.log("check the ans", aone > atwo);
console.log("check the ans", atwo > aone);

// less than 
console.log("check the ans", aone < atwo);
console.log("check the ans", atwo < aone);

//Greater than or equal to
console.log("Greater than or equal to", aone >= atwo);
console.log("Greater than or equal to", atwo >= aone,"----", athree >= aone);

//Less than or equal to
console.log("Less than or equal to", aone <= atwo);
console.log("Less than or equal to", atwo <= aone,"----", athree <= aone);

//NOT equal to != !==

console.log("NOT equals to",aone != atwo);
console.log("NOT equals to",aone != atwo, "----", aone != athree , "----", aone != afour);
console.log("NOT double equals to",aone !== atwo);
console.log("NOT double equals to",aone !== atwo, "----", aone !== athree , "----", aone !== afour);




