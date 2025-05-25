/**
 * @jest-environment jsdom
 */

describe("Login form validation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="loginForm">
        <input type="text" name="cpfcnpj" id="cpfcnpj" />
        <input type="password" name="senha" id="senha" />
        <button type="submit">Entrar</button>
        <p id="mensagem"></p>
      </form>
    `;
  });

  it("preenche o formulário com CPF/CNPJ e senha", () => {
    const cpfInput = document.getElementById("cpfcnpj");
    const senhaInput = document.getElementById("senha");

    cpfInput.value = "123.456.789-00";
    senhaInput.value = "minhasenha123";

    expect(cpfInput.value).toBe("123.456.789-00");
    expect(senhaInput.value).toBe("minhasenha123");
  });
});