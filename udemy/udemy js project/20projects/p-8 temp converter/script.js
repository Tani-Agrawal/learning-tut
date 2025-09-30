function convertTemperature(){
    const celsiusInput = document.getElementById("celsius");
    const faherenheitInput = document.getElementById("fahrenheit");

//NaN = Not a number
    if(celsiusInput.value !== "" && !isNaN(celsiusInput.value)){

        const celsiusValue = parseFloat(celsiusInput.value);
        const faherenheitValue = (celsiusValue * 9/5) + 32;

        faherenheitInput.value = faherenheitValue.toFixed(2);

    }else if(fahrenheitInput.value !== "" && !isNaN(faherenheitInput.value)){

        const faherenheitValue = faherenheitInput.value;
        const celsiusValue = (faherenheitValue - 32) * 5/9;

        celsiusInput.value = celsiusValue.toFixed(2);

    }else{
        alert("Please enter a valid number")
    }
}