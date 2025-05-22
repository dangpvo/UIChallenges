const input = document.querySelector("#switch");
const body = document.querySelector("body");

input.addEventListener("click", function (e) {
  let value = this.checked;
  if (value) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
