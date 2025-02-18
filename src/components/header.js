const header_content_js = () => {
    return `
        <header>
            <div id="header_content">
                <div class="logo">
                    <a href="#">Senac Store</a>
                </div>

                <nav class="nav_menu">
                    <ul>
                        <li><a href="../src/index.html">Produtos</a></li>
                        <li><a href="#">Novidades</a></li>
                        <li><a href="#">Promoções</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Ajuda</a></li>
                    </ul> 
                </nav>

                <div class="carrinho_header">
                    <a href="#">Carrinho (0)</a>
                </div>
            </div>
        </header>
    `;
};

document.getElementById('header_container').innerHTML = header_content_js();

export default header_content_js;