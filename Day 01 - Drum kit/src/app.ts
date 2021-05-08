'use strict';

window.addEventListener('keydown', (e: KeyboardEvent) => {
    const key = document.querySelector(
        `.key[data-key='${e.keyCode}']`
    ) as HTMLDivElement;
    if (!key) return;
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
        console.log(key);
    }, 500);

    const sound = document.createElement('audio') as HTMLAudioElement;
    const soundName: string = key.children[1].textContent!;
    sound.setAttribute('src', `./sounds/${soundName}.wav`);
    sound.currentTime = 0;
    sound.play();
});
