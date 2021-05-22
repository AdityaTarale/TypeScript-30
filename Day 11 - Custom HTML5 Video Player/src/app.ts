"use strict";

/* Get Our Elements */
const player = document.querySelector(".player") as HTMLDivElement;
const video = player.querySelector(".viewer") as HTMLVideoElement;
const progress = player.querySelector(".progress") as HTMLDivElement;
const progressBar = player.querySelector(".progress__filled") as HTMLDivElement;
const toggle = player.querySelector(".toggle") as HTMLButtonElement;
const ranges = player.querySelectorAll(
  ".player__slider"
) as NodeListOf<HTMLInputElement>;
const skip = player.querySelectorAll(
  "[data-skip]"
) as NodeListOf<HTMLInputElement>;
const fs = player.querySelector(".fs") as HTMLButtonElement;

/* Build out functions */
type ToggleAction = "play" | "pause";

function togglePlay(): void {
  const method: ToggleAction = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton(this: HTMLVideoElement): void {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}

function skipButton(this: HTMLButtonElement): void {
  const skip = this.dataset.skip as string;
  video.currentTime += +skip;
}

type SliderRange = "volume" | "playbackRate";

function handleRangeUpdate(this: HTMLInputElement) {
  const name: string = this.name;
  const key: SliderRange = name as SliderRange;
  video[key] = +this.value;
}

function handleProgress() {
  const percent: number = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e: MouseEvent) {
  const time: number = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", updateButton);
skip.forEach((button) => button.addEventListener("click", skipButton));
ranges.forEach((range) => range.addEventListener("click", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
video.addEventListener("timeupdate", handleProgress);

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mousemove", () => mouseDown && scrub);
fs.addEventListener("click", () => video.requestFullscreen());
