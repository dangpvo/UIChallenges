const boxes = document.querySelectorAll(".box");
const targets = document.querySelectorAll(".target");

let currentTarget = null;

targets.forEach((target) => {
  target.addEventListener("dragstart", function (event) {
    this.classList.add("dragging");
    currentTarget = this;
  });

  target.addEventListener("dragend", function (event) {
    this.classList.remove("dragging");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", function (event) {
    event.preventDefault();
    // this.appendChild(currentTarget);
  });
  box.addEventListener("drop", function (event) {
    if (!box.querySelector(".target")) {
      this.appendChild(currentTarget);
    }
  });
});
