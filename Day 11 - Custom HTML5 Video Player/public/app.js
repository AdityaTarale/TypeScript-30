"use strict";
/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player__slider");
const skip = player.querySelectorAll("[data-skip]");
const fs = player.querySelector(".fs");
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}
function updateButton() {
    const icon = this.paused ? "►" : "❚❚";
    toggle.textContent = icon;
}
function skipButton() {
    const skip = this.dataset.skip;
    video.currentTime += +skip;
}
function handleRangeUpdate() {
    const name = this.name;
    const key = name;
    video[key] = +this.value;
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
}
/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", updateButton);
skip.forEach((button) => button.addEventListener("click", skipButton));
ranges.forEach((range) => range.addEventListener("click", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mousemove", () => mouseDown && scrub);
fs.addEventListener("click", () => video.requestFullscreen());
