//Es como realizar el html, pero en js:

document.addEventListener('DOMContentLoaded',()=>{

const mainMeu = document.createElement('main');
const headerMeu = document.createElement ('header');
const footerMeu = document.createElement ('footer');

mainMeu.id = 'main';
headerMeu.id = 'header';
footerMeu.id = 'footer';

headerMeu.innerHTML = '<h2> Capçalera</h2>'; //header
footerMeu.innerHTML = '<h2> Peu de pagina<h2>'; //footer


document.body.appendChild(headerMeu);
document.body.appendChild(mainMeu);
document.body.appendChild(footerMeu);

});