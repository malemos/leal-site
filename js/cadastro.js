document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    cpfcnpj: form.cpfcnpj.value,
    servico: form.servico.value
  };

  try {
    const resposta = await fetch("https://api.lealassessoriacontabil.com.br/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    const msg = document.getElementById("mensagem");
    if (resposta.ok) {
      msg.innerText = "Cadastro enviado com sucesso!";
      form.reset();
    } else {
      msg.innerText = "Erro ao enviar cadastro.";
    }
  } catch (erro) {
    console.error(erro);
    document.getElementById("mensagem").innerText = "Falha na comunicação com o servidor.";
  }
});

function aplicarMascaraCpfCnpj(input) {
  input.addEventListener("input", () => {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
      valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
      valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    }
    input.value = valor;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const campo = document.querySelector('input[name="cpfcnpj"]');
  if (campo) aplicarMascaraCpfCnpj(campo);
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = { aplicarMascaraCpfCnpj };
}
