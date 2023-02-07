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
let piBtn = document.querySelector(".const-pi");
let eBtn = document.querySelector(".const-e");
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
let secondBtn = document.querySelector(".second-btn");
let alternativeFunctionsBtns = document.querySelectorAll(".second");

let evaluate = function () {
  try {
    if (!currentOperation.value.length) {
      return;
    }
    let temp = currentOperation.value;
    currentOperation.value = currentOperation.value.replaceAll("^", "**");
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

plusOrMinusBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = -1 * currentOperation.value;
    previousOperation.value = "-(" + temp + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});

// factorialBtn.addEventListener(
//     "click",
//     (event) => {
//         try{
//             let temp = currentOperation.value;
//             currentOperation.value = -1 * currentOperation.value;
//             previousOperation.value = temp;

//         }catch(err){
//             currentOperation.value = "Invalid syntax";
//         }
//     }
// );
piBtn.addEventListener("click", (event) => {
  try {
    currentOperation.value = Math.PI;
    previousOperation.value = "PI";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
eBtn.addEventListener("click", (event) => {
  try {
    currentOperation.value = Math.E;
    previousOperation.value = "E";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
squareBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = currentOperation.value ** 2;
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = temp;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
inverseBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = 1 / currentOperation.value;
    previousOperation.value = "1/" + temp;
    if (isNaN(currentOperation.value)) throw "Not a number";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
absBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = Math.abs(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "abs(" + temp + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
expBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = Math.exp(currentOperation.value);
    previousOperation.value = temp;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
modBtn.addEventListener("click", (event) => {
  try {
    if (!currentOperation.value.length) {
      return;
    }
    if (
      !isNaN(currentOperation.value.slice(-1)) ||
      currentOperation.value.slice(-1) == ")"
    ) {
      currentOperation.value += "%";
    }
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
lnBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = Math.log(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "ln(" + temp + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
logBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = Math.log10(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "log(" + temp + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
tenpowerBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = 10 ** currentOperation.value;
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "10^" + temp;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
xPowerBtn.addEventListener("click", (event) => {
  try {
    if (!currentOperation.value.length) {
      return;
    }
    if (
      !isNaN(currentOperation.value.slice(-1)) ||
      currentOperation.value.slice(-1) == ")"
    ) {
      currentOperation.value += "^";
    }
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
underootBtn.addEventListener("click", (event) => {
  try {
    let temp = currentOperation.value;
    currentOperation.value = Math.sqrt(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "sqrt(" + temp + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
secondBtn.addEventListener("click", () => {
  alternativeFunctionsBtns.forEach((button) => {
    button.classList.toggle("hide-btn");
  });
});
