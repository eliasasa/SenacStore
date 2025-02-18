import {criar_filtro} from "./filtro_home.js";

// const renderizarFavoritos = () => {
//     const favoritos = [1, 2, 3]
//     // const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
//     const container = document.querySelector('#listaFavoritos');
//     container.innerHTML = '';
    
//     favoritos.forEach(produtoId => {
//         const produto = obterProdutoPorId(produtoId); 
//         const htmlProduto = componenteProdutoFavorito(produto);
//         container.innerHTML += htmlProduto;
//     });
// };

// fetch(`https://fakestoreapi.com/products/${id}`);
// crtl + D seleciona a palavra
const ids = [1, 2, 3, 4, 5];

async function fetchProdutos() {
  for (let id of ids) {
    try {
      const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
      const produto = await resposta.json();
      console.log(produto);

      const produtoDiv = `<div class='produto-div'> <img src='${produto.image}'class="imagem-produto">
      <h2>${produto.title}</h2> <span>R$${produto.price}</span></div>`
      
    
      document.getElementById('listaFavoritos').innerHTML += produtoDiv;



      
    } catch (error) {
      console.error(`Erro ${id}:`, error);
    }
  }
}

fetchProdutos();



// document.addEventListener("DOMContentLoaded", renderizarFavoritos);
// document.addEventListener("DOMContentLoaded", buscarCategorias);


const componenteProdutoFavorito = ({title, image, price, id}) => {
    
    return `
        <div class="produto">
            <a href="./favoritos.html?favoritos=${id}">
                <div class="imgProduto">
                    <img src="${image}">
                </div>
                <div class="infoProduto">
                    <h2>${title}</h2>
                    <p class="preco">R$ ${price}</p>
                </div>
            </a>
        </div>
    `;
};

// export default componenteProdutoFavorito;

// async function buscarCategorias() {

//     const container = document.querySelector('#listaFavoritos');

//     const categorias = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json());

//     container.innerHTML = criar_filtro(categorias) + '<div id="produtosContainer"></div>';

//     document.querySelector('#filtroProdutos select').addEventListener('change', (event) => {
//         buscarProdutos(event.target.value);
//     });

//     buscarProdutos();
// }

