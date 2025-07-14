const imgList = document.querySelectorAll("img");
const foodContainer = document.querySelector(".food-container");
const btnList = document.querySelectorAll("button");

// init data
let arr = [];
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});

function renderData(list) {
  foodContainer.innerHTML = ``;
  list.forEach((item) => {
    let imgEle = document.createElement("img");
    imgEle.src = item.src;
    imgEle.setAttribute("type", item.type);
    let imgDiv = document.createElement("div");
    imgDiv.className = "food";
    imgDiv.appendChild(imgEle);
    foodContainer.append(imgDiv);
  });
}

function applyActiveBtn(type) {
  btnList.forEach((btn) => {
    if (btn.getAttribute("type") === type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let type = e.currentTarget.getAttribute("type");
    let filterData =
      type === "all" ? arr : arr.filter((item) => item.type === type);
    renderData(filterData);
    applyActiveBtn(type);
  });
});
