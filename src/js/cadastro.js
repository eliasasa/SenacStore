import {mostrarPopup} from '../components/gerar_popUp.js';

const form = document.getElementById('cadastroForm');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const primeiroNome = document.getElementById('primeiroNome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const senha = document.getElementById('senha').value;
        const cidade = document.getElementById('cidade').value;
        const rua = document.getElementById('rua').value;
        const numero = parseInt(document.getElementById('numero').value);
        const cep = document.getElementById('cep').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        const telefone = document.getElementById('telefone').value;

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
        
        fetch('https://fakestoreapi.com/users', {
            method: "POST",
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
        })
        .then(res => res.json())
        .then(json => {
            if (json && json.id) {
                mostrarPopup('cadastroSucesso', `ID: ${json.id}`);
                console.log(json);
            } else {
                mostrarPopup('erro', 'Erro no retorno da API: Objeto retornado não possui as propriedades esperadas.');
            }
        })
        .catch(error => {
            mostrarPopup('erro', 'Erro ao cadastrar usuário: ' + error);
            console.error('Erro:', error);
        });

        form.reset();
    });
} else {
    console.error("Formulário não encontrado! Verifique o ID do formulário.");
}
