// Select Login Button for Login
let login = document.getElementById("login");

const user = document.getElementById("user");

// Get the Username from the localStorage if it is present
let userName = localStorage.getItem("name");

// Set the Username in the browser if it is present
if (userName != "" && userName != null) {
    user.innerHTML = `<li>
        <img src="./Images/profile.webp" alt="" />${userName}</li>`;
}

// If the User want login then after entering the username , it is store in the localStorage and its set in the browser
login.addEventListener('click', () => {
    userName = prompt("Enter your name here 😎");
    localStorage.setItem("name", userName);
    user.innerHTML = `<li>
            <img src="./Images/profile.webp" alt="" />${userName}</li>`;
})

// When Scrolling the main portion navigation background color will be changed
document.getElementsByTagName("main")[0].addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling Down
        user.style.background = "#000000de";
    }
    else if (event.deltaY < 0) {
        // Scrolling Up
        user.style.background = "#0000003a";
    }
})