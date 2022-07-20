const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const elements = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  elements.push(listItem);
});

list.append(...elements);
