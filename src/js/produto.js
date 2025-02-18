import { produtoUnico } from './components/produtoUnico.js';

function buscarProdutoPorId() {
    const produtoClicado = new URLSearchParams(document.location.search).get('produtoClicado');

    fetch(`https://fakestoreapi.com/products/${produtoClicado}`)
        .then(res => res.json())
        .then(json => {
            document.getElementById('produtoClicado').innerHTML = produtoUnicoComponente(json);
        });
}

buscarProdutoPorId();