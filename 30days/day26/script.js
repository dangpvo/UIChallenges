const input = document.querySelector(".form-input input");
const eyeIcon = document.querySelector(".form-input i");
const button = document.querySelector("button");

const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const characters = document.querySelector(".characters");

eyeIcon.addEventListener("click", function () {
  if (input.getAttribute("type") === "text") {
    input.setAttribute("type", "password");
  } else {
    input.setAttribute("type", "text");
  }
});

input.addEventListener("input", function () {
  let value = this.value;

  const rules = [
    { regex: /[a-z]/, element: lowercase },
    { regex: /[A-Z]/, element: uppercase },
    { regex: /[0-9]/, element: number },
    { regex: /\W/, element: symbol },
    { test: (v) => v.length >= 8, element: characters },
  ];

  let allValid = true;

  rules.forEach(({ regex, test, element }) => {
    const isValid = test ? test(value) : regex.test(value);
    element.classList.toggle("valid", isValid);
    if (!isValid) allValid = false;
  });

  button.disabled = !allValid;
  button.style.cursor = allValid ? "pointer" : "not-allowed";
});
