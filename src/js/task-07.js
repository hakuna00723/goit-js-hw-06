const elInput = document.querySelector("#font-size-control");
const elText = document.querySelector("#text");

elInput.addEventListener("input", () => {
  elText.style.fontSize = elInput.value + "px";
});
