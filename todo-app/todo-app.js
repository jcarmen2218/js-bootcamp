'use strict'

let toDos = getSavedTodos()

const filters = {
   searchText: '',
   hideCompleted: false
}

rendertoDos(toDos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
   filters.searchText = e.target.value
   rendertoDos(toDos, filters)
})

document.querySelector('#toDo-text').addEventListener('submit', (e) => {
   e.preventDefault()
   toDos.push({
      id: uuidv4(),
      task: e.target.elements.toDos.value,
      completed: false
   })
   
   saveTodos(toDos)
   rendertoDos(toDos, filters)
   e.target.elements.toDos.value=''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  rendertoDos(toDos, filters)
})




