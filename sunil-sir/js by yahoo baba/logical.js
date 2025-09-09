/* Logical And Operator */
var age = 18;

if (age >= 18 && age <= 21) {
    console.log("Yes you are eligible.");
} 
console.log("\n");

/* Logical OR Operator */
var a = 10;
var b = 15;

if (a >= 8 || b <= 15) {
    console.log("Yes you are eligible.");
}
console.log("\n");

/* Logical Not Operator */
var x = 30;

// Dhyan do: !x pehle evaluate hoga
// x = 30 → truthy → !x = false (0)
// Ab false >= 12 → 0 >= 12 → false
console.log(!x >= 12);  // Output: false
