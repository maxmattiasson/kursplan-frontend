const eliasPortrait = document.querySelector("#elias-portrait");
const eliasMessage = "Vill du besöka Elias Github?"
eliasPortrait.addEventListener("dblclick", () => {
    if(window.confirm(eliasMessage)){
        window.open("https://github.com/Eliasjohansson123");
    }
});