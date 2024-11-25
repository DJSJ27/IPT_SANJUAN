let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousValue = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function operate(op) {
    if (currentInput === "") return;

    if (op === "sqrt") {
        display.value = Math.sqrt(parseFloat(currentInput));
        currentInput = display.value;
    } else if (op === "**") {
        display.value = Math.pow(parseFloat(currentInput), 2);
        currentInput = display.value;
    } else if (op === "%") {
        display.value = parseFloat(currentInput) / 100;
        currentInput = display.value;
    } else {
        if (operator !== null) {
            calculateResult();
        }
        previousValue = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    }
}

function calculateResult() {
    if (operator && previousValue !== null && currentInput !== "") {
        let result;
        switch (operator) {
            case '+':
                result = previousValue + parseFloat(currentInput);
                break;
            case '-':
                result = previousValue - parseFloat(currentInput);
                break;
            case '*':
                result = previousValue * parseFloat(currentInput);
                break;
            case '/':
                if (parseFloat(currentInput) === 0) {
                    alert("Cannot divide by zero!");
                    return;
                }
                result = previousValue / parseFloat(currentInput);
                break;
        }
        display.value = result;
        currentInput = result.toString();
        operator = null;
        previousValue = null;
    }
}

function clearDisplay() {
    currentInput = "";
    operator = null;
    previousValue = null;
    display.value = "";
}
