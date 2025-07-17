const imgs = document.querySelectorAll(".zoomer img");
const mirror = document.querySelector("#mirror");

let scope = 4;

imgs.forEach((img) => {
  img.addEventListener("mousemove", function (e) {
    mirror.classList.remove("hide");

    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;

    mirror.style.background = `url(${img.src})`;
    mirror.style.backgroundSize = `1000px 1000px`;

    let percentMouseOfW = (e.offsetX / this.offsetWidth) * 100;
    let percentMouseOfH = (e.offsetY / this.offsetHeight) * 100;

    mirror.style.backgroundPosition = `${percentMouseOfW}% ${percentMouseOfH}%`;
  });

  img.addEventListener("mouseleave", function (e) {
    mirror.classList.add("hide");
  });
});
