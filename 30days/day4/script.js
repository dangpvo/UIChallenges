const images = document.querySelectorAll(".item-image img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const btnClose = document.querySelector(".close");
const galleryImg = document.querySelector(".gallery-inner img");
const gallery = document.querySelector(".gallery");

var currentIndex = 0;

function showGallery() {
  gallery.classList.add("show");
  galleryImg.src = images[currentIndex].src;

  if (currentIndex == 0) {
    btnPrev.classList.add("hide");
  } else {
    btnPrev.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }
}

function hideGallery() {
  gallery.classList.remove("show");
}

images.forEach((item, index) => {
  item.addEventListener("click", function (params) {
    currentIndex = index;
    showGallery();
  });
});

btnClose.addEventListener("click", function () {
  hideGallery();
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    //nút ESC
    hideGallery();
  }
});

btnPrev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

btnNext.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
