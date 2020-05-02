const toDos = [{
   task:'Workout',
   completed: false
}, {
   task:'Read',
   completed: true
}, {
   task:'Tutor Amanda', 
   completed: false
}, {
   task:'Tutor Stewart', 
   completed: false
}, {
   task: 'ACA Meeting',
   completed: true
}]

const deletetoDo = function (toDos, toDoTask) {
   const index = toDos.findIndex(function (toDo) {
      return toDo.task.toLowerCase() === toDoTask.toLowerCase()
   })
   
   if (index > -1) {
      toDos.splice(index, 1)
   }
}

const getThingsToDo = function (toDos){
   return toDos.filter(function(toDo) {
      return !toDo.completed
   })
}

const sortTodos = function (toDos) {
   toDos.sort(function (a, b) {
      if (!a.completed && b.completed) {
         return -1
      } else if (!b.completed && a.completed) {
         return 1
      } else {
         return 0
      }
   })
}
sortTodos(toDos)
console.log(toDos)

// console.log(getThingsToDo(toDos))


// deletetoDo(toDos, 'Tutor Amanda')
// console.log(toDos)









