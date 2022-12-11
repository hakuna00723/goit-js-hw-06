const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log("Emeil: ", email.value);
  console.log("Password: ", password.value);

  event.currentTarget.reset();
});
