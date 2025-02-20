import {criar_filtro} from "./filtro_home.js";
import componente_produto from "./produto_home.js"

const favoritados = JSON.parse(localStorage.getItem('favoritos'));
console.log(favoritados)

favoritados.map((itemAtual)=>{
  const produtoDiv = `<div class='produto-div'> 
      <img src='${itemAtual.image}'class="imagem-produto">
      <h2>${itemAtual.title}</h2> <span>R$${itemAtual.price}</span>
      </div>`

  document.getElementById('listaFavoritos').innerHTML += produtoDiv;
})

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
