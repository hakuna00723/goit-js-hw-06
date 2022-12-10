const listItems = document
  .getElementById("categories")
  .getElementsByClassName("item");
console.log("Number of categories:", `${listItems.length}`);

const categoryElement = [...listItems]
  .map(
    (categories) => `Category: ${categories.children[0].textContent} 
Element: ${categories.children[1].children.length}`
  )
  .join("\n");

console.log(categoryElement);
