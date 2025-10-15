// support
const dropdown = document.getElementById("supports");
const title = document.getElementById("supportTitle");

title.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  title.classList.toggle("active");
});
