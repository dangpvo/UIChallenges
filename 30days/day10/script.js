const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const todoList = document.querySelector(".todo");

const localStorageItemName = "todolist";
// todo object: text, status

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let value = input.value.trim();

  if (value) {
    addTask({
      text: value,
      status: "",
    });

    saveToDoList();
    input.value = "";
  }
});

function addTask(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
    <span>${todo.text}</span>
    <i class="bx bx-trash"></i>
    `;

  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  //toggle completed class attribute when click to li
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    saveToDoList();
  });

  //remove whole li when click to trash icon
  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();
    saveToDoList();
  });

  todoList.appendChild(li);
}

function saveToDoList() {
  let todoList = document.querySelectorAll("li");
  let todoStorage = [];
  todoList.forEach(function (item) {
    let text = item.querySelector("span").innerText;
    let status = item.getAttribute("class");

    todoStorage.push({ text, status });
  });

  localStorage.setItem(localStorageItemName, JSON.stringify(todoStorage));
}

function initData() {
  let data = JSON.parse(localStorage.getItem(localStorageItemName));
  data.forEach(function (item) {
    addTask(item);
  });
}

initData();
