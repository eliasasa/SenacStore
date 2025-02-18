export function renderUserInfo(dados) {
    document.getElementById('name').textContent = dados.name.firstname + ' ' + dados.name.lastname;
    document.getElementById('username').textContent = dados.username;
    document.getElementById('userEmail').textContent = dados.email;
    document.getElementById('userPhone').textContent = dados.phone;
    document.getElementById('userCity').textContent = dados.address.city;
    document.getElementById('userStreet').textContent = dados.address.street;
    document.getElementById('userPhoneNum').textContent = dados.address.number;
    document.getElementById('userCEP').textContent = dados.address.zipcode;
    document.getElementById('firstGeo').textContent = dados.address.geolocation.lat;
    document.getElementById('lastGeo').textContent = dados.address.geolocation.long;
}
