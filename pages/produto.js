import produtoUnicoComponente from '../src/components/produto_unico.js';
import { mostrarPopup } from '../src/components/gerar_popUp.js';

function buscarProdutoPorId() {
  const produtoClicado = new URLSearchParams(document.location.search).get('produto');
  console.log('ID do produto:', produtoClicado);

  if (!produtoClicado) {
    console.error('Produto não especificado na URL.');
    mostrarPopup('erro', 'Produto não especificado.');
    return;
  }

  fetch(`https://fakestoreapi.com/products/${produtoClicado}`)
    .then(res => res.json())
    .then(json => {
      document.getElementById('produtoClicado').innerHTML = produtoUnicoComponente(json);

      const addFavorito = document.getElementById('addFavorito');
      
      addFavorito.addEventListener('click', () => {
        const produtoId = addFavorito.getAttribute('data-id');
        addAoFavoritos(produtoId, json);
      });
    })
    .catch(error => {
      console.error('Erro ao buscar o produto:', error);
      mostrarPopup('erro', 'Ocorreu um erro ao buscar o produto. Tente novamente mais tarde.');
    });
}

function addAoFavoritos(produtoId, produtoASerFavoritado) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (!favoritos.some(produtoFavoritado => produtoFavoritado.id === produtoASerFavoritado.id)) {
    favoritos.push(produtoASerFavoritado);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    mostrarPopup('adicionarFavorito', {
      title: produtoASerFavoritado.title,
      image: produtoASerFavoritado.image,
      price: produtoASerFavoritado.price,
      id: produtoASerFavoritado.id
    });
    console.log(favoritos);
  } else {
    mostrarPopup('erro', 'Este produto já está nos favoritos!');
    console.log(favoritos);
  }
}

document.addEventListener('DOMContentLoaded', buscarProdutoPorId);
