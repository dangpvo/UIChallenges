const img = document.querySelector("img");
const mirror = document.querySelector("#mirror");

img.addEventListener("mousemove", function (e) {
  let w = this.offsetWidth;
  let h = this.offsetHeight;

  // e.pageX là khoảng cách của chuột tới viền ngoài cùng X, tương tự cho Y
  // this.offsetLeft là khoảng cách của hình tới viền ngoài cùng X, tương tự cho Top là Y
  let mouseWithImgBorderX = e.pageX - this.offsetLeft;
  let mouseWithImgBorderY = e.pageY - this.offsetTop;

  let percentMouseByImgW = (mouseWithImgBorderX / w) * 100;
  let percentMouseByImgH = (mouseWithImgBorderX / h) * 100;

  if (
    e.pageX < this.offsetLeft ||
    e.pageX > this.offsetLeft + w ||
    e.pageY < this.offsetTop ||
    e.pageY > this.offsetTop + h
  ) {
    mirror.style.display = "none";
  } else {
    mirror.style.display = "block";
    mirror.style.backgroundPosition = `${percentMouseByImgW}% ${percentMouseByImgH}%`;
    mirror.style.top = `${e.pageY}px`;
    mirror.style.left = `${e.pageX}px`;
  }
});

// document.addEventListener("mousemove", (e) => {
//   mirror.style.top = `${e.clientY}px`;
//   mirror.style.left = `${e.clientX}px`;
// });
