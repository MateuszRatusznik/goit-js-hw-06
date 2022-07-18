const slider = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");

slider.addEventListener("input", (event) => {
    textSize.style.fontSize = `${event.target.value}px`;
})