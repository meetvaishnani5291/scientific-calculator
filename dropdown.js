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
let functionsDropdown = document.querySelector(".dropdown2");

let trigonometrySecondFlag = false;
let trigonometryHypFlag = false;
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
functionsBtn.addEventListener("click", () => {
  functionsDropdown.classList.toggle("hide-btn");
});
