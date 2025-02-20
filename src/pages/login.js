import formLogin from "../components/formLogin.js";
import { mostrarPopup, fecharPopup } from "../components/gerar_popUp.js";

async function PesquisarTodosUsuarios() {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        mostrarPopup('erro', 'Erro ao buscar usuários.');
        return [];
    }
}

async function ValidarUsuario(usuario) {
    const usuarios = await PesquisarTodosUsuarios();
    const UsuarioAutenticado = usuarios.find(user => user.username === usuario);
    return UsuarioAutenticado ? UsuarioAutenticado.id : null;
}

async function SessionUsuario(token, usuario) {
    sessionStorage.clear();
    sessionStorage.setItem('UserToken', token.token);
    
    const userId = await ValidarUsuario(usuario);
    if (userId) {
        sessionStorage.setItem('UserId', userId);
        return true;
    }
    
    return false;
}

async function fetchLogin(usuario, senha) {
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usuario,
                password: senha
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            mostrarPopup('erro', `Erro ao fazer login: ${response.status} - ${errorText}`);
            return;
        }

        const token = await response.json();
        if (!token || !token.token) {
            mostrarPopup('erro', "Login falhou. Verifique seus dados.");
            return;
        }

        const sessionCreated = await SessionUsuario(token, usuario);
        if (sessionCreated) {
            window.location.href = '../index.html'; 
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        mostrarPopup('erro', 'Erro ao fazer login. Por favor, tente novamente.');
    }
}

function enviarLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById('nomeUsuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (usuario && senha) {
        fetchLogin(usuario, senha);
    } else {
        mostrarPopup('erro', 'Preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.login-container');
    
    if (container) {
        container.innerHTML = formLogin();

        const form = document.getElementById('formLogin');
        if (form) {
            form.addEventListener('submit', enviarLogin);
        }
    }
});
