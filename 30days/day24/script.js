const body = document.body;
const container = document.querySelector(".container");

function randomColor() {
  let charColor = "0123456789ABCDEF";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }

  return color;
}

const numSquares = 198;
for (let index = 0; index < numSquares; index++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", function (e) {
    let randColor = randomColor();
    e.currentTarget.style.background = randColor;
    e.currentTarget.style.boxShadow = `0 0 10px ${randColor}, 0 0 100px ${randColor}`;
  });

  square.addEventListener("mouseleave", function (e) {
    e.currentTarget.style.background = "#1d1d1d";
    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 0, 0, 1)";
  });

  container.appendChild(square);
}
