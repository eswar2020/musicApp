window.addEventListener("load", ()=> {
    const sounds = document.querySelectorAll(".sound");
    const Pads = document.querySelectorAll(".pads div");

    Pads.forEach((pad,index) => {
        pad.addEventListener('click',function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

        });
    });
})