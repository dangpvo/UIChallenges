const products = document.querySelector(".products");

let mockData = fetch("http://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    products.innerHTML = "";
    data.forEach((item) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product-item");
      newProduct.innerHTML = `
            <img src="${item.image}" alt="" />
            <div class="product-item-info">
                <div class="product-name">${item.title}</div>
                <div class="product-price">${item.price}</div>
            </div>
        `;

      products.appendChild(newProduct);
    });
  });

const searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let searchToken = e.target.value.trim().toLowerCase();
  let listProductsDOM = document.querySelectorAll(".product-item");
  listProductsDOM.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchToken)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
