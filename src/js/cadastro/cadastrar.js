const cadastro_content_js = () => {
    return `
        <div id="cadastro_content">
            <h2 id="titulo_cadastro">Cadastro</h2>
            <form id="form_cadastro">
                <h2 for="nome">Nome:</h2>
                <input type="text" id="nome" name="nome" required><br><br>

                <h2 for="email">E-mail:</h2>
                <input type="email" id="email" name="email" required><br><br>

                <h2 for="senha">Senha:</h2>
                <input type="password" id="senha" name="senha" required><br><br>

                <h2 for="confirma_senha">Confirmar Senha:</h2>
                <input type="password" id="confirma_senha" name="confirma_senha" required><br><br>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
        
        <div id="popUp" style="display: none;">
            <h2>Usuário ou senha já existem!</h2>
            <button id="closePopUp">Fechar</button>
        </div>
    `;
};

document.getElementById('cadastro_container').innerHTML = cadastro_content_js();
