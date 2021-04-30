'use strict';
const contorls = document.querySelectorAll('.container input');
function handleControl() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}
contorls.forEach((control) => {
    control.addEventListener('change', handleControl);
});
contorls.forEach((control) => {
    control.addEventListener('mousemove', handleControl);
});
