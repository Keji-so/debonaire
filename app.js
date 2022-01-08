const menuButton = document.querySelector('.menu-btn');
const drop = document.querySelector('.drop');

menuButton.addEventListener('click', function() {
     menuButton.classList.toggle('turn');
     drop.classList.toggle('open'); 
   })