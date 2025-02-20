const formLogin = () => {

    return `
        
    <div class="login-container">
        <h1>login</h1>
        <form id="formLogin">
            <p>Nome:</p>
            <input type="text" name="nomeUsuario" id="nomeUsuario">
            <p>Senha:</p>
            <input type="password" name="senha" id="senha">
            <button type="submit">Entrar</button>
            <a href="./cadastro.html">cadastro</a>
        </form>    
    </div>
    `;
};

export default formLogin;