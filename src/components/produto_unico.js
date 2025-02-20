const produtoUnicoComponente = ({ title, image, price, id, description, category }) => {
    let galeria = []
    for (let img = 0; img <= 2; img++) {
        galeria.push(image)
    }

    console.log(galeria)
    return `
        <div id="containerProduto">
            <div class="imgProduto">
                ${galeria.map(function(foto){
                    return `<img src=${foto} alt="${title}">`})
                }
            </div>
            <div class="infoProduto">
                <h1>${title}</h1>
                <span id="categoria">${category}</span>
                <span class="preco">R$ ${price}</span>
                <p>${description}</p>
                <div>
                    <a href="./carrinho.html?produto=${id}" id="addCarrinho">Adicionar ao Carrinho</a>
                    <button id="addFavorito" data-id="${id}">❤</button>
                </div>
            </div>
        </div>
    `;
};

export default produtoUnicoComponente;