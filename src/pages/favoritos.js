import criar_filtro from "../pages/home/filtro_home.js";
import componente_produto from '../pages/home/produto_home.js';

const favoritados = JSON.parse(localStorage.getItem('favoritos')) || [];

console.log(favoritados);

if (favoritados.length > 0) {
    favoritados.map((itemAtual) => {
        const produtoDiv = componente_produto(itemAtual);
        document.getElementById('listaFavoritos').innerHTML += produtoDiv;
    });
} else {
    console.log('Nenhum item favoritado encontrado.');
}

function carregarCategorias() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categorias => {
            document.getElementById('filtroCategorias').innerHTML = criar_filtro(categorias);
            
            document.querySelector('#filtro_produtos select').addEventListener('change', (event) => {
                const categoriaSelecionada = event.target.value;
                exibirFavoritos(categoriaSelecionada);
            });
        });
}
