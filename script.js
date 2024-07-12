//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const formattedDate = now.toLocaleDateString();
    timerElement.textContent = `${formattedDate}, ${formattedTime}`;
}

setInterval(updateTimer, 1000);

// Initial call to display the timer immediately upon page load
updateTimer();
