const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const itemsToShow = 3; // Number of items visible at a time
const totalItems = document.querySelectorAll('.carousel-item').length;
const itemWidth = 297; // Width of each item including gap
let currentIndex = 0;

// Scroll the carousel
function updateCarousel() {
  const offset = currentIndex * -itemWidth;
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

// Handle next button click
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - itemsToShow) { // Limit to total visible items
    currentIndex++;
    updateCarousel();
  }
});

// Handle previous button click
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
