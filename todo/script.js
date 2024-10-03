
const taskInput = document.querySelector("input") ;
const taskdiv = document.getElementById('task');
const addTaskBtn = document.querySelector("button");

let tasks = [];


function renderTasks() {

  taskdiv.innerHTML = '';


  tasks.forEach((task, index) => {
    const divElement = document.createElement('div');
    const h1 = document.createElement("h3") ; 
    divElement.classList.add("task-style") ;
    h1.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete" ; 
    deleteBtn.addEventListener('click', () => deleteTask(index));

    divElement.appendChild(h1) ; 
    divElement.appendChild(deleteBtn);
    


    taskdiv.appendChild(divElement);
  });
}


function addTask() {
  const taskText = taskInput.value;


  if (taskText) {
    tasks.push(taskText); 
    taskInput.value = ''; 
    renderTasks();    
  } else {
    alert('Please enter a task.');
  }
}


function deleteTask(index) {
  tasks.splice(index, 1); 
  renderTasks();          
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
