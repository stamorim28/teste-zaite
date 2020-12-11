//MENU HAMBURGER
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}

//SLIDE-CAROUSEL
const counter = 1;
    setInterval(function(){
      document.getElementById('r' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 3000);