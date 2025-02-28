let currentInput = "";
let previousInput = "";
let operation = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateDisplay("");
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = "";
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOperation(key);
  } else if (key === "Enter" || key === "=") {
    calculateResult();
  } else if (key === "Backspace") {
    clearDisplay();
  } else if (key === "c" || key === "C") {
    clearDisplay();
  }
});
