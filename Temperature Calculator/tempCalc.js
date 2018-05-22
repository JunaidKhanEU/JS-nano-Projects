let inputForCelsius = document.querySelector('#celsius > input[type=number]');
let inputForFahrenheit = document.querySelector('#fahrenheit > input[type=number]');
let inputForKelvin = document.querySelector('#Kelvin > input[type=number]');

let roundMe = num=>Math.round(num*100) / 100;

// Celcius to Fahrenheit and Kelvin
inputForCelsius.addEventListener('input', function(e){
    this.style.color = "red";
    inputForFahrenheit.style.color = "rgb(145, 45, 5)";
    inputForKelvin.style.color = "rgb(145, 45, 5)";
    let cTemp= parseFloat(this.value);
//    convert to Fahrenheit 
    let fTemp = roundMe(cTemp * 1.8 + 32);
    inputForFahrenheit.value=fTemp;
    
//    convert to Kelvin
    let kTemp = roundMe(cTemp + 273.15);
    inputForKelvin.value=kTemp;
    
});

// Fahrenheit to Celcius  and Kelvin
inputForFahrenheit.addEventListener('input', function(e){
    this.style.color = "red";
    inputForCelsius.style.color = "rgb(145, 45, 5)";
    inputForKelvin.style.color = "rgb(145, 45, 5)";
    let fTemp= parseFloat(this.value);
//    convert to Fahrenheit 
    let cTemp = roundMe((fTemp - 32) * 5 / 9) ; //(68°F - 32) × 5/9 
    inputForCelsius.value=cTemp;
    
//    convert to Kelvin
    let kTemp = roundMe((fTemp + 459.67) * 5 / 9 );//(60°F + 459.67) × 5/9 
    inputForKelvin.value=kTemp;
    
});


// Kelvin to Fahrenheit and Celcius 
inputForKelvin.addEventListener('input', function(e){

    this.style.color = "red";
    inputForCelsius.style.color = "rgb(145, 45, 5)";
    inputForFahrenheit.style.color = "rgb(145, 45, 5)";
    let kTemp= parseFloat(this.value);
//    convert to Celsius
    let cTemp = roundMe(kTemp - 273.15) ; //- 273.15
    inputForCelsius.value=cTemp;
    
//    convert to Farenhiet
    let fTemp = roundMe((kTemp * 9 / 5) - 459.67 ); //T(K) × 9/5 - 459.67
    inputForFahrenheit.value=fTemp;
    
});