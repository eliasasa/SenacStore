const url_usuarios = "https://fakestoreapi.com/users/";

async function verificar_cadastro(nome, email) {
    try {
        const resposta = await fetch(url_usuarios);
        const usuarios = await resposta.json();

        const verificar_usuario_existe = usuarios.some(user => user.email === email || 
            (user.name.firstname + " " + user.name.lastname) === nome
        );

        return verificar_usuario_existe;

    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
        return;
    }
}

async function cadastrar_usuario(nome, email, senha) {
    const [firstname, lastname] = nome.split(" ");

    const novo_usuario = {
        email: email,
        username: email,
        password: senha,
        name: {
            firstname: firstname,
            lastname: lastname
        }
    };

    try {
        const resposta = await fetch(url_usuarios, {
            method: "POST",
            body: JSON.stringify(novo_usuario),
            headers: { "Content-Type": "application/json" }
        });

        const resultado = await resposta.json();
        
        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");
            console.log("Usuário cadastrado:", resultado);

        } else {
            alert("Erro ao cadastrar usuário.", resultado);
        }

    } catch (erro) {
        console.error("Erro ao cadastrar usuário:", erro);
        alert("Erro ao cadastrar usuário.");
    }
}

document.getElementById('form_cadastro').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirma_senha = document.getElementById('confirma_senha').value.trim();

    if (senha !== confirma_senha) {
        alert('As senhas não coincidem!');
        return;
    }

    const existe = await verificar_cadastro(nome, email);

    if (existe) {
        document.getElementById('popUp').style.display = 'block';
        alert("Usuário ou E-mail já existem.");

    } else {
        await cadastrar_usuario(nome, email, senha);

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        document.getElementById('confirma_senha').value = '';
    }
});

document.getElementById('closePopUp').addEventListener('click', function () {
    document.getElementById('popUp').style.display = 'none';
});
