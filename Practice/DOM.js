const grocery = [{
    food: 'Apple',
    check: true
}, {
    food: 'Corn',
    check: false
}, {
    food: 'Brussel Sprouts',
    check: true
}, {
    food: 'Tomato Sauce',
    check: false
}, {
    food: 'Polenta',
    check: true
}, {
    food: 'Seaweed',
    check: false
}]

const filter = {
    searchText: '',
    completed:''
}

function shopList(grocery, filter) {
    const filterShop = grocery.filter(function(shop) {
        const textMatch = shop.food.toLowerCase().includes(filter.searchText.toLowerCase())
            const hideComplete = !filter.hideComplete || !shop.check
     
            return textMatch && hideComplete
        })
    
    const itemLeft = filterShop.filter(function (list) {
        return !list.check
    })

    document.querySelector('#shop').innerHTML= ''

    const shopList = document.createElement('h3')
    shopList.textContent = `You have ${grocery.length} food items left on your shopping list`
    document.querySelector('#shop').appendChild(shopList)
    
    filterShop.forEach(function(shop){
        const newItem = document.createElement('p')
        newItem.textContent = shop.food
        document.querySelector('#shop').appendChild(newItem)
    })
}

shopList(grocery, filter)


document.querySelector('#food-text').addEventListener('input', function(e){
    filter.searchtext = e.target.value
})

document.querySelector('#reset').addEventListener('reset', function(e){
    e.preventDefault()
    grocery.filter(function(food){
        
    })
})
document.querySelector('#food-text').addEventListener('submit', function(e){
    e.preventDefault()
    grocery.push({
        food: e.target.elements.food.value,
        check: false
})

    shopList(grocery, filter)
    e.target.elements.food.value=''
})

document.querySelector('#completed').addEventListener('change', function(e){
    filter.completed = e.target.checked
    shopList(grocery, filter)
  })

  document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})
