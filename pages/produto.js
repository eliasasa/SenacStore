import produtoUnicoComponente from '../src/components/produto_unico.js';

function buscarProdutoPorId() {
    const produtoClicado = new URLSearchParams(document.location.search).get('produto');
    console.log(produtoClicado)

    fetch(`https://fakestoreapi.com/products/${produtoClicado}`)
        .then(res => res.json())
        .then(json => {
            document.getElementById('produtoClicado').innerHTML = produtoUnicoComponente(json);
        });
}


buscarProdutoPorId();