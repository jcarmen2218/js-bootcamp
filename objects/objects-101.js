let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location
let myPerson = {
    name: 'Jake',
    age: 28,
    location: 'Los Angeles'
}

//Jake is 28 and lives in Los Angeles.
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`)

//Increase age by 1 and print message again
myPerson.age = myPerson.age + 1 

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`)