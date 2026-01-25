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

    const themeToggle = document.getElementById("theme-toggle");
    const icoLight = document.getElementById("ico-light");
    const icoDark = document.getElementById("ico-dark");

    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");
    const containers = document.querySelectorAll(".container");

    function toggleTheme() {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme === "dark") {
            setLightTheme();
            localStorage.setItem("theme", "light");
        } else {
            setDarkTheme();
            localStorage.setItem("theme", "dark");
        }
    }

    function setDarkTheme() {
        document.body.style.backgroundColor = "#1B262C";
        document.body.style.color = "#ffffff";

        navbar.style.backgroundColor = "#212A3E";
        footer.style.backgroundColor = "#394867";

        containers.forEach(c => {
            c.style.backgroundColor = "#9BA4B5";
            c.style.color = "#000";
        });

        icoLight.style.display = "none";
        icoDark.style.display = "block";
    }

    function setLightTheme() {
        document.body.style.backgroundColor = "#F1F6F9";
        document.body.style.color = "#000";

        navbar.style.backgroundColor = "#212A3E";
        footer.style.backgroundColor = "#394867";

        containers.forEach(c => {
            c.style.backgroundColor = "#9BA4B5";
            c.style.color = "#000";
        });

        icoLight.style.display = "block";
        icoDark.style.display = "none";
    }

    function renderTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        savedTheme === "dark" ? setDarkTheme() : setLightTheme();
    }

    renderTheme();

