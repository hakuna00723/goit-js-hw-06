// const counterValue = 0;

// const minusBtn = document.querySelector('button[data-action="decrement"]');
// minusBtn.addEventListener("click", () => {
//   pullOutValue -= 1;
//   function minusOne() {
//     minusBtn.pullOutValue.textContent = counterValue;
//   }
// });

// const pullOutValue = document.querySelector("#value");

// const plusBtn = document.querySelector('button[data-action="increment"]');
// plusBtn.addEventListener("click", (counterValue) => {
//   counterValue += 1;
//   plusBtn.pullOutValue.textContent = counterValue;
// });

let counterValue = 0;

const btnCounter = {
  counterIncrement: document.querySelector("[data-action='increment']"),
  counterDecrement: document.querySelector("[data-action='decrement']"),
  counterValueEl: document.querySelector("#value"),
};

btnCounter.counterIncrement.addEventListener("click", (onClickIncrement) => {
  counterValue += 1;
  btnCounter.counterValueEl.textContent = counterValue;
});

btnCounter.counterDecrement.addEventListener("click", (onClickDecrement) => {
  counterValue -= 1;
  btnCounter.counterValueEl.textContent = counterValue;
});
