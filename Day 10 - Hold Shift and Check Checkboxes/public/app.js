"use strict";
const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
    //flag
    let isBetween = false;
    //Check if shift key is pressed and input checked
    if (e.shiftKey && this.checked) {
        //loop over every checkbox to check
        checkBoxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
                isBetween = !isBetween;
            }
            if (isBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", handleCheck);
});
