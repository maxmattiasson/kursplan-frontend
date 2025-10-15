const kunskapBtn = document.querySelectorAll(".k-btn");
const summativBtn = document.getElementById("btn-summativ");
const formativBtn = document.getElementById("btn-formativ");

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
