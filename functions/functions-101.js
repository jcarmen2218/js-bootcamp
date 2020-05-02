// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

// convertFahrenheitToCelsius

// Call a couple of times (32 --> 0) (68 --> 20)

// Print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (5/9) * (fahrenheit-32)
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
