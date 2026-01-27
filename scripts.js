// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const dotsContainer = document.createElement("div");
dotsContainer.style.textAlign = "center";
dotsContainer.style.marginTop = "1rem";

slides.forEach((_, idx) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (idx === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    changeSlide(idx);
  });

  dotsContainer.appendChild(dot);
});

document.querySelector(".slider").appendChild(dotsContainer);

function changeSlide(index) {
  slides[currentSlide].classList.remove("active");
  dotsContainer.children[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dotsContainer.children[currentSlide].classList.add("active");
}

setInterval(() => {
  let next = (currentSlide + 1) % slides.length;
  changeSlide(next);
}, 5000);
