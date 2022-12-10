const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.querySelector("#ingredients");

const ingredient = ingredients.map((ingr) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingr;

  return item;
});
allIngredients.append(...ingredient);

console.dir(allIngredients);
