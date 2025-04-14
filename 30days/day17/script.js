const facebook = document.querySelector(".facebook h2");
const youtube = document.querySelector(".youtube h2");
const tiktok = document.querySelector(".tiktok h2");

function count(element, to) {
  let count = 0;

  let counting = setInterval(() => {
    if (count < to) {
      count += (to * 10) / 1000;
      element.innerText = count;
    } else {
      clearInterval(counting);
      element.innerText = to;
    }
  }, 1);
}

count(facebook, 3300);
count(youtube, 1000);
count(tiktok, 9900);
