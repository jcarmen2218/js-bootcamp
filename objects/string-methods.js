let name = ' Jake Carmen '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asd898'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

//Challenge area

// isValidPassword
// length is more that 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
  return (password.length > 8 && !password.includes('password')) 
}
   
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123@#!'))
console.log(isValidPassword('asdfpahfhgfjpassword'))