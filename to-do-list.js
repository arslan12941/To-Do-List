function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" onclick="completeTask(this)">
        <span>${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">X</button>
    `;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function completeTask(checkbox) {
    let taskItem = checkbox.parentElement;
    let completedList = document.getElementById("completedList");

    if (checkbox.checked) {
        taskItem.classList.add("completed-task");
        completedList.appendChild(taskItem);
    } else {
        taskItem.classList.remove("completed-task");
        document.getElementById("taskList").appendChild(taskItem);
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}