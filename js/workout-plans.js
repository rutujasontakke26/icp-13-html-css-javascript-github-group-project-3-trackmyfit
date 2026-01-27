 function toggleTheme() {
    document.body.classList.toggle("dark");

    var btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
      btn.innerHTML = "☀️ Light";
    } else {
      btn.innerHTML = "🌙 Dark";
    }
  }