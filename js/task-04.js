let counterValue = 0;
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("span#value");

counter.innerHTML = `${counterValue}`;

const btnDecClick = () => {
   counter.innerHTML = counterValue -= 1;
};

const btnIncClick = () => {
    counter.innerHTML = counterValue += 1;
 };

 btnDec.addEventListener("click", btnDecClick);
 btnInc.addEventListener("click", btnIncClick);

