import { mostrarPopup } from '../components/gerar_popUp.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');

    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            const primeiroNome = document.getElementById('primeiroNome').value.trim();
            const sobrenome = document.getElementById('sobrenome').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const senha = document.getElementById('senha').value.trim();
            const cidade = document.getElementById('cidade').value.trim();
            const rua = document.getElementById('rua').value.trim();
            const numero = parseInt(document.getElementById('numero').value.trim());
            const cep = document.getElementById('cep').value.trim();
            const latitude = document.getElementById('latitude').value.trim();
            const longitude = document.getElementById('longitude').value.trim();
            const telefone = document.getElementById('telefone').value.trim();

            const nameRegex = /^[a-zA-Z ]+$/;
            if (!nameRegex.test(primeiroNome)) {
                mostrarPopup('erro', 'Primeiro nome deve conter apenas letras e espaços.');
                return;
            }
            if (!nameRegex.test(sobrenome)) {
                mostrarPopup('erro', 'Sobrenome deve conter apenas letras e espaços.');
                return;
            }        
            const cepRegex = /^\d{8}$/;
            if (!cepRegex.test(cep)) {
                mostrarPopup('erro', 'CEP deve conter apenas números e ter 8 dígitos.');
                return;
            }
            const numeroRegex = /^\d+$/;
            if (!numeroRegex.test(numero)) {
                mostrarPopup('erro', 'Número da casa deve conter apenas números.');
                return;
            }
            const telefoneRegex = /^\d{11}$/;
            if (!telefoneRegex.test(telefone)) {
                mostrarPopup('erro', 'Número do telefone deve ter 9 na frente.');
                return;
            }

            try {
                const response = await fetch('https://fakestoreapi.com/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        username: username,
                        password: senha,
                        name: {
                            firstname: primeiroNome,
                            lastname: sobrenome
                        },
                        address: {
                            city: cidade,
                            street: rua,
                            number: numero,
                            zipcode: cep,
                            geolocation: {
                                lat: latitude,
                                long: longitude
                            }
                        },
                        phone: telefone
                    })
                });

                const json = await response.json();
                if (json && json.id) {
                    mostrarPopup('cadastroSucesso', `ID: ${json.id}`);
                    console.log(json);
                } else {
                    mostrarPopup('erro', 'Erro no retorno da API: Objeto retornado não possui as propriedades esperadas.');
                }
            } catch (error) {
                mostrarPopup('erro', 'Erro ao cadastrar usuário: ' + error);
                console.error('Erro:', error);
            }

            form.reset();
        });
    } else {
        console.error("Formulário não encontrado! Verifique o ID do formulário.");
    }
});
