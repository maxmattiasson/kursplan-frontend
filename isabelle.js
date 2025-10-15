const isabellePortrait = document.getElementById("isabelle-portrait");

isabellePortrait.addEventListener("dblclick", (event) => {
  if (window.confirm("Vill du besöka Isabelles Github?")) {
    window.open("https://github.com/isabellea-f", "_blank");
  }
});
