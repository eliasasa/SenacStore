export function renderUserInfo(div, dados) {
    div.innerHTML = `
        <div class="user_details">
            <div class="name_username">
                <h2>${dados.name.firstname} ${dados.name.lastname}</h2>
                <h3>@${dados.username}</h3>
            </div>
            <div class="contact_info">
                <h2>Informações de Contato</h2>
                <p><strong>E-mail:</strong> ${dados.email}</p>
                <p><strong>Telefone:</strong> ${dados.phone}</p>
            </div>
            <div class="adress_info">
                <h2>Endereço</h2>
                <p><strong>Cidade:</strong> ${dados.address.city}</p>
                <p><strong>Rua:</strong> ${dados.address.street}</p>
                <p><strong>Nº:</strong> ${dados.address.number}</p>
                <p><strong>Caixa-Postal:</strong> ${dados.address.zipcode}</p>
                <div class="geolocal_info">
                    <h2>Geo-localização</h2>
                    <p><strong>Latitude:</strong> ${dados.address.geolocation.lat}</p>
                    <p><strong>Longitude:</strong> ${dados.address.geolocation.long}</p>
                </div>
            </div>
        </div>
    `;
}
