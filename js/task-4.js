
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userEmail = loginForm.elements.email.value.trim();
  const userPassword = loginForm.elements.password.value.trim();

  if (!userEmail || !userPassword) {
    alert("All form fields must be filled in");
    return;
  }     

  const loginInfo = {
    [loginForm.elements.email.name]: userEmail,
    [loginForm.elements.password.name]: userPassword,
  };

  console.log(loginInfo);
  loginForm.reset();
});
