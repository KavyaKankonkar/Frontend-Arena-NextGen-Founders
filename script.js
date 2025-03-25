document.addEventListener("DOMContentLoaded", function () {
    let door = document.getElementById("door");

    door.addEventListener("click", function () {
        // Optional: Add a door opening animation effect
        door.style.transition = "transform 1s ease-in-out";
        door.style.transform = "scale(1.1)"; // Slight zoom effect

        // Delay before redirecting (to sync with animation)
        setTimeout(function () {
            window.location.href = "Page2.html"; // Replace with actual video page
        }, 1000); // Adjust timing to match animation
    });
});

