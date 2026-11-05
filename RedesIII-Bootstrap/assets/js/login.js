
document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formLogin");
    const mensagem = document.getElementById("mensagemLogin");

    const senha = document.getElementById("senha");
    const botaoSenha = document.getElementById("alternarSenha");

    // Mostrar ou ocultar senha
    botaoSenha.addEventListener("click", () => {

        const mostrar = senha.type === "password";

        senha.type = mostrar ? "text" : "password";

        botaoSenha.textContent = mostrar
            ? "Ocultar senha"
            : "Mostrar senha";

        botaoSenha.setAttribute(
            "aria-label",
            mostrar ? "Ocultar senha" : "Mostrar senha"
        );

        botaoSenha.setAttribute(
            "aria-pressed",
            String(mostrar)
        );

    });

    // Envio do formulário
    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        mensagem.textContent =
            "A tela está pronta! O acesso real será configurado quando conectarmos a autenticação.";

    });

});
