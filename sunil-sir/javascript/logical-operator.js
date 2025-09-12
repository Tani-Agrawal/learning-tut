//operator-2
//logical-operator
// && → AND (dono condition true honi chahiye)
// || → OR (ek condition true ho to bhi chalega)
//  NOT → ! (true ko false aur false ko true bana deta hai)
var isChecked = true;
var isOpen = false;

// AND &&
console.log("AND", isChecked && isOpen);
console.log("AND", isChecked && isOpen, "----", isChecked && isChecked);

// OR ||
console.log("OR", isChecked || isChecked);
console.log("OR", isChecked || isChecked, "----", isOpen || isOpen);
console.log("OR", isChecked || isChecked, "----", isChecked || isOpen);

// NOT !
console.log("NOT", !isChecked );
console.log("NOT", !isChecked,"----", !isOpen );