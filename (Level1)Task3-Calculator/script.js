// Select the result display
const resultDisplay = document.getElementById('result');

// Append value to the display
function appendValue(value) {
    if (resultDisplay.value === '0') {
        resultDisplay.value = value;
    } else {
        resultDisplay.value += value;
    }
}

// Clear the display
function clearDisplay() {
    resultDisplay.value = '0';
}

// Remove the last character
function backspace() {
    resultDisplay.value = resultDisplay.value.slice(0, -1) || '0';
}

// Calculate the result
function calculate() {
    try {
        // Evaluate the expression
        resultDisplay.value = eval(resultDisplay.value.replace('÷', '/').replace('×', '*'));
    } catch {
        resultDisplay.value = 'Error';
    }
}
