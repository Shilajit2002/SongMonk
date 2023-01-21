// Create Date Object for know the current hour
let date = new Date();

// Select the Conatiner
let container = document.getElementsByClassName("container")[0];

// Check Hour for Every 100ms
setInterval(() => {
    // Get the Current Hour
    let hour = date.getHours();
    // Greetings Logic
    if (hour >= 5 && hour <= 11) {
        container.firstElementChild.innerHTML = "Good Morning";
    }
    else if (hour >= 12 && hour <= 16) {
        container.firstElementChild.innerHTML = "Good Afternoon";
    }
    else {
        container.firstElementChild.innerHTML = "Good Evening";
    }
}, 100);
