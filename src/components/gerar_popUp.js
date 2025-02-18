export function mostrarPopup(acao, dados) {
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

export function fecharPopup() {

    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    setTimeout(() => {
        document.getElementById('popup-content').innerHTML = '';
    }, 300);
}
document.getElementById('popup-overlay').addEventListener('click', fecharPopup);
document.getElementById('btn-fechar-popup').addEventListener('click', fecharPopup);