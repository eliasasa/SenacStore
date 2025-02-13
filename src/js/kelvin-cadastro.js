// Verifica se o formulário existe antes de adicionar o evento
const form = document.getElementById('cadastroForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Exibe os dados cadastrados em um alerta
        alert(`Cadastro realizado com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nSenha: ${senha}`);

        // Limpa os campos do formulário
        form.reset();
    });
} else {
    console.error("Formulário não encontrado! Verifique o ID do formulário.");
}