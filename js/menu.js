const botaomenu = document.querySelector(".icone") // nav h2 a
const menu = document.querySelector(".menu") // nav ul

botaomenu.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.toggle("menu-aberto");

    if (menu.classList.contains("menu-aberto") ) {
        botaomenu.innerHTML = "Fechar &times;";
    }
    else {
        botaomenu.innerHTML = "Menu &equiv;";
    }
    
});