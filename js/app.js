document.addEventListener("DOMContentLoaded", () => {
    let menu = document.getElementById("menu");
    let nav = document.querySelector('nav');
    menu.addEventListener('click', () => {
        nav.classList.toggle('appear');
    })
})
