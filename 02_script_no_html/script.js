    
    //Script aparte do index, que é linkado com o comando script src
    const botao = document.getElementById('MeuBotao'); 
    const titulo = document.getElemntById('titulo'); 

    botao.addEventListener('click', function(){
       titulo.style.color = 'blue';
       titulo.textContent = "Texto alterado!"; 
    });