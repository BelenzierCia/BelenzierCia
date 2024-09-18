
let currentSlide = 0;

function moveSlide(direction) {
    const slideContainer = document.getElementById('slide-container');
    const totalSlides = slideContainer.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slideContainer.style.transform = `translateX(-${currentSlide * 100 / totalSlides}%)`;
}