"use strict";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = "round";
ctx.lineJoin = "round";
// ctx.globalCompositeOperation = "multiply";
var lastX: number = 0;
var lastY: number = 0;

var isDrawing: boolean = false; //flag;
var hue: number = 0;
var direction: boolean = true;

const draw = (e: MouseEvent): void => {
    if (!isDrawing) return; //return function if the mouse is not down.

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    //start from
    ctx.moveTo(lastX, lastY);
    //end to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

    if (hue >= 360) {
        hue = 0;
    }
    hue++;
};

canvas.addEventListener("mousedown", (e): void => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", (): boolean => (isDrawing = false));
canvas.addEventListener("mouseup", (): boolean => (isDrawing = false));
