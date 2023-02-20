function validarFormulario(event) {
  event.preventDefault();

  var nome = document.querySelector(".campo.nome");
  var email = document.querySelector(".campo.email");
  var telefone = document.querySelector(".campo.telefone");
  var mensagem = document.querySelector(".campo.mensagem");

  var camposObrigatorios = [nome, email, telefone, mensagem];
  var avisoCamposObrigatorios = document.querySelectorAll(".aviso.oculto");

  for (var i = 0; i < camposObrigatorios.length; i++) {
    if (camposObrigatorios[i].value == "") {
      camposObrigatorios[i].style.borderColor = "red";
      avisoCamposObrigatorios[i].classList.remove("oculto");
    } else {
      camposObrigatorios[i].style.borderColor = "green";
      avisoCamposObrigatorios[i].classList.add("oculto");
    }
  }
}

var botaoEnviar = document.querySelector(".btn-enviar");
botaoEnviar.addEventListener("click", validarFormulario);

const inputs = document.querySelectorAll(".campo");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.style.borderColor = "green";
    } else {
      input.style.borderColor = "red";
    }
  });
});
