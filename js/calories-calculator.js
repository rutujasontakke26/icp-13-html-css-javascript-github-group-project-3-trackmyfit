
        function calculateCalories() {
            let age = document.getElementById("age").value;
            let gender = document.getElementById("gender").value;
            let height = document.getElementById("height").value;
            let weight = document.getElementById("weight").value;
            let activity = document.getElementById("activity").value;

            if (age === "" || height === "" || weight === "") {
                document.getElementById("result").innerText = "Please fill all fields!";
                return;
            }

            let bmr;

            if (gender === "male") {
                bmr = 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
                bmr = 10 * weight + 6.25 * height - 5 * age - 161;
            }

            let calories = Math.round(bmr * activity);

            document.getElementById("result").innerText =
                "Daily Calories Needed: " + calories + " kcal";
        }

        function toggleTheme() {
    document.body.classList.toggle("dark");

    var btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
      btn.innerHTML = "☀️ Light";
    } else {
      btn.innerHTML = "🌙 Dark";
    }
}
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
        document.body.style.color ="#000"

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
