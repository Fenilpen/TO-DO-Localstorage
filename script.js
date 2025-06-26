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
    completed : false
   }

   tasks.push(newTask)
   saveTasks()
   todoInput.value = ""
   console.log(tasks);
   
})

function randerTasks(task){
   const li = document.createElement('li')
   li.setAttribute('data-id',task.id)
   if (task.completed) li.classList.add('completed')
   li.innerHTML = `<span>${task.text}</span>
   <button>delete</button>
   `;
   li.addEventListener('click', (e) => {
      if(e.target.button === 'BUTTON') return
      task.completed = !task.completed
      li.classList.toggle('completed')
      saveTasks()
   })

   li.querySelector('button').addEventListener('click',(e)=> {
      e.stopPropagation()
   })
   
   todoList.appendChild(li)
}

function saveTasks(){
   localStorage.setItem("tasks",JSON.stringify(tasks))
}
})
