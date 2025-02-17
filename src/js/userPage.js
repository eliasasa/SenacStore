

async function getUserInfo (idUser) {
    let url = `https://fakestoreapi.com/users/${idUser}`;
    const resposta = await fetch (url).then(res => res.json())
    console.log(resposta) 
} 

