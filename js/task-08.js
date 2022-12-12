const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
});
