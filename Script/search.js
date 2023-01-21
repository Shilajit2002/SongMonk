// Select Search Button
let search = document.getElementById("search");

// Select Search Box
let searchBox = document.getElementsByClassName("searchBox")[0];

// Search Button
search.addEventListener('click', () => {
    cont.style.display = "none";
    searchBox.style.display = "flex";
})

// Select SearchSongList
let searchSongList = document.getElementById("searchSongList");

for (let i = 0; i < songlist.length; i++) {
    for (let j = 0; j < songlist[i].length; j++) {
        let div1 = document.createElement("div");
        div1.className = "outer1";
        div1.innerHTML = `<img src="${songlist[i][j].cover}" alt="" class="inner" />
   <img src="./Songs/pause.png" alt="" id="on1" class="${j}" />
   <h4>${songlist[i][j].title}</h4>
   <span>${songlist[i][j].description}</span>`;

        searchSongList.append(div1);
    }
}

// Display all the Song None
let outer1 = document.getElementsByClassName("outer1");

for (let index = 0; index < outer1.length; index++) {
    outer1[index].style.display = "none";
}

let rIndex;

// SearchFunction
const searchFun = () => {
    let text = document.getElementById("text").value.toUpperCase();
    rIndex = 0;
    for (let i = 0; i < songlist.length; i++) {
        for (let j = 0; j < songlist[i].length; j++, rIndex++) {
            // Song Found then Show it
            if (songlist[i][j].title.toUpperCase().indexOf(text) > -1 && text != null && text != "") {
                outer1[rIndex].style.display = "flex";
                searchBox.children[1].style.display = "none";
            }
            // Song not Found the Hide it
            else {
                outer1[rIndex].style.display = "none";
                searchBox.children[1].style.display = "none";
            }
        }
    }

    let count = 0;
    for (let index = 0; index < outer1.length; index++) {
        if (outer1[index].style.display == "none") {
            count++;
        }
    }
    if (count == outer1.length && text != null && text != "") {
        searchBox.children[1].style.display = "block";
        searchBox.children[1].innerText = `No results found for "${text}"`;
    }
}

// Select all song play/pause button
let on1 = document.querySelectorAll("#on1");
for (let index = 0; index < on.length; index++) {
    on1[index].addEventListener('click', (e) => {
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
