var btnHamburger = document.querySelector('.btn-hamburger');
var btnClose = document.querySelector('.btn-close');
var nav = document.querySelector('nav');

btnHamburger.addEventListener('click', openSidebar);
btnClose.addEventListener('click', closeSidebar);


function openSidebar(){
    document.querySelector('.sidebar').style.display = 'block';
    document.querySelector('.btn-hamburger').style.color = 'white';

}

function closeSidebar(){
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.btn-hamburger').style.color = 'black';

}

