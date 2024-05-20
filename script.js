const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button"); // Changed querySelector to querySelectorAll to select all buttons
const specialChars = ["%", "/", "-", "+", "="]; // Removed the duplicate "=" in the array
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output.replace("%", "/100"));
        } catch (e) {
            output = "Error"; // Handling any potential errors from eval
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => { // Fixed the syntax of the forEach method
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
