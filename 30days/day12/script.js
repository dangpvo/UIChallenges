const range = document.querySelector(".range");
const process = document.querySelector(".process");
const percentVal = document.querySelector(".process span");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  percentVal.innerHTML = `${percent}%`;
}

range.addEventListener("mousemove", function (e) {
  //e.pageX -> giá trị vị trí tọa độ X của chuột
  //this.offsetLeft -> giá trị vị trí left của element range
  let processWidth = e.pageX - this.offsetLeft;
  //this.offsetWidth -> giá trị width của element range, hiện tại là 600px
  let percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  updateProcess(percent);
});

// const slider = document.getElementById("slider");
// slider.addEventListener("change", function (e) {
//   updateProcess(this.value);
// });
