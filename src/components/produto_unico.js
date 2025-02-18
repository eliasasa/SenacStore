const produtoUnicoComponente = ({ title, image, price, id, description, category }) => {
    return `
        <div id="containerProduto">
            <div class="imgProduto">
                <img src=${image} alt="${title}" />
            </div>
            <div class="infoProduto">
                <h1>${title}</h1>
                <span id="categoria">${category}</span>
                <span class="preco">R$ ${price}</span>
                <p>${description}</p>
                
                <a href="./carrinho.html?produto=${id}" id="addCarrinho">Adicionar ao Carrinho</a>
                
            </div>
        </div>
    `;
};

export default produtoUnicoComponente;