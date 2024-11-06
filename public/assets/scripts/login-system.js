const form = document.querySelector('form[action="user-interface.html"]');
form.addEventListener("submit", (event) => {
  const password = form.elements["password"].value;
  const username = form.elements["username"].value;

  if (!password || !username) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos");
  } else if (!validateEmail(username)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  }
});
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]+$/;
  return re.test(String(email).toLowerCase());
}
