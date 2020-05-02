// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (5/9) * (fahrenheit-32)

    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)