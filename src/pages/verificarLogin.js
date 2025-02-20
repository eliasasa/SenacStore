function verificarLogin() {
    const token = sessionStorage.getItem('UserToken');
    const userId = sessionStorage.getItem('UserId');

    if (!token || !userId) {
        window.location.href = '../src/login.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    verificarLogin();
});
