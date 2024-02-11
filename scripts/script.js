
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

export function click(){

    menu.addEventListener('click', () => {
        
        nav.classList.toggle('active');
    
    });

}

















