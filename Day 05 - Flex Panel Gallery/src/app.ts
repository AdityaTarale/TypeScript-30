"use strict";

const panels = document.querySelectorAll(
    ".panel"
) as NodeListOf<HTMLDivElement>;

function toggleOpen(this: HTMLDivElement, e: MouseEvent) {
    this.classList.toggle("open");
}

function toggleActive(this: HTMLDivElement, e: TransitionEvent) {
    // console.log(e.propertyName);

    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach((panel) => {
    panel.addEventListener("click", toggleOpen);
});

panels.forEach((panel) => {
    panel.addEventListener("transitionend", toggleActive);
});
