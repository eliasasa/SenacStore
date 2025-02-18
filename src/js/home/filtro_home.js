const criar_filtro = (categorias) => {
    return `
        <div id="filtro_produtos">    
            <select>
                <option value="">Todas as categorias</option>
                ${categorias.map(categoria => `<option value="${categoria}">${categoria}</option>`).join("")}
            </select>
        </div>
    `;
};

export default criar_filtro;