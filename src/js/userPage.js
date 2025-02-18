import { getInfoUser } from "./infoUser.js";
import { renderUserInfo } from "../components/renderUser.js";
import { mostrarPopup, fecharPopup } from "../components/gerar_popUp.js";

async function userInfo(event) {
    event.preventDefault();
    const id = 1;
    // const id = parseInt(document.getElementById('idUser').value)
    try {
        const resposta = await getInfoUser(id);
        if (resposta) {
            console.log(resposta);
            renderUserInfo(document.getElementById('user_info'), resposta);
        } else {
            // document.getElementById('popup-overlay').addEventListener('click', redirecionarParaLogin);
            // document.getElementById('btn-fechar-popup').addEventListener('click', redirecionarParaLogin);
            mostrarPopup('erro', 'Não foi possível obter as informações do usuário.');
        }
    } catch (error) {
        // document.getElementById('popup-overlay').addEventListener('click', redirecionarParaLogin);
        // document.getElementById('btn-fechar-popup').addEventListener('click', redirecionarParaLogin);
        mostrarPopup('erro', error.message);
        console.error("Erro ao obter informações do usuário:", error);   
    }
}

function redirecionarParaLogin() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', userInfo);

document.getElementById('teste').addEventListener('click', userInfo);
