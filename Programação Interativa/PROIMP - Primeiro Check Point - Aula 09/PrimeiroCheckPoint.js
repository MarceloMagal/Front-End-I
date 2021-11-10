function qualprato(escolha, tempo) {
    padrao = 0;
    switch (escolha) {
        case 'Pipoca':
            padrao = 10; 
        break;

        case 'Macarrão':
            padrao = 8; 
        break;

        case 'Carne':
            padrao = 15; 
        break;

        case 'Feijão':
            padrao = 12; 
        break;

        case 'Brigadeiro':
            padrao = 8; 
        break;

        default:
            padrao= 10000;
            tempo = 13000;
            console.log('Prato inexistente');
        break;
    }    

    if ( (escolha = 'Pipoca') || (escolha = 'Macarrão') || (escolha = 'Carne') || (escolha = 'Feijão') || (escolha = 'Brigadeiro') ) {
        passa = 1;
    
        if (tempo === padrao) {            
            console.log('Prato pronto, bom apetite!!!') } else {

            if (tempo < padrao) {            
                console.log('tempo insuficiente') } else {    

                if ((tempo >= (padrao*2)) && (tempo < (padrao*3))) { 
                    console.log('a comida queimou') } else {
                        
                    if ((tempo >= (padrao*3)) && (passa = 1) ) {
                        console.log('Kabuumm') 
                    }
                }
            }               
        }

     }
}

qualprato ('Fejão', 1);
