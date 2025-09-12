//Import-export in js
//In JavaScript, import and export statements are fundamental for creating modular code, allowing developers to split code into separate files (modules) and share functionality between them.

// The export keyword makes variables, functions, classes, or other values accessible from other modules. 

//Importing: The import keyword is used to bring exported values from other modules into the current file.


import sendMessage from "./export.js";

function getMessage(){

    console.log(sendMessage());

}

getMessage();