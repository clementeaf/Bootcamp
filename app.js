const taskInput = document.querySelector('.task-input input');
const taskBox = document.querySelector('.task-box')

let editId;
let isEditedTask = false;
//getting localStorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo(){
    let li = "";
    if(todos) {
        todos.forEach((todo, id) => {
            // if todo status is completed, set the isCompelted value to checked
            let isCompleted = todo.status == "completed" ? "checked" : "";
            li += `<li class="task">
                        <label for="${id}">
                            <input onClick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}">${todo.name}</p>
                        </label>
                        <div class="icons">             
                            <button onclick="edit(${id}, '${todo.name}')">edit</button>              
                            <button onclick="trash(${id})">trash</button>              
                        </div>
                    </li>`;
        });
    }
    taskBox.innerHTML = li;
}

showTodo();

function edit(taskId, taskName) {
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;
}

function trash(deletedId) {
    //removing selected task from array/todos
    todos.splice(deletedId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}


function updateStatus(selectedTask) {
    //getting paragraph that contains task name
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked");
        // updating the status of selected task to completed
        todos[selectedTask.id].status = "completed";
    } else {
        // updating the status of selected task to pending
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener('keyup', e => {
    let userTask = taskInput.value.trim();
    if(e.key == 'Enter' && userTask) {
        if(!isEditedTask) { // if isEditedTask isnt true
            if(!todos) { // if todos isnt exist, pass an empty array to todos
                todos = [];
            }
            let taskInfo = {name: userTask, status: 'pending'};
            todos.push(taskInfo); //adding new task to todos
        } else {
            isEditedTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value= "";
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodo();
    }
})