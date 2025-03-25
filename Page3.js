document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

//Carousal view
document.addEventListener("DOMContentLoaded", function () {
    const gridViewBtn = document.getElementById("gridViewBtn");
    const carouselViewBtn = document.getElementById("carouselViewBtn");
    const gridView = document.querySelector(".art-grid");
    const carouselView = document.querySelector(".carousel");

    // Toggle views
    gridViewBtn.addEventListener("click", function () {
        gridView.classList.remove("hidden");
        carouselView.classList.add("hidden");
        gridViewBtn.classList.add("active");
        carouselViewBtn.classList.remove("active");
    });

    carouselViewBtn.addEventListener("click", function () {
        gridView.classList.add("hidden");
        carouselView.classList.remove("hidden");
        gridViewBtn.classList.remove("active");
        carouselViewBtn.classList.add("active");
    });

    // Carousel functionality
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;

    nextBtn.addEventListener("click", function () {
        index++;
        if (index >= track.children.length) {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = track.children.length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const newTransformValue = -index * 100 + "%";
        track.style.transform = "translateX(" + newTransformValue + ")";
    }
});
