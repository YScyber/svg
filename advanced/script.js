const section = document.querySelector("section");
const textareaHTML = document.querySelector(".playable-html");
const reset = document.getElementById("reset");

let htmlCode = textareaHTML.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);