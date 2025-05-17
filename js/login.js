document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;

  const dados = {
    cpfcnpj: form.cpfcnpj.value,
    senha: form.senha.value
  };

  try {
    const response = await fetch("https://api.lealassessoriacontabil.com.br/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    const msg = document.getElementById("mensagem");

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      msg.style.color = "green";
      msg.textContent = "Login realizado com sucesso!";
      window.location.href = "/html/painel.html"; // redireciona após login
    } else {
      msg.style.color = "red";
      msg.textContent = "CPF/CNPJ ou senha inválidos.";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("mensagem").textContent = "Erro ao conectar com o servidor.";
  }
});