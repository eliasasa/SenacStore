import formLogin from "../components/formLogin.js";

async function PesquisarTodosUsuarios() {
    const usuarios = await fetch('https://fakestoreapi.com/users')
        .then(res => res.json());

    return usuarios;
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

    const token = await response.json();
    if (!token || !token.token) {
        alert("Login falhou. Verifique seus dados.");
        return;
    }

    const sessionCreated = await SessionUsuario(token, usuario);
    if (sessionCreated) {
        window.location.href = '../index.html'; 
    }
}

function enviarLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById('nomeUsuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (usuario && senha) {
        fetchLogin(usuario, senha);
    } else {
        alert('Preencha todos os campos.');
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
