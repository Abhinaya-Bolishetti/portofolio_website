// scripts.js
//const hamburger = document.getElementById('hamburger');
//const navLinks = document.getElementById('nav-links');

//hamburger.addEventListener('click', () => {
  //navLinks.classList.toggle('active');});

// Auto and Manual Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000); // auto-change every 5s

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => clearInterval(slideInterval));
slider.addEventListener('mouseout', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Add dot controls (optional)
const dotsContainer = document.createElement('div');
dotsContainer.style.textAlign = 'center';
dotsContainer.style.marginTop = '1rem';

slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.style.display = 'inline-block';
  dot.style.height = '10px';
  dot.style.width = '10px';
  dot.style.margin = '0 5px';
  dot.style.borderRadius = '50%';
  dot.style.background = '#888';
  dot.style.cursor = 'pointer';

  if (idx === currentSlide) dot.style.background = '#333';

  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dotsContainer.children[currentSlide].style.background = '#888';
    currentSlide = idx;
    slides[currentSlide].classList.add('active');
    dotsContainer.children[currentSlide].style.background = '#333';
  });

  dotsContainer.appendChild(dot);
});

slider.appendChild(dotsContainer);
