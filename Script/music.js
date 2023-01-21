// Audio Create
let audioElement = new Audio(songlist[0][0].music);

// Select Play/Pause Button
let playpause = document.getElementById("play");

// Select Sound Range Progress Bar
let progressBar = document.getElementById("progressBar");

// Select Music Bar
let musicBar = document.getElementById("musicBar");

// Song Index
let songIndex = 0;

// Song Inner Index
let songInnerIndex = songlist[0].length;

// Each Song Index
let eachSongIndex = 0;

// Select Song Cover IMG
let img = document.getElementById("img");
// Store first song cover
img.src = songlist[0][0].cover;

// Select Marquee Tag for Title and Description
let marquee = document.getElementsByClassName("marquee")[0];
// Store first song title
marquee.firstElementChild.innerText = songlist[0][0].title;
// Store first song description
marquee.lastElementChild.innerText = songlist[0][0].description;

// Select CurrentTime
let CT = document.getElementById("CT");
CT.innerText = "00:00";

// Select TotalTime
let TT = document.getElementById("TT");
TT.innerText = "04:25";

// Check Prev and Check Current
let checkPrev = `${songlist[0][0].music}`;
let checkCurrent;

// Play/Pause Button Click Event
playpause.addEventListener('click', () => {
    // If Audio Paused
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playpause.src = "./Songs/play.png";
        musicBar.style.opacity = 1;
    }
    // If Audio Not Pause
    else {
        audioElement.pause();
        playpause.src = "./Songs/pause.png";
        musicBar.style.opacity = 0;
        makeAllPause();
    }
})

// Listen Event and Update ProgressBar
audioElement.addEventListener('timeupdate', () => {
    // Timer Setting
    let decimalCT = (audioElement.currentTime / 60).toFixed(2).split(".");
    let decimalTT = (audioElement.duration / 60).toFixed(2).split(".");

    // 0 adding
    if (decimalCT[0] < 10) {
        decimalCT[0] = "0" + decimalCT[0];
    }
    if (decimalTT[0] < 10) {
        decimalTT[0] = "0" + decimalTT[0];
    }

    CT.innerText = `${decimalCT[0]}:${decimalCT[1]}`;
    TT.innerText = `${decimalTT[0]}:${decimalTT[1]}`;

    // Progressbar value setting
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;

    if (decimalCT[0] === decimalTT[0] && decimalCT[1] === decimalTT[1]) {
        playpause.src = "./Songs/pause.png";
        musicBar.style.opacity = 0;

        if (eachSongIndex >= songInnerIndex - 1) {
            if (songIndex >= songlist.length - 1) {
                songIndex = 0;
                eachSongIndex = 0;
            } else {
                songIndex++;
                eachSongIndex = 0;
            }
        } else {
            eachSongIndex++;
        }

        // Store the Audio from SongList
        audioElement.src = `${songlist[songIndex][eachSongIndex].music}`;

        // Store SongList cover
        img.src = `${songlist[songIndex][eachSongIndex].cover}`;

        // Store SongList Title and Description
        marquee.firstElementChild.innerText = `${songlist[songIndex][eachSongIndex].title}`;
        marquee.lastElementChild.innerText = `${songlist[songIndex][eachSongIndex].description}`;

        audioElement.currentTime = 0;
        audioElement.play();
        musicBar.style.opacity = 1;

        playpause.src = "./Songs/play.png";
    }
})

// Change ProgressBar and Song
progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration / 100);
})

// All pause function call for pausing all the song if anysong is playing
const makeAllPause = () => {
    Array.from(on).forEach((element) => {
        element.src = "./Songs/pause.png";
    })
}

// Select all song play/pause button
let on = document.querySelectorAll("#on");
for (let index = 0; index < on.length; index++) {
    on[index].addEventListener('click', (e) => {
        // SongIndex store the SongList 2dObject array index
        songIndex = Math.floor(index / songInnerIndex);

        // EachSongIndex
        eachSongIndex = e.target.className;

        checkCurrent = `${songlist[songIndex][eachSongIndex].music}`;

        // If the same song play/pause button click
        if (checkCurrent == checkPrev) {
            // If Audio Paused
            if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                playpause.src = "./Songs/play.png";
                e.target.src = "./Songs/play.png";
                musicBar.style.opacity = 1;
            }
            // If Audio Not Pause
            else {
                audioElement.pause();
                playpause.src = "./Songs/pause.png";
                e.target.src = "./Songs/pause.png";
                musicBar.style.opacity = 0;
            }
        }
        // If another song play/pause button click
        else {
            checkPrev = checkCurrent;

            // AllPause function call
            makeAllPause();

            // Change play button
            e.target.src = "./Songs/play.png";

            // Store the Audio from SongList
            audioElement.src = `${songlist[songIndex][eachSongIndex].music}`;

            // Store SongList cover
            img.src = `${songlist[songIndex][eachSongIndex].cover}`;

            // Store SongList Title and Description
            marquee.firstElementChild.innerText = `${songlist[songIndex][eachSongIndex].title}`;
            marquee.lastElementChild.innerText = `${songlist[songIndex][eachSongIndex].description}`;

            audioElement.currentTime = 0;
            audioElement.play();
            musicBar.style.opacity = 1;

            playpause.src = "./Songs/play.png";
        }
    })
}

// Next Button for Song Change
let next = document.getElementById("next")
next.addEventListener('click', () => {
    if (eachSongIndex >= songInnerIndex - 1) {
        if (songIndex >= songlist.length - 1) {
            songIndex = 0;
            eachSongIndex = 0;
        } else {
            songIndex++;
            eachSongIndex = 0;
        }
    } else {
        eachSongIndex++;
    }

    // Store the Audio from SongList
    audioElement.src = `${songlist[songIndex][eachSongIndex].music}`;

    checkCurrent = `${songlist[songIndex][eachSongIndex].music}`;
    checkPrev = checkCurrent;
    // Store SongList cover
    img.src = `${songlist[songIndex][eachSongIndex].cover}`;

    // Store SongList Title and Description
    marquee.firstElementChild.innerText = `${songlist[songIndex][eachSongIndex].title}`;
    marquee.lastElementChild.innerText = `${songlist[songIndex][eachSongIndex].description}`;

    audioElement.currentTime = 0;
    audioElement.play();
    musicBar.style.opacity = 1;

    playpause.src = "./Songs/play.png";
})

// Previous Button for Song Change
let prev = document.getElementById("prev")
prev.addEventListener('click', () => {
    if (eachSongIndex <= 0) {
        if (songIndex <= 0) {
            songIndex = songlist.length - 1;
            eachSongIndex = songInnerIndex - 1;
        } else {
            songIndex--;
            eachSongIndex = songInnerIndex - 1;;
        }
    } else {
        eachSongIndex--;
    }

    // Store the Audio from SongList
    audioElement.src = `${songlist[songIndex][eachSongIndex].music}`;

    checkCurrent = `${songlist[songIndex][eachSongIndex].music}`;
    checkPrev = checkCurrent;

    // Store SongList cover
    img.src = `${songlist[songIndex][eachSongIndex].cover}`;

    // Store SongList Title and Description
    marquee.firstElementChild.innerText = `${songlist[songIndex][eachSongIndex].title}`;
    marquee.lastElementChild.innerText = `${songlist[songIndex][eachSongIndex].description}`;

    audioElement.currentTime = 0;
    audioElement.play();
    musicBar.style.opacity = 1;

    playpause.src = "./Songs/play.png";
})
