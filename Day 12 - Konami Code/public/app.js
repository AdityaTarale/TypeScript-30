"use strict";
/*gif from github WeiChiaChang/easter-egg-collection */
var data = "https://weichiachang.github.io/easter-eggs-mobile/images/kumamon.gif";
const container = document.querySelector(".container");
const secretCode = "banyan";
let pressed = [];
function kumamon() {
    const img = new Image();
    img.src = data;
    img.style.width = "400px";
    img.style.height = "500px";
    img.style.position = "fixed";
    img.style.left = "calc(50%,-200px)";
    img.style.bottom = "-200px";
    img.style.transition = "10s all";
    document.body.appendChild(img);
    setTimeout(() => {
        img.style.bottom = "0";
    }, 100);
    setTimeout(() => {
        img.style.bottom = "-600px";
    }, 18300);
}
window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("") === secretCode) {
        kumamon();
        console.log("Secret code matched");
    }
});
