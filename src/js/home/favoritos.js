import {criar_filtro} from "./filtro_home.js";


const ids = [1, 2, 3, 4, 5,6,7,8,9,10];

window.onload = () => {
  fetchProdutos();
}

async function fetchProdutos() {
  for (let id of ids) {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
      const produto = await resposta.json();
      console.log(produto);

      const produtoDiv = `<div class='produto-div'> 
      <img src='${produto.image}'class="imagem-produto">
      <h2>${produto.title}</h2> <span>R$${produto.price}</span>
      </div>`
      
    
      
      document.getElementById('listaFavoritos').innerHTML += produtoDiv;



      
    } catch (error) {
      console.error(`Erro ${id}:`, error);
    }
  }
}

