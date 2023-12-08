const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  console.log(email, password);

  if (password === "" || email === "")
    reloadPage("Email e Senha são nescessários para concluir seu cadastro!");
  else if (confirmPassword !== password || confirmEmail !== email)
    reloadPage("Algo está incorreto, vefique seu email e senha.");
  else {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    window.location.assign("/agenda");
  }
});

function reloadPage(string) {
  alert(string);
  return;
}
