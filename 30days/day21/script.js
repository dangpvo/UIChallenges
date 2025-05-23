const input = document.querySelector("#switch");
const switchWrapper = document.querySelector(".switch-wrapper");
const body = document.querySelector("body");

function init() {
  let mode = localStorage.getItem("mode");
  body.setAttribute("class", mode);
}

init();

input.addEventListener("click", function (e) {
  body.classList.toggle("dark");
  let mode = body.getAttribute("class") ? "dark" : "";
  localStorage.setItem("mode", mode);
});

switchWrapper.addEventListener("click", function (e) {
  input.checked = !input.checked;
  body.classList.toggle("dark");
  let mode = body.getAttribute("class") ? "dark" : "";
  localStorage.setItem("mode", mode);
});
