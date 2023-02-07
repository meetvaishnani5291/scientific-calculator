let numbersBtn = document.querySelectorAll(".number");
let previousOperation = document.querySelector(".previous-operation");
let currentOperation = document.querySelector(".current-operation");
let operatorsBtn = document.querySelectorAll(".operator");
let parenthesisOpenBtn = document.querySelector(".parenthesis-open");
let parenthesisCloseBtn = document.querySelector(".parenthesis-close");
let equaltoBtn = document.querySelector(".equalto");
let clearBtn = document.querySelector(".CE");
let backspaceBtn = document.querySelector(".back-space");

let plusOrMinusBtn = document.querySelector(".plus-or-minus");
let factorialBtn = document.querySelector(".factorial");
let piBtn = document.querySelector(".const-PI");
let eBtn = document.querySelector(".const-E");
let squareBtn = document.querySelector(".square");
let inverseBtn = document.querySelector(".inverse");
let absBtn = document.querySelector(".abs");
let expBtn = document.querySelector(".exp");
let modBtn = document.querySelector(".mod");
let lnBtn = document.querySelector(".ln");
let logBtn = document.querySelector(".log");
let tenpowerBtn = document.querySelector(".ten-power");
let xPowerBtn = document.querySelector(".x-power");
let underootBtn = document.querySelector(".underoot");


let evaluate = function () {
  try {
    if (!currentOperation.value.length) {
      return;
    }
    let temp = currentOperation.value;
    currentOperation.value = eval(currentOperation.value);
    previousOperation.value = temp;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
};
let clearInput = function () {
  currentOperation.value = "";
};
let removeLastSymbol = function () {
  console.log("clicked");
  currentOperation.value = currentOperation.value.slice(0, -1);
};
let appendInput = function (event) {
  if (currentOperation.value.slice(-1) == ")") {
    return;
  }
  if (currentOperation.value.slice(-1) == "x") {
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
    currentOperation.value.slice(-1) !== "x"
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

// plusOrMinusBtn.addEventListener("click", parenthesisOpen);
// factorialBtn.addEventListener("click", parenthesisOpen);
// piBtn.addEventListener("click", parenthesisOpen);
// eBtn.addEventListener("click", parenthesisOpen);
// squareBtn.addEventListener("click", parenthesisOpen);
// inverseBtn.addEventListener("click", parenthesisOpen);
// absBtn.addEventListener("click", parenthesisOpen);
// expBtn.addEventListener("click", parenthesisOpen);
// modBtn.addEventListener("click", parenthesisOpen);
// lnBtn.addEventListener("click", parenthesisOpen);
// logBtn.addEventListener("click", parenthesisOpen);
// tenpowerBtn.addEventListener("click", parenthesisOpen);
// xPowerBtn.addEventListener("click", parenthesisOpen);
// underootBtn.addEventListener("click", parenthesisOpen);