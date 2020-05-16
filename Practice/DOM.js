let grocery = getSavedgrocery()

const filter = {
   searchText:'',
   hideChecked: false,
   sortBy: 'byEdited'
}

renderGrocery(grocery, filter)

document.querySelector('#food-text').addEventListener('input', function(e) {
   filter.searchText = e.target.value
   renderGrocery(grocery, filter)
})

document.querySelector('#shop-text').addEventListener('submit', function(e){
   e.preventDefault()
   const id = uuidv4()
   const timestamp = moment().valueOf()
   grocery.push({
      id: id,
      title: '',
      body: '',
      createdAt: timestamp, 
      updatedAt: timestamp
   })
   saveGrocery(grocery)
   renderGrocery(grocery, filter)
   e.target.elements.grocery.value=''
})

document.querySelector('#hide-checked').addEventListener('change', function(e){
  filter.hideChecked = e.target.checked
  renderGrocery(grocery, filter)
})