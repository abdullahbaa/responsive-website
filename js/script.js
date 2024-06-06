let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.oneclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}