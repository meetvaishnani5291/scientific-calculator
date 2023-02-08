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
let cubeBtn = document.querySelector(".cube-btn");
let cuberootBtn = document.querySelector(".cuberoot-btn");
let twopowerBtn = document.querySelector(".twopower-btn");
let nthrootBtn = document.querySelector(".nthroot-btn");
let logybasebtn = document.querySelector(".logybase-btn");
let epowerBtn = document.querySelector(".epower-btn");
let degreeBtn = document.querySelector(".degree-btn");
let notationBtn = document.querySelector(".notation-btn");
let mstoreBtn = document.querySelector(".mstore-btn");
let mreadBtn = document.querySelector(".mread-btn");
let mclearBtn = document.querySelector(".mclear-btn");
let maddBtn = document.querySelector(".madd-btn");
let msubtractBtn = document.querySelector(".msubtract-btn");
let trigonometryBtn = document.querySelector(".trigonometry-btn");
let functionsBtn = document.querySelector(".functions-btn");
let trigonometryDropdown1 = document.querySelector(".dropdown1-1");
let trigonometryDropdown2 = document.querySelector(".dropdown1-2");
let trigonometryDropdown3 = document.querySelector(".dropdown1-3");
let trigonometryDropdown4 = document.querySelector(".dropdown1-4");
let trigonometrySecondBtns = document.querySelectorAll(
  ".trigonometry-second-btn"
);
let trigonometryHypBtns = document.querySelectorAll(".hyp-btn");
let trigonometryDropdownMain = document.querySelector(".dropdown1");

let trigonometrySecondFlag = false;
let trigonometryHypFlag = false;
let degreeFlag = true;
let meomry = [];

