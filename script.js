// Grades
const dropdown = document.getElementById("grades");
const title = document.getElementById("gradingTitle");

title.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  title.classList.toggle("active");
});
