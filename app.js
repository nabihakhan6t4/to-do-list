document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inp");
    const taskList = document.getElementById("task-list");
    const addButton = document.getElementById("add-btn");
    const updateButton = document.getElementById("update-btn");
    const clearButton = document.getElementById("clear-btn");

    let currentTask = null;

    function addTask() {
        const task = inputField.value.trim();
        if (task === "") {
            alert("Please enter a task");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `${task} <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-edit"></i>`;

        listItem.querySelector(".fa-trash").addEventListener("click", function () {
            listItem.remove();
        });

        listItem.querySelector(".fa-edit").addEventListener("click", function () {
            inputField.value = task;
            currentTask = listItem;
            updateButton.disabled = false;
            addButton.disabled = true;
        });

        taskList.appendChild(listItem);
        inputField.value = "";
        inputField.focus();
    }

    function updateTask() {
        if (currentTask) {
            currentTask.childNodes[0].nodeValue = inputField.value.trim() + " ";
            currentTask = null;
            inputField.value = "";
            updateButton.disabled = true;
            addButton.disabled = false;
        }
    }

    function clearTasks() {
        taskList.innerHTML = "";
    }

    addButton.addEventListener("click", addTask);
    updateButton.addEventListener("click", updateTask);
    clearButton.addEventListener("click", clearTasks);
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && addButton.disabled === false) {
            addTask();
        } else if (e.key === "Enter" && updateButton.disabled === false) {
            updateTask();
        }
    });
});