let evaluate = function () {
  try {
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
    currentOperation.value.slice(-1) !== "x" &&
    currentOperation.value.slice(-1) !== "e"
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
let trigonometryDropdownDisplay = function () {
  if (trigonometrySecondFlag && trigonometryHypFlag) {
    trigonometryDropdown1.style = "display : none";
    trigonometryDropdown2.style = "display : none";
    trigonometryDropdown3.style = "display : none";
    trigonometryDropdown4.style = "display : block";
  } else if (trigonometrySecondFlag && !trigonometryHypFlag) {
    trigonometryDropdown1.style = "display : none";
    trigonometryDropdown2.style = "display : block";
    trigonometryDropdown3.style = "display : none";
    trigonometryDropdown4.style = "display : none";
  } else if (!trigonometrySecondFlag && trigonometryHypFlag) {
    trigonometryDropdown1.style = "display : none";
    trigonometryDropdown2.style = "display : none";
    trigonometryDropdown3.style = "display : block";
    trigonometryDropdown4.style = "display : none";
  } else {
    trigonometryDropdown1.style = "display : block";
    trigonometryDropdown2.style = "display : none";
    trigonometryDropdown3.style = "display : none";
    trigonometryDropdown4.style = "display : none";
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
    let operationExpression = currentOperation.value;
    currentOperation.value = -1 * currentOperation.value;
    previousOperation.value = "-(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});

factorialBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = parseInt(currentOperation.value),
      res = 1;
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = operationExpression + "!";
    while (operationExpression) res = res * operationExpression--;
    currentOperation.value = res;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
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
    let operationExpression = currentOperation.value;
    currentOperation.value = currentOperation.value ** 2;
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = operationExpression;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
inverseBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = 1 / currentOperation.value;
    previousOperation.value = "1/" + operationExpression;
    if (isNaN(currentOperation.value)) throw "Not a number";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
absBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.abs(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "abs(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
expBtn.addEventListener("click", (event) => {
  try {
    if (!currentOperation.value.length) {
      return;
    }
    if (!isNaN(currentOperation.value.slice(-1))) {
      currentOperation.value += ".e";
    }
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
epowerBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.exp(currentOperation.value);
    previousOperation.value = operationExpression;
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
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.log(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "ln(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
logBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.log10(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "log(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
tenpowerBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = 10 ** currentOperation.value;
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "10^" + operationExpression;
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
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.sqrt(currentOperation.value);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "sqrt(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
secondBtn.addEventListener("click", () => {
  alternativeFunctionsBtns.forEach((button) => {
    button.classList.toggle("hide-btn");
  });
});
cuberootBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.cbrt(operationExpression);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "3rdRoot(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
cubeBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.pow(operationExpression, 3);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = operationExpression + "^3";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
cuberootBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.cbrt(operationExpression);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "3rdRoot(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
logybasebtn.addEventListener("click", (event) => {
  try {
    let inputNumber = currentOperation.value;
    if (isNaN(currentOperation.value)) throw "Not a number";

    previousOperation.value = "3rdRoot(" + operationExpression + ")";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
twopowerBtn.addEventListener("click", (event) => {
  try {
    let operationExpression = currentOperation.value;
    currentOperation.value = Math.pow(2, operationExpression);
    if (isNaN(currentOperation.value)) throw "Not a number";
    previousOperation.value = "2^" + operationExpression;
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
trigonometryBtn.addEventListener("click", () => {
  trigonometryDropdownMain.classList.toggle("hide-btn");
});
trigonometrySecondBtns.forEach((button) => {
  button.addEventListener("click", () => {
    trigonometrySecondFlag = trigonometrySecondFlag ? 0 : 1;
    trigonometryDropdownDisplay();
  });
});
trigonometryHypBtns.forEach((button) => {
  button.addEventListener("click", () => {
    trigonometryHypFlag = trigonometryHypFlag ? 0 : 1;
    trigonometryDropdownDisplay();
  });
});
degreeBtn.addEventListener("click", () => {
  if (degreeFlag) {
    degreeFlag = false;
    degreeBtn.innerHTML = "RAD";
  } else {
    degreeFlag = true;
    degreeBtn.innerHTML = "DEG";
  }
});
// notationBtn.addEventListener("click", () => {
//   if(notationFlag){
//     notationFlag = false;
//     Number(currentOperation.value).toS
//   }else {
//     notationFlag = true;
//   }
// });

maddBtn.addEventListener("click", () => {
  if (meomry.length === 0) {
    meomry[0] = 0;
  }
  if (!isNaN(currentOperation.value)) {
    meomry[meomry.length - 1] += Number(currentOperation.value);
  }
});
msubtractBtn.addEventListener("click", () => {
  if (meomry.length === 0) {
    meomry[0] = 0;
  }
  if (!isNaN(currentOperation.value)) {
    meomry[meomry.length - 1] -= Number(currentOperation.value);
  }
});
mclearBtn.addEventListener("click", () => {
  meomry = [];
});
mreadBtn.addEventListener("click", () => {
  if (meomry.length === 0) return;
  currentOperation.value = meomry.at(-1);
});
mstoreBtn.addEventListener("click", () => {
  meomry.push(0);
});

//  function for calcution of all trigonomerty functions
let trigonometryCalculate = function (event) {
  let inputNumber = currentOperation.value;
  let trigonometryOpeartion = event.target.id;
  try {
    let degreeForFunction = degreeFlag
      ? (currentOperation.value * Math.PI) / 180
      : currentOperation.value;
    if (trigonometryOpeartion.slice(-1) == "h") {
      currentOperation.value = Math[trigonometryOpeartion](
        currentOperation.value
      );
      if (trigonometryOpeartion[0] == "a") {
        previousOperation.value = trigonometryOpeartion + "(" + inputNumber + ")";
      } else {
        previousOperation.value = "sinh(" + inputNumber + ")";
      }
    } else if (trigonometryOpeartion.slice[0] == "a") {
      currentOperation.value = degreeFlag
        ? (180 / Math.PI) * Math[trigonometryOpeartion](currentOperation.value)
        : Math[trigonometryOpeartion](currentOperation.value);
        previousOperation.value = "sinh`("+inputNumber + ')';
    } else {
      currentOperation.value = Math[trigonometryOpeartion](degreeForFunction);
    }
    if (isNaN(currentOperation.value)) throw "Not a number.";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
};
document
  .querySelector(".sin-btn")
  .addEventListener("click", trigonometryCalculate);
