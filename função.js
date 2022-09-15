



function modoEscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
        }


       function mudarTamanho(){
                if (window.innerWidth >= 720){
                itens.style.display ='block'
              }else{
                itens.style.display = 'none'
              }
            }
        

            function clickMenu(){
                if(itens.style.display == 'block'){
                itens.style.display= 'none'
            }
            else{
                itens.style.display = 'block'
            }
        }
