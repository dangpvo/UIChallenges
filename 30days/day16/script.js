const homeH1 = document.querySelector(".home h1");
const animationElements = document.querySelectorAll(".show-on-scroll");

function animate(element) {
  let elementRec = element.getClientRects()[0];
  let heightScreen = window.innerHeight;

  //check if the block is inside the srceen
  if (!(elementRec.bottom < 0 || elementRec.top > heightScreen)) {
    element.classList.add("start");
  } else {
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((item) => animate(item));
}

window.onscroll = checkAnimation;
