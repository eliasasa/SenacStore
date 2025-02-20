function gerarPopUp() {
    return `
    <div id="popup-overlay" class="popup-overlay" style="display: none;"></div>
    <div id="popup" class="popup" style="display: none;">
        <h2 id="popup-title"></h2>
        <div id="popup-content"></div>
        <button class="btn-fechar" id="btn-fechar-popup">Fechar</button>
    </div>
    `;
}

export function mostrarPopup(acao, dados) {
    if (!document.getElementById('popup')) {
        const divContainer = document.createElement('div');
        divContainer.innerHTML = gerarPopUp();
        document.body.appendChild(divContainer);
        document.getElementById('popup-overlay').addEventListener('click', fecharPopup);
        document.getElementById('btn-fechar-popup').addEventListener('click', fecharPopup);
    }

    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    let conteudoHtml = '';

    switch (acao) {
        case 'avaliacao':
            popupTitle.textContent = 'Avaliação';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <h3>O grupo está sendo atendido adequadamente?</h3>
                    <div class="botoes-avaliacao">
                        <button id="btn-sim" class="btn-avaliacao sim">Sim</button>
                        <button id="btn-nao" class="btn-avaliacao nao">Não</button>
                    </div>
                </div>
            `;
            break;
    
        case 'adicionarFavorito':
            popupTitle.textContent = 'Produto Adicionado aos Favoritos';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <img src="${dados.image}" class="popup-imagem" alt="${dados.title}">
                    <p><strong>Nome:</strong> ${dados.title}</p>
                    <p><strong>Preço:</strong> R$ ${dados.price}</p>
                </div>
            `;
            break;

        case 'editarUsuario':
            popupTitle.textContent = 'Editar Perfil';
            conteudoHtml = `
                <form id="form-editar-usuario" class="popup-conteudo">
                    <div class="input-group">
                        <label>Telefone:</label>
                        <input type="tel" id="edit-phone" value="${dados.phone}">
                    </div>
                    
                    <div class="input-group">
                        <label>Cidade:</label>
                        <input type="text" id="edit-city" value="${dados.address.city}">
                    </div>
                    
                    <div class="input-group">
                        <label>Rua:</label>
                        <input type="text" id="edit-street" value="${dados.address.street}">
                    </div>
                    
                    <div class="input-group">
                        <label>Número:</label>
                        <input type="number" id="edit-number" value="${dados.address.number}">
                    </div>
                    
                    <div class="input-group">
                        <label>CEP:</label>
                        <input type="text" id="edit-zipcode" value="${dados.address.zipcode}">
                    </div>
                    
                    <div class="input-group">
                        <label>Latitude:</label>
                        <input type="text" id="edit-lat" value="${dados.address.geolocation.lat}">
                    </div>
                    
                    <div class="input-group">
                        <label>Longitude:</label>
                        <input type="text" id="edit-long" value="${dados.address.geolocation.long}">
                    </div>
                    
                    <button type="button" id="btn-salvar-alteracoes">Salvar Alterações</button>
                    <button type="button" id="btn-deletar-conta" class="btn-delete">
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                        Excluir Conta
                    </button>
                </form>
            `;
            break;

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
            
        case 'sucesso':
            popupTitle.textContent = 'Alterações Salvas!';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <div class="popup-mensagem">
                        <svg viewBox="0 0 24 24" width="64" height="64" fill="#4CAF50">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h3>Dados atualizados com sucesso!</h3>
                        <div class="dados-atualizados">
                            <p><strong>Telefone:</strong> ${dados.phone}</p>
                            <p><strong>Cidade:</strong> ${dados.address.city}</p>
                            <p><strong>Endereço:</strong> ${dados.address.street}, ${dados.address.number}</p>
                            <p><strong>CEP:</strong> ${dados.address.zipcode}</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'cadastroSucesso':
            popupTitle.textContent = 'Cadastro Concluído!';
            conteudoHtml = `
                <div class="popup-conteudo">
                    <h3>Usuário cadastrado com sucesso!</h3>
                    <p>ID do usuário: ${dados}</p>
                </div>
            `;
            break;
    }
    
    window.scrollTo(0, 0);
    popupContent.innerHTML = conteudoHtml;
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';

    if (acao === 'avaliacao') {
        const btnSim = document.getElementById('btn-sim');
        const btnNao = document.getElementById('btn-nao');

        btnSim.addEventListener('click', () => {
            popupContent.innerHTML = `
                <div class="popup-conteudo">
                    <h3>Obrigado <3!</h3>
                </div>
            `;
            setTimeout(() => {
                fecharPopup();
            }, 2000);
        });

        moverBotaoFora('btn-nao');
    }
}

export function fecharPopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    setTimeout(() => {
        document.getElementById('popup-content').innerHTML = '';
    }, 300);
}

export function moverBotaoFora(btnId) {
    const btnNao = document.getElementById(btnId);

    if (!btnNao) {
        console.error('Botão não encontrado!');
        return;
    }

    const moverBotao = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const btnWidth = btnNao.offsetWidth;
        const btnHeight = btnNao.offsetHeight;

        const randomX = Math.random() * (windowWidth - btnWidth);
        const randomY = Math.random() * (windowHeight - btnHeight);

        btnNao.style.position = 'fixed';
        btnNao.style.left = `${randomX}px`;
        btnNao.style.top = `${randomY}px`;
    };

    const detectarProximidade = (event) => {
        const btnRect = btnNao.getBoundingClientRect();
        const distanciaX = Math.abs(event.clientX - (btnRect.left + btnRect.width / 2));
        const distanciaY = Math.abs(event.clientY - (btnRect.top + btnRect.height / 2));
        const distancia = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);

        const triggerDistance = 100;

        if (distancia < triggerDistance) {
            moverBotao();
        }
    };

    document.addEventListener('mousemove', detectarProximidade);

    btnNao.addEventListener('click', moverBotao);
}