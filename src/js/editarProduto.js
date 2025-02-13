// const token = sessionStorage.getItem('token');
// if (!token) {
//     alert('Você precisa estar logado para acessar esta página.');
//     window.location.href = 'home.html'; // Redireciona para a Home
// }

const form = document.getElementById('form-editar-produto');
const acaoSelect = document.getElementById('acao');
const campoId = document.getElementById('campo-id');
const camposProduto = document.getElementById('campos-produto');
const mensagemDiv = document.getElementById('mensagem');

function atualizarDiv (event) {
    event.preventDefault(false);
    const acao = acaoSelect.value;
    if (acao === 'adicionar') {
        campoId.style.display = 'none';
        camposProduto.style.display = 'block';
    } else if (acao === 'atualizar' || acao === 'deletar') {
        campoId.style.display = 'block';
        camposProduto.style.display = acao === 'atualizar' ? 'block' : 'none';
    }
}

function realizarEdit (event) {
    event.preventDefault(false);
    const acao = acaoSelect.value;
    const idProduto = document.getElementById('id-produto').value;
    let url = 'https://fakestoreapi.com/products';
    // let method = 'POST';
    let body = null;

    if (acao === 'adicionar') {
        body = {
            title: document.getElementById('titulo').value,
            price: parseFloat(document.getElementById('preco').value),
            desc: document.getElementById('descricao').value,
            categ: document.getElementById('categoria').value,
            imag: document.getElementById('imagem').value
        }


};

acaoSelect.addEventListener('change', atualizarDiv)
form.addEventListener('submit', realizarEdit)