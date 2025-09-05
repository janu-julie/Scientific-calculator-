let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if(currentInput === '0') currentInput = '';
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if(currentInput !== '' && !isOperator(currentInput.slice(-1))) {
    currentInput += op;
    updateDisplay();
  }
}

function appendFunction(func) {
  currentInput += func + '(';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteChar() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function isOperator(char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function calculate() {
  try {
    let expression = currentInput
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log10')
      .replace(/ln/g, 'Math.log')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/\^/g, '**');
    let result = eval(expression);
    currentInput = result.toString();
    updateDisplay();
  } catch (err) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}
