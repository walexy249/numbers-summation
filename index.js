const reset = document.getElementById("reset");
const btnSubmit = document.getElementById("submit");
let total = document.getElementById("total");
let point = document.getElementById("point");

btnSubmit.addEventListener("click", function () {
  console.log(total.value);
  console.log(point.innerHTML);
});
