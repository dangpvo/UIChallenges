const video = document.querySelector("video");
const play = document.querySelector(".play");
const timer = document.querySelector(".timer");
const progressFilled = document.querySelector(".progress-filled");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const volume = document.querySelector(".volume");
const volumeInput = document.querySelector(".volume input");
const volumeIcon = document.querySelector(".volume i");

let cacheVolume = 1;

function togglePlayVideo() {
  if (video.paused) {
    video.play();
    play.innerHTML = `<i class='bx bx-pause' ></i>`;
  } else {
    video.pause();
    play.innerHTML = `<i class="bx bx-play"></i>`;
  }
}

function updateTimer() {
  timer.innerHTML =
    formatTimeStr(video.currentTime) + "/" + formatTimeStr(video.duration);
  let percentProgress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percentProgress + "%";
}

function formatTimeStr(seccond) {
  let min = Math.floor(seccond / 60);
  let sec = Math.floor(seccond % 60);
  return `${min}:${sec}`;
}

function skip(skipTime) {
  video.currentTime += skipTime;
}

function updateVolumeIcon() {
  if (video.volume === 0) {
    volumeIcon.className = `bx bx-volume-mute`;
  } else {
    volumeIcon.className = `bx bx-volume-full`;
  }
}

play.addEventListener("click", togglePlayVideo);
video.addEventListener("click", togglePlayVideo);
video.addEventListener("timeupdate", updateTimer);
prev.addEventListener("click", () => skip(-5));
next.addEventListener("click", () => skip(5));

volumeInput.addEventListener("change", function () {
  cacheVolume = this.value;
  video.volume = this.value;

  updateVolumeIcon();
});

volumeIcon.addEventListener("click", function () {
  if (video.volume === 0) {
    video.volume = cacheVolume;
    volumeInput.value = cacheVolume;
  } else {
    video.volume = 0;
    volumeInput.value = 0;
  }

  updateVolumeIcon();
});
