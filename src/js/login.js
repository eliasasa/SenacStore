import formLogin from "../components/formLogin.js";

async function PesquisarTodosUsuarios(){
    const usuarios = await fetch ('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>json)

    return usuarios;
}

async function ValidarUsuario(usuario){
    const usuarios = await PesquisarTodosUsuarios();
    const [UsuarioAutenticado] = usuarios.filter(user=>user.username === ususario);

    return UsuarioAutenticado.id;
}

async function SessionUsuario(token, usuario){
    SessionStorage.clear();
    const SetToken = SessionStorage.SetItem('UserToken', token.token);
    const SetUser = SessionStorage.SetItem('UserId', await ValidarUsuario(usuario));
    if(SetToken && SetUser){
        return true;
    }    
}

async function fetchLogin(usuario, senha){
    const token = await fetch('https://fakestoreapi.com/auth/login',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            username: usuario,
            password: senha
        })
    })
    .then(res=>res.json)
    .then(json=>json());

    await SessionUsuario(token, usuario);
    window.location.href = 'login.html';
};

function enviarLogin(event){
    event.preventfault();

    const usuario = event.target.nomeUsuario.value;
    const senha = event.target.senha.value;

    if (usuario && senha){
        fetchLogin(usuario, senha);
    }
    else{
        alert('preencha todos os campos.')
    }
}
document.getElementById('Login').innerHTML = formLogin();

document.addEventListener('submit',enviarLogin);

// console.log(fetch('https://fakestoreapi.com/products'))