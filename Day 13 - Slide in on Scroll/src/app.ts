"use strict";

const sliderImages = document.querySelectorAll(
  ".slide-in"
) as NodeListOf<HTMLImageElement>;

const debounce = (fn: (args: IArguments) => void, delay: number = 40) => {
  let timer: number | null;
  return function (this: Window) {
    const context = this,
      args = arguments;
    if (timer) this.clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.call(context, args);
    }, delay);
  };
};
function checkSlide() {
  sliderImages.forEach((slideImage) => {
    // half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - slideImage.height / 2;
    // bottom of the image
    const imgBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slideInAt > slideImage.offsetTop;

    const isNotScrollPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrollPast) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
