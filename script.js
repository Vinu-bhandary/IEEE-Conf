document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('show');
    });
});