const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const prev = document.querySelector(".carousel-btn.prev");
const next = document.querySelector(".carousel-btn.next");

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});
