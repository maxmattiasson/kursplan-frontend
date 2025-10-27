const kunskapBtn = document.querySelectorAll(".k-btn");
const summativBtn = document.getElementById("btn-summativ");
const formativBtn = document.getElementById("btn-formativ");
const darkMode = document.getElementById("darkMode");

kunskapBtn.forEach((b) =>
  b.addEventListener("click", () => {
    if (b.classList.contains("k-active")) return;

    kunskapBtn.forEach((b) => b.classList.remove("k-active"));
    b.classList.add("k-active");

    if (summativBtn.classList.contains("k-active")) {
      document.getElementById("kunskap-summativ").classList.remove("k-hidden");
      document.getElementById("kunskap-formativ").classList.add("k-hidden");
    } else {
      document.getElementById("kunskap-formativ").classList.remove("k-hidden");
      document.getElementById("kunskap-summativ").classList.add("k-hidden");
    }
  })
);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#learning-goals .slide");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }
  /* this is to switch between two slides */
  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  // use to initialize slideshow
  showSlide(currentSlide);
});

// Grades
const dropdownGrades = document.getElementById("grades");
const titleGrades = document.getElementById("gradingTitle");

titleGrades.addEventListener("click", () => {
  dropdownGrades.classList.toggle("active");
  titleGrades.classList.toggle("active");
});

// support
const dropdown = document.getElementById("supports");
const title = document.getElementById("supportTitle");

title.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  title.classList.toggle("active");
});
function darkModeToggle() {
  var element = document.documentElement;
  element.classList.toggle("dark-mode");
}
darkMode.addEventListener("click", darkModeToggle);
