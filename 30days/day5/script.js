const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", function () {
  searchInput.value = "";
  searchInput.focus();
  //Cách khác để đến ipnut
  //this.previousElementSibling
  searchBox.classList.toggle("show-box");
  //Cách khác để đến searchBox
  //this.parentElement
});
