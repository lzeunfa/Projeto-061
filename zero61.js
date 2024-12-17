var burger = document.getElementById(`burger`)

var menu = document.querySelector(`div.menu`)

var main = document.querySelector(`main`)

function tamanho(){//para o burger ficar visivel em telas pequenas
    if (window.innerWidth <= 679){
        burger.style.display = 'block'
    } else {
        burger.style.display = 'none'
    }
}

function clicar(){
    if(menu.style.display===`none`){
        menu.style.display=`block`
        burger.innerHTML=`close`
        main.style.display=`none`
    }else{
        menu.style.display=`none`
        burger.innerHTML=`menu`
        main.style.display=`block`
    }
}
