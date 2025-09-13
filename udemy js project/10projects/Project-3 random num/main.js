const generateBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("random-number");

generateBtn.addEventListener("click",()=>{

    const randomNumber = Math.floor(Math.random() *100) + 1;

    numberElement.textContent = randomNumber;
});


/*(method) Math.floor(x: number): number
Returns the greatest integer less than or equal to its numeric argument. */