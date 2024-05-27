document.addEventListener("DOMContentLoaded", function() {
    let inputField = document.getElementById("inp");
    let taskList = document.getElementById("task-list");

    function addTask() {
        if (inputField.value.trim() === "") {
            alert("Please enter a task");
            return;
        }

        let listItem = document.createElement("li");
        listItem.innerHTML = `${inputField.value.trim()} <i class="fa-solid fa-trash"></i>`;
        
        listItem.querySelector("i").addEventListener("click", function() {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        inputField.value = "";
        inputField.focus();
    }

    document.querySelector("button").addEventListener("click", addTask);
    inputField.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});

