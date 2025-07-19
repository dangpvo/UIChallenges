const cardImg = document.querySelector(".card-img");
const h2 = document.querySelector(".card-info h2");
const p = document.querySelector(".card-info p");
const button = document.querySelector(".card-info button");

setTimeout(() => {
  const image = document.createElement("img");
  image.src = "./bike1.jpg";
  cardImg.appendChild(image);

  h2.textContent = "Title";
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti magnam laudantium corporis magni suscipit accusamus quae sapiente impedit cumque accusantium similique consequuntur ducimus, saepe officiis fuga, tempora explicabo ea?";

  button.textContent = "Read more";
  button.style.background = "rgb(197, 233, 255)";
  button.style.color = "#000";

  cardImg.classList.remove("loading");
  h2.classList.remove("loading");
  p.classList.remove("loading");
  button.classList.remove("loading");
}, 2000);
