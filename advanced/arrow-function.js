const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Jake',
    age: 28
}, {
    name:'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30) 
console.log(under30)

// Find Person Age 22
const equal22 = people.find((person) => person.age === 22)
console.log(equal22.name)