
function calculateBMI(){
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
        if (h === "" || w === "") {
        alert("Please enter both height and weight.");
        return;
    }

    if (h <= 0 || w <= 0) {
        alert("Height and weight must be positive numbers.");
        return;
    }

    let heightMeter = h / 100;
    let bmi = w / (heightMeter * heightMeter);

    document.getElementById("result").innerHTML =
    "Your BMI is " + bmi.toFixed(2);
}

