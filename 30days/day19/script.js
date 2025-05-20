const colorPicker = document.querySelector("#color");
const eraserBtn = document.querySelector("#eraser");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const sizeText = document.querySelector("#size");
const saveBtn = document.querySelector("#save");
const clearBtn = document.querySelector("#clear");
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

var startPosition = {
  x: 0,
  y: 0,
};

var isDrawing = false;
var color = "#000000";
var minSizeVal = 5;
var maxSizeVal = 40;
var sizeVal = minSizeVal;
var stepChange = 2;

document.addEventListener("mousedown", function (e) {
  startPosition.x = e.offsetX;
  startPosition.y = e.offsetY;
  isDrawing = true;
});

document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    var endX = e.offsetX;
    var endY = e.offsetY;

    // first circle
    ctx.beginPath();
    ctx.arc(endX, endY, sizeVal, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    // then stroke
    ctx.beginPath();
    ctx.moveTo(startPosition.x, startPosition.y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.lineWidth = sizeVal * 2;
    ctx.stroke();

    startPosition.x = endX;
    startPosition.y = endY;
  }
});

document.addEventListener("mouseup", function (e) {
  isDrawing = false;
});

colorPicker.addEventListener("change", function (e) {
  color = e.target.value;
});

eraserBtn.addEventListener("click", function (e) {
  color = "#ffffff";
});

decreaseBtn.addEventListener("click", function (e) {
  sizeVal = sizeVal > minSizeVal ? sizeVal - stepChange : minSizeVal;
  sizeText.innerText = sizeVal;
});

increaseBtn.addEventListener("click", function (e) {
  sizeVal = sizeVal < maxSizeVal ? sizeVal + stepChange : maxSizeVal;
  sizeText.innerText = sizeVal;
});

clearBtn.addEventListener("click", function (e) {
  var canvasSize = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
});

saveBtn.addEventListener("click", function (e) {
  var imgData = canvas.toDataURL();
  saveBtn.setAttribute("href", imgData);
});
