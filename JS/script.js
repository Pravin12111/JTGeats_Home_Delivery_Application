// Carousel Implementation
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const itemsToShow = 3;
const totalItems = document.querySelectorAll('.carousel-item').length;
const itemWidth = 277;
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

// Add to Cart Modal Implementation
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeModalButton = document.getElementById("close-modal");

cartIcon.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  cartModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeModalButton.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  cartModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Request a Dish Modal Implementation
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("requestModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const submitBtn = document.getElementById("submitBtn");

  openModalBtn.addEventListener("click", function () {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
  });

  function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  }

  cancelBtn.addEventListener("click", closeModal);
  submitBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside content
  window.addEventListener("click", function (e) {
      if (e.target === modal) {
          closeModal();
      }
  });
});

// Video Play/Pause Functionality
const video = document.getElementById('video');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    video.setAttribute('controls', true);
  } else {
    video.pause();
    video.removeAttribute('controls');
  }
});
