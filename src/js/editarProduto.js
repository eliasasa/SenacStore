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

acaoSelect.addEventListener('change', atualizarDiv);
form.addEventListener('submit', realizarEdit);
document.getElementById('popup-overlay').addEventListener('click', fecharPopup);

function atualizarDiv(event) {
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

function mostrarPopupErro(mensagem) {
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    popupTitle.textContent = 'Erro';
    popupContent.innerHTML = `<div class="popup-conteudo"><p>${mensagem}</p></div>`;
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function mostrarPopup(acao, dados) {
    console.log(dados);
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    let conteudoHtml = '';

    switch (acao) {
        case 'adicionar':
            popupTitle.textContent = 'Produto Adicionado';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <img src="${dados.image}" class="popup-imagem" alt="${dados.title}">
                    <p><strong>ID:</strong> ${dados.id}</p>
                    <p><strong>Nome:</strong> ${dados.title}</p>
                    <p><strong>Preço:</strong> $${dados.price}</p>
                </div>
            `;
            break;

        case 'atualizar':
            popupTitle.textContent = 'Produto Atualizado';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <img src="${dados.image}" class="popup-imagem" alt="${dados.title}">
                    <p><strong>ID:</strong> ${dados.id}</p>
                    <p><strong>Novo Nome:</strong> ${dados.title}</p>
                    <p><strong>Novo Preço:</strong> $${dados.price}</p>
                    <p><strong>Categoria:</strong> ${dados.category}</p>
                </div>
            `;
            break;

        case 'deletar':
            popupTitle.textContent = 'Produto Deletado';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <img src="${dados.image}" class="popup-imagem" alt="${dados.title}">
                    <p><strong>Nome:</strong> ${dados.title}</p>
                    <p><strong>ID:</strong> ${dados.id}</p>
                </div>
            `;
            break;

        case 'erro':
            popupTitle.textContent = 'Erro';
            conteudoHtml = `<div class="popup-conteudo"><p>${dados}</p></div>`;
            break;
    }

    popupContent.innerHTML = conteudoHtml;
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    setTimeout(() => {
        document.getElementById('popup-content').innerHTML = '';
    }, 300);
}

async function realizarEdit(event) {
    event.preventDefault();
    try {
        const acao = acaoSelect.value;

        const idProduto = document.getElementById('id-produto').value;
        const tituloProduto = document.getElementById('titulo').value;
        const precoProduto = parseFloat(document.getElementById('preco').value);
        const descricaoProduto = document.getElementById('descricao').value;
        const imagemProduto = document.getElementById('imagem').value;
        const categoriaProduto = document.getElementById('categoria').value;

        const url = 'https://fakestoreapi.com/products';

        if (acao === 'adicionar' && tituloProduto !== '' && precoProduto !== '' && descricaoProduto !== '' && imagemProduto !== '' && categoriaProduto !== '') {
            const resposta = await adicionarProduto(url, 'POST', tituloProduto, precoProduto, descricaoProduto, imagemProduto, categoriaProduto);
            mostrarPopup('adicionar', resposta);
        } else if (acao === 'deletar' && idProduto !== '') {
            const resposta = await deletarProduto(url, idProduto);
            if (resposta === null) {
                console.log(resposta);
                mostrarPopupErro('Produto não encontrado');
            } else {
                mostrarPopup('deletar', resposta);
            }
        } else if (acao === 'atualizar' && idProduto !== '' && tituloProduto !== '' && precoProduto !== '' && descricaoProduto !== '' && imagemProduto !== '' && categoriaProduto !== '') {
            const body = {
                title: tituloProduto,
                price: precoProduto,
                description: descricaoProduto,
                image: imagemProduto,
                category: categoriaProduto
            };

            const resposta = await atualizarProduto(url, idProduto, body);
            if (resposta === null) {
                console.log(resposta);
                mostrarPopupErro('Produto não encontrado');
            } else {
                mostrarPopup('atualizar', resposta);
            }
        } else {
            mostrarPopupErro('Por favor, preencha todos os campos necessários.');
        }
    } catch (erro) {
        mostrarPopupErro('Erro: ' + erro);
    }
}

async function atualizarProduto(url, id, dados) {
    const urlId = `${url}/${id}`;
    const requisicao = await fetch(urlId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    });

    if (!requisicao.ok) {
        throw new Error(`Erro ao atualizar o produto (Status: ${requisicao.status})`);
    }

    const resposta = await requisicao.json();
    return resposta || null;
}

async function adicionarProduto(url, metodo, titulo, preco, descricao, imagem, categoria) {
    const requisicao = await fetch(url, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: titulo,
            price: preco,
            description: descricao,
            image: imagem,
            category: categoria
        })
    });

    if (!requisicao.ok) {
        throw new Error(`Erro ao adicionar produto (Status: ${requisicao.status})`);
    }

    return requisicao.json();
}

async function deletarProduto(url, id) {
    const urlId = `${url}/${id}`;
    const requisicao = await fetch(urlId, {
        method: 'DELETE'
    });

    if (!requisicao.ok) {
        throw new Error('Erro ao deletar o produto');
    }

    return requisicao.json() || null; // Retorna null se a resposta for indefinida
}
