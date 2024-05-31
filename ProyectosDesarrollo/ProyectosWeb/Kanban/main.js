const todoColumn = document.getElementById("todo_tareas_agregadas");
const inProgressColumn = document.getElementById("inProgress_tareas_agregadas");
const doneColumn = document.getElementById("done_tareas_agregadas");
const taskModal =document.getElementById("taskModal");
const addTaskBtn =document.getElementById("addTaskBtn");

function openModal(){
    taskModal.style.display = "block";
}

function closeModal(){
    taskModal.style.display ="none";
}


function addTask() {
    const taskName = document.getElementById("taskName").value;
    if (taskName.trim() !== "") {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");
        taskContainer.textContent = taskName;

        // Agrega el evento de clic para mover la tarea
        taskContainer.addEventListener("click", moveTask);

        const todoColumn = document.getElementById("todo_tareas_agregadas");
        todoColumn.appendChild(taskContainer);
        closeModal();
    }
    document.getElementById("taskName").value = "";
}



function moveTask(event) {
    const task = event.target;

    if (task.parentElement === todoColumn) {
        // Desde la columna "Por hacer" a "En desarrollo"
        inProgressColumn.appendChild(task);
    } else if (task.parentElement === inProgressColumn) {
        // Desde la columna "En desarrollo" a "Completado"
        doneColumn.appendChild(task);
    } else if (task.parentElement === document.getElementById("todo_tareas_agregadas")) {
        // Desde la columna "Por hacer" a la columna "Por hacer" (dentro de la nueva sección)
        inProgressColumn.appendChild(task);
    } else if (task.parentElement === document.getElementById("inProgress_tareas_agregadas")) {
        // Desde la columna "En desarrollo" a la columna "En desarrollo" (dentro de la nueva sección)
        doneColumn.appendChild(task);
    } else {
        // Desde la columna "Completado" a "En desarrollo"
        todoColumn.appendChild(task);
    }
}

function deleteTask(event) {
    const taskContainer = event.target.closest(".task-container");
    if (taskContainer) {
        taskContainer.parentElement.removeChild(taskContainer);
    }
}

const clearBoardTareasButton = document.getElementById("clearBoardTareasButton");

function clearBoardTareas() {
    const todoColumn = document.getElementById("todo_tareas_agregadas");
    const inProgressColumn = document.getElementById("inProgress_tareas_agregadas");
    const doneColumn = document.getElementById("done_tareas_agregadas");

    // Elimina todos los elementos dentro de las columnas
    clearColumn(todoColumn);
    clearColumn(inProgressColumn);
    clearColumn(doneColumn);
}

function clearColumn(column) {
    // Elimina todos los elementos dentro de una columna
    while (column.firstChild) {
        column.removeChild(column.firstChild);
    }
}

function addTaskFromList(selectElement) {
    const selectedTask = selectElement.value;
    if (selectedTask && selectedTask !== "Seleccione una tarea") {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");
        taskContainer.textContent = selectedTask;

        // Agrega el evento de clic para mover la tarea
        taskContainer.addEventListener("click", moveTask);

        const todoColumn = document.getElementById("todo_tareas_agregadas");
        todoColumn.appendChild(taskContainer);
        closeModal();
    }
    selectElement.value = ""; // Restablece la selección
}


clearBoardTareasButton.addEventListener("click", clearBoardTareas);
addTaskBtn.addEventListener("click", openModal);
document.querySelector(".close").addEventListener("click", closeModal)
clearTasksButton.addEventListener("click", clearAllTasks);