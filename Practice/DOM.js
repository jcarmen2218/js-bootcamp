let grocery = getSavedgrocery()

const filter = {
   searchText:'',
   hideChecked: false,
   sortBy: 'alphabetical'
}

renderGrocery(grocery, filter)

document.querySelector('#food-text').addEventListener('input', function(e) {
   filter.searchText = e.target.value
   renderGrocery(grocery, filter)
})

document.querySelector('#shop-text').addEventListener('submit', function(e){
   e.preventDefault()
   const id = uuidv4()
   grocery.push({
      id: id,
      food:e.target.elements.grocery.value,
   })
   saveGrocery(grocery)
   renderGrocery(grocery, filter)
   e.target.elements.grocery.value=''
})

document.querySelector('#filter-by').addEventListener('change', function(e){
   filter.sortBy = e.target.value
   renderGrocery(grocery, filter)
})

document.querySelector('#hide-checked').addEventListener('change', function(e){
  filter.hideChecked = e.target.checked
  renderGrocery(grocery, filter)
})