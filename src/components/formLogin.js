const formLogin = () => {
    return `
<<<<<<< HEAD
        
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
=======
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles/login.css">
        <title>Senac Store - Login</title>
    </head>
    <body>
        <main class="login-container">
            <div class="login-header">
                <img src="../media/img/Logofavicon.jpeg" alt="Logo Senac Store" class="login-logo">
                <h1 class="login-title">Acesse sua conta</h1>
            </div>
            
            <form id="formLogin" class="login-form">
                <div class="input-group">
                    <label for="nomeUsuario">Usuário</label>
                    <input type="text" name="nomeUsuario" id="nomeUsuario" required>
                </div>
                
                <div class="input-group">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" id="senha" required>
                </div>
                
                <button type="submit" class="btn-login">Entrar</button>
                
                <div class="login-links">
                    <a href="./cadastro.html" class="link-cadastro">Criar nova conta</a>
                </div>
            </form>
        </main>
    
        <div id="popup-overlay" class="popup-overlay" style="display: none;"></div>
        <div id="popup" class="popup" style="display: none;"></div>
    </body>
    <script type="module" src="../src/js/login.js"></script>
    </html>
>>>>>>> 47ca4c23e80d4426f5d250ece5669dc3542489ef
    `;
};

export default formLogin;
