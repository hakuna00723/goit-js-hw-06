function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bcgr = document.querySelector("body");
const txtColor = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");

btnChange.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  bcgr.style.backgroundColor = hexColor;
  txtColor.textContent = hexColor;
});
