let counterValue = 0;

const minusBtn = document.querySelector("[data-action='decrement']");
minusBtn.addEventListener("click", (minusOne) => {
  counterValue -= 1;
  pullOutValue.textContent = counterValue;
});

const pullOutValue = document.querySelector("#value");

const plusBtn = document.querySelector("[data-action='increment']");
plusBtn.addEventListener("click", (plusOne) => {
  counterValue += 1;
  pullOutValue.textContent = counterValue;
});
