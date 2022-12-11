const elInput = document.querySelector("#validation-input");

elInput.addEventListener("blur", () => {
  if (
    Number.parseInt(elInput.getAttribute("data-length")) ===
    elInput.value.length
  ) {
    elInput.className = "valid";
  } else {
    elInput.className = "invalid";
  }
});
