const elInput = document.querySelector("#name-input");
const elOutput = document.querySelector("#name-output");

elInput.addEventListener("input", (event) => {
  elOutput.textContent = event.currentTarget.value;

  if (elInput.value === "") {
    return (elOutput.textContent = "Anonymous");
  }
});
