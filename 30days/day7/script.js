const content = document.querySelector(".content");
const input = document.querySelector(".content input");
const btnRemoveAll = document.querySelector(".remove-all");

var tags = ["tag1", "tag2"];

function renderTags() {
  content.innerHTML = "";
  for (let index = 0; index < tags.length; index++) {
    const element = tags[index];
    content.innerHTML += `
        <li>
          ${element}
          <i class="bx bx-x" onclick="removeTag(${index})"></i>
        </li>
        `;
  }

  content.appendChild(input);
  input.focus();
}

function removeTag(index) {
  tags.splice(index, 1); //xóa 1 phần tử tại index của arr
  renderTags();
}

renderTags();

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    var newVal = input.value.trim();
    tags.push(newVal);
    renderTags();
    input.value = "";
  }
});

btnRemoveAll.addEventListener("click", function () {
  tags = [];
  renderTags();
});
