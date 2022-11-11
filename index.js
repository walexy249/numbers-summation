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

let topArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let sideArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// input odd element
let inputOdd = document.getElementById("odd");

// input even element
let inputEven = document.getElementById("even");

function computeTotal() {
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
}

btnSubmit.addEventListener("click", function () {
  computeTotal();
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
  console.log(inputTop0.value);
  topArr[0] = +inputTop0.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop0.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop0.value;
      } else {
        input[i].value = sideArr[i] + +inputTop0.value;
      }
    }
  }
});

inputTop1.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top1");
  topArr[1] = +inputTop1.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop1.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop1.value;
      } else {
        input[i].value = sideArr[i] + +inputTop1.value;
      }
    }
  }
});

inputTop2.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top2");
  topArr[2] = +inputTop2.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop2.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop2.value;
      } else {
        input[i].value = sideArr[i] + +inputTop2.value;
      }
    }
  }
});

inputTop3.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top3");
  topArr[3] = +inputTop3.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop3.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop3.value;
      } else {
        input[i].value = sideArr[i] + +inputTop3.value;
      }
    }
  }
});

inputTop4.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top4");
  topArr[4] = +inputTop4.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop4.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop4.value;
      } else {
        input[i].value = sideArr[i] + +inputTop4.value;
      }
    }
  }
});

inputTop5.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top5");
  topArr[5] = +inputTop5.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop5.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop5.value;
      } else {
        input[i].value = sideArr[i] + +inputTop5.value;
      }
    }
  }
});

inputTop6.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top6");
  topArr[6] = +inputTop6.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop6.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop6.value;
      } else {
        input[i].value = sideArr[i] + +inputTop6.value;
      }
    }
  }
});

inputTop7.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top7");
  topArr[7] = +inputTop7.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop7.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop7.value;
      } else {
        input[i].value = sideArr[i] + +inputTop7.value;
      }
    }
  }
});

inputTop8.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top8");
  topArr[8] = +inputTop8.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop8.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop8.value;
      } else {
        input[i].value = sideArr[i] + +inputTop8.value;
      }
    }
  }
});

inputTop9.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".top9");
  topArr[9] = +inputTop9.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputTop9.value;
    } else {
      if (sideArr[i] === 0) {
        input[i].value = inputTop9.value;
      } else {
        input[i].value = sideArr[i] + +inputTop9.value;
      }
    }
  }
});

inputSide0.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side0");
  sideArr[0] = +inputSide0.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide0.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide0.value;
      } else {
        input[i].value = topArr[i] + +inputSide0.value;
      }
    }
  }
});

inputSide1.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side1");
  sideArr[1] = +inputSide1.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide1.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide1.value;
      } else {
        input[i].value = topArr[i] + +inputSide1.value;
      }
    }
  }
});

inputSide2.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side2");
  sideArr[2] = +inputSide2.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide2.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide2.value;
      } else {
        input[i].value = topArr[i] + +inputSide2.value;
      }
    }
  }
});

inputSide3.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side3");
  sideArr[3] = +inputSide3.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide3.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide3.value;
      } else {
        input[i].value = topArr[i] + +inputSide3.value;
      }
    }
  }
});

inputSide4.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side4");
  sideArr[4] = +inputSide4.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide4.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide4.value;
      } else {
        input[i].value = topArr[i] + +inputSide4.value;
      }
    }
  }
});

inputSide5.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side5");
  sideArr[5] = +inputSide5.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide5.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide5.value;
      } else {
        input[i].value = topArr[i] + +inputSide5.value;
      }
    }
  }
});

inputSide6.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side6");
  sideArr[6] = +inputSide6.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide6.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide6.value;
      } else {
        input[i].value = topArr[i] + +inputSide6.value;
      }
    }
  }
});

inputSide7.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side7");
  sideArr[7] = +inputSide7.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide7.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide7.value;
      } else {
        input[i].value = topArr[i] + +inputSide7.value;
      }
    }
  }
});

inputSide8.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side8");
  sideArr[8] = +inputSide8.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide8.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide8.value;
      } else {
        input[i].value = topArr[i] + +inputSide8.value;
      }
    }
  }
});

inputSide9.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".side9");
  sideArr[9] = +inputSide9.value;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].value = inputSide9.value;
    } else {
      if (topArr[i] === 0) {
        input[i].value = inputSide9.value;
      } else {
        input[i].value = topArr[i] + +inputSide9.value;
      }
    }
  }
});

inputOdd.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".odd");
  for (let i = 0; i < input.length; i++) {
    let id = input[i].id.split("x")[1];
    let [sideIndex, topIndex] = id.split("");
    sideIndex = parseInt(sideIndex);
    topIndex = parseInt(topIndex);
    console.log(sideIndex, topIndex);
    if (input[i].value === "") {
      input[i].value = inputOdd.value;
    } else {
      let a = sideArr[sideIndex] + +inputOdd.value + topArr[topIndex];
      input[i].value = a == 0 ? "" : a;
    }
  }
});

inputEven.addEventListener("input", function (evt) {
  let input = document.querySelectorAll(".even");
  for (let i = 0; i < input.length; i++) {
    let id = input[i].id.split("x")[1];
    let [sideIndex, topIndex] = id.split("");
    sideIndex = parseInt(sideIndex);
    topIndex = parseInt(topIndex);
    console.log(sideIndex, topIndex);
    if (input[i].value === "") {
      input[i].value = inputEven.value;
    } else {
      let a = sideArr[sideIndex] + +inputEven.value + topArr[topIndex];
      input[i].value = a == 0 ? "" : a;
    }
  }
});

const inputs = [...document.querySelectorAll(".boxes")];
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", computeTotal);
}
