/* abrir e fechar o menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
        element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

/* esconder menu ao clicar nos links */

const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', () => {
    nav.classList.remove('show');
    })
};