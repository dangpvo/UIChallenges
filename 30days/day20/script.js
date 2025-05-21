const text = document.querySelector(".typing-wrapper-js p");
const originContext = text.innerHTML;

let index = 0;

/* 
// Old way to implement
let isForward = true;

setInterval(() => {
  if (isForward) {
    index++;
    isForward = index < originContext.length;
  } else {
    index--;
    isForward = index <= 0;
  }

  text.innerHTML = originContext.substring(0, index);
}, 100);*/

// New updated way to implement with reverse effect
let reverse = false;
function typeText() {
  if (index < originContext.length && !reverse) {
    text.innerText = originContext.slice(0, index + 1);
    index++;
  } else if (index >= 0 && reverse) {
    text.innerText = originContext.slice(0, index);
    index--;
  } else {
    reverse = !reverse;
  }

  const typingSpeed = reverse ? 30 : 90; // Adjust typing and reversing speed
  setTimeout(typeText, typingSpeed);
}

typeText();
