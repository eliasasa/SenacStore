import { mostrarPopup, fecharPopup } from "../components/gerar_popUp.js";
import { getInfoUser } from "./infoUser.js";
import { renderUserInfo } from '../components/renderUser.js';

// Função para verificar se o usuário está logado
function verificarLogin() {
    const token = sessionStorage.getItem('UserToken');
    const userId = sessionStorage.getItem('UserId');

    if (!token || !userId) {
        window.location.href = '../src/login.html';
    }

    return userId;
}

let currentUserData = null;
let userName = null;
let userEmail = null;
let userUsername = null;

function abrirEdicao() {
    mostrarPopup('editarUsuario', currentUserData);

    setTimeout(() => {
        const salvarBtn = document.getElementById('btn-salvar-alteracoes');
        const deletarBtn = document.getElementById('btn-deletar-conta');

        salvarBtn.removeEventListener('click', handleSalvarAlteracoes);
        deletarBtn.removeEventListener('click', handleDeletarConta);

        salvarBtn.addEventListener('click', handleSalvarAlteracoes);
        deletarBtn.addEventListener('click', handleDeletarConta);
    }, 100);
}

async function handleSalvarAlteracoes() {
    try {
        const editPhone = document.getElementById('edit-phone');
        const editCity = document.getElementById('edit-city');
        const editStreet = document.getElementById('edit-street');
        const editNumber = document.getElementById('edit-number');
        const editZipcode = document.getElementById('edit-zipcode');
        const editLat = document.getElementById('edit-lat');
        const editLong = document.getElementById('edit-long');

        if (!editPhone || !editCity || !editStreet || !editNumber || !editZipcode || !editLat || !editLong) {
            throw new Error('Um ou mais elementos de input não foram encontrados.');
        }

        const updatedData = {
            phone: editPhone.value,
            username: userUsername,
            name: userName,
            email: userEmail,
            address: {
                city: editCity.value,
                street: editStreet.value,
                number: editNumber.value,
                zipcode: editZipcode.value,
                geolocation: {
                    lat: editLat.value,
                    long: editLong.value
                }
            }
        };

        const response = await fetch(`https://fakestoreapi.com/users/${currentUserData.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) throw new Error('Erro na atualização');

        const dadosAtualizados = await response.json();
        
        dadosAtualizados.id = currentUserData.id;
        currentUserData = dadosAtualizados;
        userEmail = dadosAtualizados.email;
        userName = dadosAtualizados.name;
        userUsername = dadosAtualizados.username;

        renderUserInfo(document.getElementById('user_info'), currentUserData);

        mostrarPopup('sucesso', dadosAtualizados);

    } catch (error) {
        console.error('Erro ao salvar alterações:', error);
        mostrarPopup('erro', error.message);
    }
}

async function handleDeletarConta() {
    if (confirm('Tem certeza que deseja excluir sua conta permanentemente?')) {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${currentUserData.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            });

            if (!response.ok) throw new Error('Erro ao excluir conta');
            
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 20000);
            
        } catch (error) {
            mostrarPopup('erro', error.message);
        }
    }
}

async function userInfo(event) {
    event.preventDefault();
    const id = verificarLogin();
    try {
        const resposta = await getInfoUser(id);
        if (resposta) {
            currentUserData = resposta;
            userEmail = resposta.email;
            userName = resposta.name;
            userUsername = resposta.username;
            renderUserInfo(document.getElementById('user_info'), resposta);
            document.querySelector('.editar_but button').addEventListener('click', abrirEdicao);
        }
    } catch (error) {
        mostrarPopup('erro', error.message);
    }
}

document.addEventListener('DOMContentLoaded', userInfo);
