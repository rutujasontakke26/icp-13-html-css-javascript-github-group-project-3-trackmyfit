document.addEventListener("DOMContentLoaded", function () {

    let todoItems = JSON.parse(localStorage.getItem("todos"));

    if (!Array.isArray(todoItems)) {
        todoItems = [
            { text: "Leg warm up" },
            { text: "Leg workout" },
            { text: "Stretching" }
        ];
        localStorage.setItem("todos", JSON.stringify(todoItems));
    }

    const container = document.getElementById("todo-items-container");
    const input = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-button");

    function displaytodoItems() {
        container.innerHTML = "";

        todoItems.forEach((item, index) => {
            container.innerHTML += `
                <div class="todo-item">
                    <span>${item.text}</span>
                    <img src="../images/delete.png"
                         class="delete-icon"
                         onclick="deleteTask(${index})">
                </div>
            `;
        });

        localStorage.setItem("todos", JSON.stringify(todoItems));
    }

    addBtn.addEventListener("click", function () {
        const value = input.value.trim();
        if (!value) return;

        todoItems.push({ text: value });
        input.value = "";
        displaytodoItems();
    });

    window.deleteTask = function (index) {
        todoItems.splice(index, 1);
        displaytodoItems();
    };

    displaytodoItems();
});
