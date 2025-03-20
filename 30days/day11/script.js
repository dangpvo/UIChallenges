const btnSuccess = document.querySelector(".btn.success");
const btnWarning = document.querySelector(".btn.warning");
const btnError = document.querySelector(".btn.error");

const toastList = document.querySelector(".toast-wrapper");

function showToast(input) {
  input.classList.remove("hide-toast");
  input.classList.add("show-toast");
}

function hideToast(input) {
  input.classList.remove("show-toast");
  input.classList.add("hide-toast");
}

function createToast(status, timeout) {
  let toast = document.createElement("div");

  toast.classList.add("toast");
  toast.classList.add(status);
  //   toast.classList.add("show-toast");

  switch (status) {
    case "success":
      toast.innerHTML = `<i class="bx bxs-check-circle"></i>
        <span class="message">This is success message.</span>
        <div class="countdown"></div>`;
      break;
    case "warning":
      toast.innerHTML = `<i class="bx bxs-error-alt"></i>
        <span class="message">This is warning message.</span>
        <div class="countdown"></div>`;
      break;
    case "error":
      toast.innerHTML = `<i class="bx bxs-error"></i>
        <span class="message">This is error message.</span>
        <div class="countdown"></div>`;
      break;
  }

  toastList.appendChild(toast);
  timeout = timeout || 4000;
  setTimeout(() => {
    toast.style.animation = `slidehide 5s ease forwards`;
    // toast.classList.remove("show-toast");
    // toast.classList.add("hide-toast");
  }, timeout);
  setTimeout(() => {
    toast.remove();
  }, timeout + 4000);
}

btnSuccess.addEventListener("click", function () {
  createToast("success", 6000);
});

btnWarning.addEventListener("click", function () {
  createToast("warning", 6000);
});

btnError.addEventListener("click", function () {
  createToast("error", 6000);
});
