const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "basic/index.html") {
        iframe.src = this.value;
        iframe.style.height = "650px";
    } else if (choice === "advanced/index.html") {
        iframe.src = this.value;
        iframe.style.height = "650px";
    } else {
        iframe.src = "";
    }
}