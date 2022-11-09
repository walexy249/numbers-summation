// (function () {
//   // …

//   // Select your input element.
//   var number = document.querySelectorAll(".boxes");

//   // Listen for input event on numInput.

//   for (let i = 0; i < number.length; i++) {
//     number[i].onkeydown = function (e) {
//       if (
//         !(
//           (e.keyCode > 95 && e.keyCode < 106) ||
//           (e.keyCode > 47 && e.keyCode < 58) ||
//           e.keyCode == 8
//         )
//       ) {
//         return false;
//       }
//     };
//   }
// })();

const btnReset = document.getElementById("reset");
const btnSubmit = document.getElementById("submit");
let total = document.getElementById("total");

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

// input odd element
let inputOdd = document.getElementById("odd");

// input even element
let inputEven = document.getElementById("even");

btnSubmit.addEventListener("click", function () {
  let input = document.querySelectorAll(".box");

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    sum += +input[i].value;
  }
  if (sum <= 1000) {
    total.value = sum;
  } else {
    total.value = 1000;
  }
});

btnReset.addEventListener("click", function () {
  let input = document.querySelectorAll(".boxes");
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
});

btnReset.addEventListener("click", function () {
  console.log(total.value);
  console.log(point.innerHTML);
});

inputTop0.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top0");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop0.value;
  }
});

inputTop1.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top1");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop1.value;
  }
});

inputTop2.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top2");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop2.value;
  }
});

inputTop3.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top3");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop3.value;
  }
});

inputTop4.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top4");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop4.value;
  }
});

inputTop5.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top5");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop5.value;
  }
});

inputTop6.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top6");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop6.value;
  }
});

inputTop7.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top7");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop7.value;
  }
});

inputTop8.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top8");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop8.value;
  }
});

inputTop9.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top9");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputTop9.value;
  }
});

inputSide0.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side0");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide0.value;
  }
});

inputSide1.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side1");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide1.value;
  }
});

inputSide2.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side2");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide2.value;
  }
});

inputSide3.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side3");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide3.value;
  }
});

inputSide4.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side4");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide4.value;
  }
});

inputSide5.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side5");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide5.value;
  }
});

inputSide6.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side6");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide6.value;
  }
});

inputSide7.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side7");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide7.value;
  }
});

inputSide8.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side8");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide8.value;
  }
});

inputSide9.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side9");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputSide9.value;
  }
});

inputOdd.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".odd");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputOdd.value;
  }
});

inputEven.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".even");

  for (let i = 0; i < input.length; i++) {
    input[i].value = inputEven.value;
  }
});
