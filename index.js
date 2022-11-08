const btnReset = document.getElementById("reset");
const btnSubmit = document.getElementById("submit");
let total = document.getElementById("total");
let inputOdd = document.getElementById("odd");
let inputEven = document.getElementById("even");
let point = document.getElementById("point");

// input top element
let inputTop0 = document.getElementById("top0");
let inputTop1 = document.getElementById("top1");
let inputTop2 = document.getElementById("top2");
let inputTop3 = document.getElementById("top3");
let inputTop4 = document.getElementById("top4");
let inputTop5 = document.getElementById("top5");
let inputTop6 = document.getElementById("top6");
let inputTop7 = document.getElementById("top7");
let inputTop8 = document.getElementById("top8");
let inputTop9 = document.getElementById("top9");

// input side element
let inputSide0 = document.getElementById("side0");
let inputSide1 = document.getElementById("side1");
let inputSide2 = document.getElementById("side2");
let inputSide3 = document.getElementById("side3");
let inputSide4 = document.getElementById("side4");
let inputSide5 = document.getElementById("side5");
let inputSide6 = document.getElementById("side6");
let inputSide7 = document.getElementById("side7");
let inputSide8 = document.getElementById("side8");
let inputSide9 = document.getElementById("side9");

btnSubmit.addEventListener("click", function () {
  console.log(total.value);
  console.log(point.innerHTML);
});

btnReset.addEventListener("click", function () {
  console.log(total.value);
  console.log(point.innerHTML);
});
