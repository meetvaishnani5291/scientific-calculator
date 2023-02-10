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
let plusOrMinusBtn = document.querySelector(".plus-or-minus");

let valueForLogybaseFunctions = "Not a Number";
let valueForNthrootFunctions = "Not a Number";

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
    previousOperation.value = "e^" + operationExpression;
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
logybasebtn.addEventListener("click", (event) => {
  try {
    if (isNaN(currentOperation.value)) throw "Not a number";
    valueForLogybaseFunctions = Number(currentOperation.value);
    previousOperation.value = valueForLogybaseFunctions + "logybase";
    currentOperation.value = "";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
nthrootBtn.addEventListener("click", (event) => {
  try {
    if (isNaN(currentOperation.value)) throw "Not a number";
    valueForNthrootFunctions = Number(currentOperation.value);
    currentOperation.value = "";
    previousOperation.value = valueForNthrootFunctions + "nthroot";
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
});
