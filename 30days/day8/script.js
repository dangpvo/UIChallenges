const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email convention
const form = document.querySelector("form");

function showError(input, msg) {
  let parent = input.parentElement;
  let errElement = parent.querySelector("small");

  parent.classList.add("error");
  errElement.innerText = msg;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let errElement = parent.querySelector("small");

  parent.classList.remove("error");
  errElement.innerText = "";
}

function checkEmptyInput(listInput) {
  let isEmpty = false;

  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      showError(input, "Input could not be empty!");
    } else {
      showSuccess(input);
    }
  });

  return isEmpty;
}

function isEmailValid(input) {
  let emailVal = input.value.trim();
  let isEmailValid = true;

  if (!emailRegex.test(emailVal)) {
    isEmailValid = false;
    showError(input, "Your email is not correct.");
    input.focus();
  } else {
    showSuccess(input);
  }

  return isEmailValid;
}

function isPasswordValid(input) {
  let passwordVal = input.value.trim();
  let min = 6,
    max = 20;

  if (passwordVal.length < min) {
    showError(
      input,
      "Your password must contain at least " + min + " characters"
    );
    return false;
  }

  if (passwordVal.length > max) {
    showError(input, "Your password must contain max " + max + " characters");
    return false;
  }

  showSuccess(input);
  return true;
}

function isConfirmPasswordValid(passwordInput, cPasswordInput) {
  let passwordVal = passwordInput.value.trim();
  let cPasswordVal = cPasswordInput.value.trim();

  if (passwordVal.length != cPasswordVal.length) {
    showError(cPasswordInput, "Password do NOT match");
    return false;
  }

  showSuccess(cPasswordInput);
  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmpty = checkEmptyInput([username, email, password, cPassword]);
  let emailValid = isEmailValid(email);
  let passwordValid = isPasswordValid(password);
  let cPasswordValid = isConfirmPasswordValid(password, cPassword);

  if (isEmpty || !emailValid || !passwordValid || !cPasswordValid) {
    //do nothing
  } else {
    //do logic
  }
});
