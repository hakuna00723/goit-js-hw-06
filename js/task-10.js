function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const controlsBox = document.querySelector("#controls");
// const inputEl = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");

// createBtn.addEventListener("click", takeNumber);
// destroyBtn.addEventListener("click", destroyBoxes);

// let newInputValue = 0;

// const createBoxes = (amount) => {
//   const boxesDiv = [];
//   if (boxesDiv.length > amount) {
//     newInputValue += 10;
//     const megaBox = document.createElement("div");
//   }
// };
