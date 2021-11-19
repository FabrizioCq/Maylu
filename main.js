document.querySelector('.menu-boton').addEventListener('click',()=>{
document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.contenedor1');
ScrollReveal().reveal('.encabezado',{delay: 300});
ScrollReveal().reveal('.prendas',{delay: 500});
ScrollReveal().reveal('.banner',{delay: 500});
ScrollReveal().reveal('.social',{delay: 500});
