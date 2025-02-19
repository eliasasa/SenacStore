import produtoUnicoComponente from '../src/components/produto_unico.js';

function buscarProdutoPorId() {
  const produtoClicado = new URLSearchParams(document.location.search).get('produto');
  console.log(produtoClicado)

  fetch(`https://fakestoreapi.com/products/${produtoClicado}`)
    .then(res => res.json())
    .then(json => {
      document.getElementById('produtoClicado').innerHTML = produtoUnicoComponente(json);

      const addFavorito = document.getElementById('addFavorito');
      
      addFavorito.addEventListener('click', () => {
        const produtoId = addFavorito.getAttribute('data-id');
        addAoFavoritos(produtoId, json);
      });
    }
    );
}


function addAoFavoritos(produtoId, produtoASerFavoritado) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (!favoritos.some(produtoFavoritado => produtoFavoritado.id === produtoASerFavoritado.id)) {
    favoritos.push(produtoASerFavoritado);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Produto adicionado aos favoritos!');
  } else {
    alert('Este produto já está nos favoritos!');
  }

  console.log(favoritos);
}

buscarProdutoPorId();