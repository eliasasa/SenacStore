import componente_produto from "../home/produto_home.js";
import criar_filtro from "../home/filtro_home.js";

// if(!sessionStorage.getItem('userToken')){
//     window.location.href = 'login.html';
// }

async function buscar_produtos(categoria = "") {
    let url;
    if (categoria) {
        url = `https://fakestoreapi.com/products/category/${categoria}`;
    } else {
        url = "https://fakestoreapi.com/products/";
    }
    
    const produtos_container = document.getElementById('produtos_container');

    const resposta = await fetch(url);
    const produtos = await resposta.json();

    produtos_container.innerHTML = produtos.map(componente_produto).join('');
}

async function buscar_categorias() {
    const home_grid = document.getElementById('home_grid');

    try {
        const resposta = await fetch('https://fakestoreapi.com/products/categories');
        const categorias = await resposta.json();

        home_grid.innerHTML = criar_filtro(categorias) + '<div id=produtos_container> <div>';

        document.querySelector('#filtro_produtos select').addEventListener('change', async (event) => {
            await buscar_produtos(event.target.value);
        });
        
        buscar_produtos();

    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
}

buscar_categorias();