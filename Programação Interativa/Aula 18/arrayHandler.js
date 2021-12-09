
function arrayHandler(array1, array2) {
    
    // TESTAR se os tamanhos dos arrays são iguais
    if (array1.lenght === array2.lenght) {
            x = 0;
        } else {            
            x = 1;
          
        }
console.log(x);
    // CASO true
        // FAZ AÇÃO DA FUNÇÃO
        switch (x) {
            case 0:
                console.log('11111verdadeee');
                break;
            case 1:
                console.log('falsooo');
                break;        
            default:
                break;
        }

        // ESTRUTURA DE REPETIÇÃO QUE CONSIGA PASSAR POR TODO ARRAY
        // em cada posição, mostra na tela "Eu sou array1[contador] e eu sou array2[contador]"

    // CASO false
        // mostrar na tela que tamanho é diferente e não faz a ação da função
    
}

arrayHandler([1,2,3], ["o","l","á"]);

//arrayHandler([1,2,3,4], ["o","l","á"]); // tamanho de parâmetros é diferente

