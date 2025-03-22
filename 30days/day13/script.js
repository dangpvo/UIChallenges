const imgLoader = document.querySelector("#img-loader");
const imgPreview = document.querySelector(".img-preview");
const errorMsg = document.querySelector(".error");

imgLoader.addEventListener("change", function (e) {
  let img = document.createElement("img");

  let file = imgLoader.files[0];

  if (!file) {
    return;
  }

  if (!file.name.endsWith(".jpg") && !file.name.endsWith(".png")) {
    errorMsg.innerText = "The file extension is incorrect!";
    return;
  } else {
    errorMsg.innerText = "";
  }

  if (file.size / (1024 * 1024) > 5) {
    //>5MB
    errorMsg.innerText = "the file size exceeds the allowed limit (5MB).";
    return;
  } else {
    errorMsg.innerText = "";
  }

  //Opt 1 using blob
  //img.src = URL.createObjectURL(imgLoader.files[0]);

  //Opt 2 using fileReader Base64
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onloadend = function (e) {
    img.src = e.target.result;
  };

  imgPreview.appendChild(img);
});
