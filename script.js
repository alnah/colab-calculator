const displayExpression = document.querySelector("#expression");
const displayResult = document.querySelector("#result");

setEventListeners();

function setEventListeners() {
  window.addEventListener("keydown", handleKeyEvent);
  document.querySelectorAll(".btn").forEach(btn => handleClickEvent(btn));

  function handleClickEvent(btn) {
    btn.addEventListener("click", event => handleInput(event.target.id));
  }

  function handleKeyEvent(event) {
    const key = document.querySelector(`[data-key="${event.key}"]`);
    if (key) handleInput(key.id);
  }
}

function handleInput(input) {
  if (isNumber(input)) {
    handleNumber(input);
  } else if (isOperator(input)) {
    handleOperator(input);
  } else if (isEquals(input)) {
    evaluateExpression();
  } else {
    handleSpecial(input);
  }
  updateDisplay(input);

  function isNumber(input) {
    return !isNaN(input);
  }

  function isOperator(input) {
    return ["+", "-", "÷", "×", "^"].includes(input);
  }

  function isEquals(input) {
    return input === "=";
  }
}

function handleNumber(input) {
  return;
}

function handleOperator(input) {
  return;
}

function handleSpecial(input) {
  return;
}

function evaluateExpression(input) {
  return;
}

function updateDisplay(input) {
  return;
}

function operate(operand1, operator, operand2) {
  const a = Number(operand1);
  const b = Number(operand2);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "^":
      return power(a, b);
    case "÷":
      return divide(a, b);
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function power(a, b) {
    return a ** b;
  }
}
