const titleElement = document.querySelector('#food-title')
const bodyElement = document.querySelector('#food-body')
const removeElement = document.querySelector('#remove-food')
const dateElement = document.querySelector('#last-edited')
const foodId = location.hash.substring(1)
let grocery = getSavedgrocery()
let food = grocery.find(function (food) {
    return food.id ===foodId
})

if (food === undefined) {
    location.assign('/index.html')
}

titleElement.value = food.title
bodyElement.value = food.body
dateElement.textContent = generateLastEdited(food.updatedAt)

titleElement.addEventListener('input', function(e) {
    food.title = e.target.value
    food.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(food.updatedAt)
    savedGrocery(grocery)
})

bodyElement.addEventListener('input', function(e) {
    food.body = e.target.value
    food.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(food.updatedAt)
    savedGrocery(grocery)
})

removeElement.addEventListener('click', function(e) {
    removeGrocery(food.id)
    savedGrocery(grocery)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e) {
    if (e.key === 'foods') {
        foods = JSON.parse(e.newValue)
        food = foods.find(function (food) {
            return food.id ===foodId
        })
        
        if (food === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = food.title
        bodyElement.value = food.body
        dateElement.textContent = generateLastEdited(food.updatedAt)
    }
})

