let numbersBtn = document.querySelectorAll(".number");
let previousOperation = document.querySelector(".previous-operation");
let currentOperation = document.querySelector(".current-operation");
let operatorsBtn = document.querySelectorAll(".operator");
let parenthesisOpenBtn = document.querySelector(".parenthesis-open");
let parenthesisCloseBtn = document.querySelector(".parenthesis-close");
let equaltoBtn = document.querySelector(".equalto");
let clearBtn = document.querySelector(".CE");
let backspaceBtn = document.querySelector(".back-space");
let notationBtn = document.querySelector(".notation-btn");

let notationFlag = false;

let evaluate = function () {
  try {
    if (!isNaN(valueForLogybaseFunctions)) {
      previousOperation.value += currentOperation.value;
      currentOperation.value =
        Math.log(valueForLogybaseFunctions) / Math.log(currentOperation.value);
      valueForLogybaseFunctions = "Not a Number";
      if (isNaN(currentOperation.value)) throw "Not a number";
      return;
    }
    if (!isNaN(valueForNthrootFunctions)) {
      previousOperation.value += currentOperation.value;
      currentOperation.value = Math.pow(
        valueForNthrootFunctions,
        1 / currentOperation.value
      );
      valueForNthrootFunctions = "Not a Number";
      if (isNaN(currentOperation.value)) throw "Not a number";
      return;
    }
    if (!currentOperation.value.length) {
      return;
    }
    let operationExpression = currentOperation.value;
    currentOperation.value = currentOperation.value.replaceAll("^", "**");
    currentOperation.value = eval(currentOperation.value);
    previousOperation.value = operationExpression;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
};
let clearInput = function () {
  currentOperation.value = "";
};
let removeLastSymbol = function () {
  currentOperation.value = currentOperation.value.slice(0, -1);
};
let appendInput = function (event) {
  if (currentOperation.value.slice(-1) == ")") {
    return;
  }
  if (
    currentOperation.value.slice(-1) == "x" ||
    currentOperation.value.slice(-1) == "y"
  ) {
    currentOperation.value = event.target.textContent;
  } else {
    currentOperation.value += event.target.textContent;
  }
};
let appendOperator = function (event) {
  if (!currentOperation.value.length) {
    return;
  }
  if (
    !isNaN(currentOperation.value.slice(-1)) ||
    currentOperation.value.slice(-1) == ")"
  ) {
    currentOperation.value += event.target.textContent;
  }
};
let parenthesisOpen = function (event) {
  if (!currentOperation.value.length) {
    return;
  }
  if (
    isNaN(currentOperation.value.slice(-1)) &&
    currentOperation.value.slice(-1) !== "x" &&
    currentOperation.value.slice(-1) !== "e" &&
    currentOperation.value.slice(-1) !== "y"
  ) {
    currentOperation.value += event.target.textContent;
  }
};
let parenthesisClose = function (event) {
  if (!currentOperation.value.length) {
    return;
  }
  if (
    !isNaN(currentOperation.value.slice(-1)) ||
    currentOperation.value.slice(-1) == ")"
  ) {
    currentOperation.value += event.target.textContent;
  }
};

numbersBtn.forEach((button) => {
  button.addEventListener("click", appendInput);
});
operatorsBtn.forEach((button) => {
  button.addEventListener("click", appendOperator);
});
parenthesisOpenBtn.addEventListener("click", parenthesisOpen);
parenthesisCloseBtn.addEventListener("click", parenthesisClose);
equaltoBtn.addEventListener("click", evaluate);
clearBtn.addEventListener("click", clearInput);
backspaceBtn.addEventListener("click", removeLastSymbol);

notationBtn.addEventListener("click", () => {
  if (notationFlag) {
    notationFlag = false;
    currentOperation.value = Number(currentOperation.value).toExponential();
  } else {
    notationFlag = true;
    currentOperation.value = Number(currentOperation.value).toFixed(5);
  }
});
