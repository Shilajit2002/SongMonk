// Select Main Tag for Changing the Background Color
let main = document.getElementsByTagName("main")[0];

let num, num1, num2;
let color;

// Change Background Color Every 5 Second
setInterval(() => {
    num = Math.floor(Math.random() * 38);
    num1 = Math.floor(Math.random() * 38);
    num2 = Math.floor(Math.random() * 38);

    color = `rgba(${num},${num1},${num2},0.897)`;

    main.style.background = `linear-gradient(to bottom, ${color}, #121212)`;
}, 5000);

// Box Sliders ...its slide the SongList Boxes
let sliders = [...document.querySelectorAll("#recent")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

sliders.forEach((item, i) => {
    let sliderDimensions = item.getBoundingClientRect();
    let sliderWidth = sliderDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += sliderWidth - 1;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= sliderWidth + 1;
    });
});

// Select Container
let cont = document.getElementsByClassName("container")[0];

cont.style.display = "flex";

// Home Button
document.getElementById("home").addEventListener('click',()=>{
    cont.style.display = "flex";
    searchBox.style.display = "none";
})