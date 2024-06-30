// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        carousel.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                carousel.scrollBy(300, 0);
            } else {
                carousel.scrollBy(-300, 0);
            }
        });
    });
});
