//  function for calcution of all trigonomerty functions
let degreeFlag = true;
let degreeBtn = document.querySelector(".degree-btn");

let trigonometryCalculate = function (event) {
  let inputNumber = currentOperation.value;
  let trigonometryOpeartion = event.currentTarget.id;
  try {
    let degreeForFunction = degreeFlag
      ? (currentOperation.value * Math.PI) / 180
      : currentOperation.value;
    if (trigonometryOpeartion.slice(-1) == "h") {
      currentOperation.value = Math[trigonometryOpeartion](
        currentOperation.value
      );
      if (trigonometryOpeartion[0] == "a") {
        previousOperation.value =
          trigonometryOpeartion.slice(1) + "I(" + inputNumber + ")";
      } else {
        previousOperation.value =
          trigonometryOpeartion.slice(0) + "(" + inputNumber + ")";
      }
    } else if (trigonometryOpeartion.slice(0, 1) == "a") {
      currentOperation.value = degreeFlag
        ? (180 / Math.PI) * Math[trigonometryOpeartion](currentOperation.value)
        : Math[trigonometryOpeartion](currentOperation.value);
      previousOperation.value =
        trigonometryOpeartion.slice(1) + "I(" + inputNumber + ")";
    } else {
      currentOperation.value = Math[trigonometryOpeartion](degreeForFunction);
      previousOperation.value = trigonometryOpeartion + "(" + inputNumber + ")";
    }
    if (isNaN(currentOperation.value)) throw "Not a number.";
    currentOperation.value = Number(currentOperation.value).toFixed(5);
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
};
let trigonometryCalculateForOther = function (event) {
  let inputNumber = currentOperation.value;
  let trigonometryOpeartion = event.currentTarget.id;
  let displayOperation = event.target.textContent.toString();
  try {
    let degreeForFunction = degreeFlag
      ? (currentOperation.value * Math.PI) / 180
      : currentOperation.value;
    if (trigonometryOpeartion.slice(-1) == "h") {
      if (trigonometryOpeartion[0] == "a") {
        currentOperation.value = Math[trigonometryOpeartion](
          1 / currentOperation.value
        );
        previousOperation.value =
          displayOperation.slice(0, 4) + "I(" + inputNumber + ")";
      } else {
        currentOperation.value =
          1 / Math[trigonometryOpeartion](currentOperation.value);
        previousOperation.value =
          displayOperation.slice(0, 4) + "(" + inputNumber + ")";
      }
    } else if (trigonometryOpeartion.slice(0, 1) == "a") {
      currentOperation.value = degreeFlag
        ? (180 / Math.PI) *
          Math[trigonometryOpeartion](1 / currentOperation.value)
        : Math[trigonometryOpeartion](1 / currentOperation.value);
      previousOperation.value =
        displayOperation.slice(0, 3) + "I(" + inputNumber + ")";
    } else {
      currentOperation.value =
        1 / Math[trigonometryOpeartion](degreeForFunction);
      previousOperation.value =
        displayOperation.slice(0, 3) + "(" + inputNumber + ")";
    }
    if (isNaN(currentOperation.value)) throw "Not a number.";
    currentOperation.value = Number(currentOperation.value).toFixed(5);
  } catch (err) {
    currentOperation.value = "Invalid syntax";
  }
};
document.querySelectorAll(".trigonometry").forEach((button) => {
  button.addEventListener("click", trigonometryCalculate);
});
document.querySelectorAll(".trigonometryOther").forEach((button) => {
  button.addEventListener("click", trigonometryCalculateForOther);
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
