// Fetch existing grocery from localStorage
// getSavedgrocery
const getSavedgrocery = function() {
    const groceryJSON = localStorage.getItem('grocery')

if (groceryJSON !== null) {
  return JSON.parse(groceryJSON)
    } else {
        return []
    }
}

// Save grocery to localStorage
// savegrocery
const saveGrocery = function(food) {
    localStorage.setItem('food', JSON.stringify(food))
}

// Remove food by id
const removeGrocery = function (id) {
    const foodIndex = grocery.findIndex(function(food) {
        return food.id === id
    })

    if (foodIndex > -1) {
        grocery.splice(foodIndex, 1)
    }
}

// Toggle the checked value for a given food
const togglefood = function (id) {
    const food = grocery.find(function (food) {
        return food.id === id
    })

    if (food !== undefined) {
        food.Checked = !food.Checked
    }
}

 // Get the DOM elements for an individual note
 // generatefoodDOM
 const generatefoodDOM = function (food) {
    const foodE1 = document.createElement ('div')
    const checkbox = document.createElement('input')
    const foodText = document.createElement('span')
    const button = document.createElement('button')

    // Set up food checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = food.Checked
    foodE1.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        togglefood(food.id)
        saveGrocery(grocery)
        renderGrocery(grocery, filter)
    })

    // Setup the food text
    foodText.textContent = food.food
    foodE1.appendChild(foodText)

 // Setup the remove food button
 button.textContent = 'x'
 foodE1.appendChild(button)
 button.addEventListener('click', function(){
     removeGrocery(food.id)
     saveGrocery(grocery)
     renderGrocery(grocery, filter)
 })

    return foodE1
 }


 // Sort your groceries by one of three ways
const sortGrocery = function (grocery, sortBy) {
     if (sortBy ==='alphabetical') {
        return grocery.sort(function (a,b) {
            if (a.food.toLowerCase() < b.food.toLowerCase()) {
                return -1
            } else if  (a.food.toLowerCase() > b.food.toLowerCase()) {
                return 1 
            } else {
                return 0
            }
        })
     } else {
         return grocery
     }
}

// Render application grocery based on filter
// renderGrocery
const renderGrocery= function(grocery, filter) {
    grocery = sortGrocery(grocery, filter.sortBy)
    const filteredGrocery = grocery.filter(function (food){
        const searchTextMatch = food.food.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCheckedMatch = !filter.hideChecked || !food.Checked
        
        return searchTextMatch && hideCheckedMatch
    })

    const incompleteGrocery = filteredGrocery.filter(function (food) {
        return !food.Checked
    })
       
    document.querySelector('#grocery').innerHTML = ''
    document.querySelector('#grocery').appendChild(generateSummaryDOM(incompleteGrocery))

    filteredGrocery.forEach(function (food) {
       document.querySelector('#grocery').appendChild(generatefoodDOM(food))
   })
 }

 // Get the DOM elements for list summary
 // generateSummaryDOM
 const generateSummaryDOM = function (itemLeft) {
     const summary = document.createElement('h2')
     summary.textContent = `You have ${itemLeft.length} food items left on your shopping list`
     return summary
 }