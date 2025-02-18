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
    window.location.href = 
}


// console.log(fetch('https://fakestoreapi.com/products'))