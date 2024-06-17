document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calculator input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.value === "=") {
                calculate();
            } else if (this.value === "AC") {
                clearDisplay();
            } else if (this.value === "⌫") {
                backspace();
            } else {
                appendToDisplay(this.value);
            }
        });
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }
});