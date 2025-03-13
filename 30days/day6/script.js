const eKey = document.querySelector(".card.key p:nth-child(2)");
const eLocation = document.querySelector(".card.location p:nth-child(2)");
const eCode = document.querySelector(".card.code p:nth-child(2)");
const eName = document.querySelector(".card.name p:nth-child(2)");
const result = document.querySelector(".result");

const alert = document.querySelector(".alert");
const box = document.querySelector(".box");

document.addEventListener("keydown", (e) => {
  alert.classList.add("hide");
  box.classList.remove("hide");

  eKey.innerText = e.which == 32 ? "Space" : e.key;
  eLocation.innerText = e.location;
  eCode.innerText = e.which;
  eName.innerText = e.code;
  result.innerText = e.which;
});
