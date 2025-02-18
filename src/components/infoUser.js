export async function getInfoUser(idUser) {
    let url = `https://fakestoreapi.com/users/${idUser}`;
    
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status}`);
        }
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        return error
    }
}
