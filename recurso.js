// Carrusel de imágenes
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let counter = 0;

function nextSlide() {
    if (counter >= slides.length - 1) return;
    counter++;
    updateCarousel();
}

function prevSlide() {
    if (counter <= 0) return;
    counter--;
    updateCarousel();
}

function updateCarousel() {
    const size = slides[0].clientWidth;
    carousel.style.transform = `translateX(${-size * counter}px)`;
}

// Agrega eventos de clic para los controles de navegación
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

