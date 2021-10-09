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


// mudar o header da pagina quando der scrool




function changeHeaderShadowOnScroll() {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if (window.scrollY >= navHeight){
        // scroll e maior q a altura do header
        header.classList.add('scroll')
    } else {
        // scroll e menor q a altura do header
        header.classList.remove('scroll')

    }
}



/* swipper */


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: false,
    keyboard: true
});


/* Scroll reveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:700,
    reset: true
})

scrollReveal.reveal(`
                    #home .image, #home .text,
                    #about .image, #about .text,
                    #services header, #services .card,
                    #testimonials header, #testimonials .testimonials,
                    #contact .text, #contact .links,
                    footer .brand, footer .social
                    `, {interval:100});



/* back to top */

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY >= 500){
        // scroll e maior q 500
        backToTopButton.classList.add('show')
    } else {
        // scroll e menor q 500
        backToTopButton.classList.remove('show')

    }
}


// Ouvindo evento de srcroll

window.addEventListener('scroll', () => {
    changeHeaderShadowOnScroll()
    backToTop()
});