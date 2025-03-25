document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // Play Background Music
        let music = document.getElementById("bg-music");
        music.play().catch(error => {
            console.log("Autoplay blocked! User interaction needed.");
        });

        // Show Video after doors animation
        let video = document.getElementById("video");
        video.style.opacity = "1";
        video.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    }, 3000); // Adjust timing to match door animation
});
