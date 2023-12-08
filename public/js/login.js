document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    var emailInput = document.getElementById("idemail");
    var senhaInput = document.getElementById("idsenha");
    var emailValue = emailInput.value.trim();
    var senhaValue = senhaInput.value.trim();

    // Verificar se o campo de e-mail está vazio
    if (emailValue === "") {
      alert("Por favor, preencha o campo de e-mail");
      event.preventDefault();
      return;
    }

    // Verificar se o campo de senha está vazio
    if (senhaValue === "") {
      alert("Por favor, preencha o campo de senha");
      event.preventDefault();
      return;
    }

    // Verificar se o campo de e-mail contém um e-mail válido usando uma expressão regular simples
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      alert("Por favor, insira um endereço de e-mail válido");
      event.preventDefault();
      return;
    }

    sessionStorage.setItem("email", emailValue);
    sessionStorage.setItem("senha", senhaValue);
  });
});
