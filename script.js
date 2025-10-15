

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#learning-goals .slide');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
/* this is to switch between two slides */
 prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }); 

  // use to initialize slideshow
  showSlide(currentSlide);
});

// Grades
const dropdown = document.getElementById("grades");
const title = document.getElementById("gradingTitle");

title.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  title.classList.toggle("active");
});

