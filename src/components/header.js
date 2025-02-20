const header_content_js = () => {
    return `
        <header>
            <div id="header_content">
                <div class="logo">
                    <img src='../media/img/Logofavicon.jpeg' width=32px height=32px>
                    <a href="../index.html">Senac Store</a>
                </div>

                <nav class="nav_menu">
                    <ul>
                        <li><a href="../index.html">Produtos</a></li>
                        <li><a href="../src/editarProduto.html">Editar Produtos</a></li>
                        <li><a href="#">Favoritos</a></li>
                        <li><a id="avaliacao-link" href="../src/avaliacao.html">Avaliação</a></li>
                    </ul>
                </nav>

                <div class="header-right">
                    <a href="../src/userPage.html" class="profile-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                        Seu Perfil
                    </a>
                    <div class="carrinho_header">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
                            Carrinho (0)
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <script type="module" src="../src/js/avaliacao.js"></script>
    `;
};

document.getElementById('header_container').innerHTML = header_content_js();

export default header_content_js;
