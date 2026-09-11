function celciusToFahrenheit(celcius) {
    return (celcius * 1.8) + 32;
}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function formatTemp(value, unit) {
    return value + " " + unit;
}

const fahrenheit = celciusToFahrenheit(25);
console.log(formatTemp(fahrenheit, 'F'));
const celsius = fahrenheitToCelcius(68);
console.log(formatTemp(celsius, 'C'));
const freezingFahrenheit = celciusToFahrenheit(0);
console.log(formatTemp(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheitToCelcius(32);
console.log(formatTemp(freezingCelsius, 'C'));
