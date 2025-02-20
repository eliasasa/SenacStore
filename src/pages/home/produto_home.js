const componente_produto = ({ title, image, price, id }) => {
    return `
        <div class="item_produto">
            <div class="img_produto">
                <img src="${image}" alt="${title}">
            </div>
            <hr>
            <div class="info_produto">
                <h2>${title}</h2>
            </div>
            <div class="info_preco">
                <p class="preco_produto">R$ ${price}</p>
            </div> 
            <hr>
            <div class="botao_container"> 
                <a href="./src/produto.html?produto=${id}" class="link_produto">
                    <button class="btn_comprar" onclick="add_comprar(${id})">
                        <img src="../media/img/home/carrinho.png" alt="#img_botoes">
                        <h2>Comprar</h2>
                    </button>
                </a>
            </div>
        </div>
    `;
};

export default componente_produto;
