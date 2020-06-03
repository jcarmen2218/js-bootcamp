'use strict'

// Fetch existing todos from localStorage
// getSavedTodos
const getSavedTodos = () => {
    const toDosJSON = localStorage.getItem('toDos')
   
   try {
    return toDosJSON ? JSON.parse(toDosJSON) : []
   } catch (e) {
    return []
   }   
}

// Save todos to localStorage
// saveTodos
const saveTodos = (todo) => {
    localStorage.setItem('todo', JSON.stringify(todo))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = toDos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        toDos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = toDos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
// renderTodos
const rendertoDos= (toDos, filters) => {
    const filteredtoDos = toDos.filter((toDo) => {
        const searchTextMatch = toDo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !toDo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteToDos = filteredtoDos.filter((todo) => !todo.completed)
       
    document.querySelector('#toDos').innerHTML = ''
    document.querySelector('#toDos').appendChild(generateSummaryDOM(incompleteToDos))

    filteredtoDos.forEach((toDo) => {
       document.querySelector('#toDos').appendChild(generateTodoDOM(toDo))
   })
 }

 // Get the DOM elements for an individual note
 // generateTodoDOM
 const generateTodoDOM = (toDo) => {
    const todoE1 = document.createElement ('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Set up todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = toDo.completed
    todoE1.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(toDo.id)
        saveTodos(toDos)
        rendertoDos(toDos, filters)
    })

    // Setup the todo text
    todoText.textContent = toDo.task
    todoE1.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoE1.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(toDos.id)
        saveTodos(toDos)
        rendertoDos(toDos, filters)
    })
    return todoE1
 }

// Get the DOM elements for list summary
// generateSummaryDOM

const generateSummaryDOM = (incompleteToDos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteToDos.length} todos left`
    return summary
}