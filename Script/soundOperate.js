// Select the Mute Box
let mute = document.getElementById("mute");

// Mute Range Slider
let slide2 = document.getElementById("slide2");

// When Click Slider Sound will decrease
slide2.addEventListener("change", (e) => {
    if (e.target.value > 0) {
        mute.firstElementChild.src = "./Images/audio.png";
        audioElement.volume = (e.target.value) / 100;
    } else if (e.target.value == 0) {
        mute.firstElementChild.src = "./Images/mute.png";
        audioElement.volume = (e.target.value) / 100;
    }
})