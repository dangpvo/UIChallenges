const imgFeature = document.querySelector(".img-feature");
const listImage = document.querySelectorAll(".list-image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateImageByIndex(index) {
  currentIndex = index;
  let currentItem = listImage[index];
  imgFeature.src = currentItem.getAttribute("src");

  const listImageWrapper = document.querySelectorAll(
    ".list-image .img-wrapper"
  );

  listImageWrapper.forEach((item) => {
    item.classList.remove("active");
  });
  currentItem.parentElement.classList.add("active");
}

listImage.forEach((imgEle, index) => {
  imgEle.addEventListener("click", function (e) {
    imgFeature.style.opacity = "0";

    setTimeout(() => {
      updateImageByIndex(index);
      imgFeature.style.opacity = "1";
    }, 400);
  });
});

prevBtn.addEventListener("click", function (e) {
  currentIndex = currentIndex == 0 ? listImage.length - 1 : currentIndex - 1;

  imgFeature.style.animation = "";

  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  }, 200);
});

nextBtn.addEventListener("click", function (e) {
  currentIndex = currentIndex == listImage.length - 1 ? 0 : currentIndex + 1;

  imgFeature.style.animation = "";

  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  }, 200);
});
