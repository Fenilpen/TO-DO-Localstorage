document.addEventListener("DOMContentLoaded", ()=>{

let todoInput =  document.getElementById("todo-input")
let addTaskButton  = document.getElementById("add-task-btn")
let todoList = document.getElementById("todo-list")

let tasks = []
addTaskButton.addEventListener("click",()=>{    
   let taskText = todoInput.value.trim()
   if(taskText === "") return;

   let newTask = {
    id: Date.now(),
    text: taskText,
    compeleted : false
   }

   tasks.push(newTask)
   saveTasks()
   todoInput.value = ""
   console.log(tasks);
   
})

function renderTasks(tasks){
   console.log(tasks)
}

function saveTasks(){
   localStorage.setItem("tasks",JSON.stringify(tasks))
}
})
