const burger = document.getElementById(`burger`)

const menu = document.querySelector(`div.menu`)
menu.style.display=`none`

const main = document.querySelector(`main`)
main.style.display=`block`

const footer = document.querySelector(`footer`)
footer.style.display=`block`

function tamanho(){//para o burger ficar visivel em telas pequenas
    if (window.innerWidth <= 1023){
        burger.style.display = 'block'
    } else {
        burger.style.display = 'none'
    }
}

function clickMenu(){//para alterações do icon e dos elementos visiveis
    if(menu.style.display===`none` && main.style.display===`block`){
        menu.style.display=`block`
        burger.innerHTML=`close`
        main.style.display=`none`
        footer.style.display=`none`
    }else{
        menu.style.display=`none`
        burger.innerHTML=`menu`
        main.style.display=`block`
        footer.style.display=`block`
    }
}

function clickDados(){//para os elementos ficarem visiveis ao serem buscados
    if(main.style.display===`none` && footer.style.display===`none`){
        footer.style.display=`block`
        main.style.display=`block`
        menu.style.display=`none`
        burger.innerHTML=`menu`
    }
}

//rolagem suave para os locais determinados
document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
    anchor.addEventListener(`click`, function(e){
        e.preventDefault();

        const targetId = this.getAttribute(`href`);
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: `smooth`
        });
    });
});
