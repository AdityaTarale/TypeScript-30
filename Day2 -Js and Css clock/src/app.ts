'use strict';

const hour = document.querySelector('#hour_hand') as HTMLDivElement;
const minute = document.querySelector('#minute_hand') as HTMLDivElement;
const second = document.querySelector('#second_hand') as HTMLDivElement;

const setTime = (): void => {
    const time = new Date() as Date;

    const hourTime: number = time.getHours();
    const minuteTime: number = time.getMinutes();
    const secondTime: number = time.getSeconds();

    // console.log(hourTime, minuteTime, secondTime);

    const secondsDegree = (secondTime / 60) * 360 + 90;
    const minutesDegree = (minuteTime / 60) * 360 + (secondTime / 60) * 6 + 90;
    const hoursDegree = (hourTime / 12) * 360 + (minuteTime / 60) * 30 + 90;

    second.style.transform = `rotate(${secondsDegree}deg)`;
    minute.style.transform = `rotate(${minutesDegree}deg)`;
    hour.style.transform = `rotate(${hoursDegree}deg)`;
};

setInterval(setTime, 1000);
