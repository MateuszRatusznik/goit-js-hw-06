function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

input.addEventListener("submit", (event) => {
  amount = eventTarget.value;
})
create.addEventListener("click", () => createBoxes(input.value));
destroy.addEventListener("click", () => destroyBoxes());

const createBoxes = (amount) => {
  let size = 30;
  for (let i=1; i <= amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.background = getRandomHexColor();
    box.style.height = `${size + i * 10}px`;
    box.style.width = `${size + i * 10}px`;

    boxes.append(box);
  }
}

const destroyBoxes = () => {
  boxes.textContent = "";
};