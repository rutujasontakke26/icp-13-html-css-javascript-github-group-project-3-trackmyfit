
  console.log("BMR JS connected");
  function calculateBMR() {
      var age = document.getElementById("age").value;
      var gender = document.getElementById("gender").value;
      var height = document.getElementById("height").value;
      var weight = document.getElementById("weight").value;

      var bmr = 0;

      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      document.getElementById("result").innerHTML =
        "Your BMR is: <b>" + Math.round(bmr) + "</b> calories/day";
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
  