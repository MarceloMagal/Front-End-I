//PROBLEMA
// determinar o vencedor de um concurso strand up - 3 participantes
// público => max 100 pessoas

const alice = [23, 82, 46];
const bob = [45, 8, 32];

function encontrarganhador(a, b) {

    var pontosParticipanteA = 0;
    var pontosParticipanteB = 0;
    

    for (let i = 0; i < a.length; i++) {
      
        if (alice[i] > bob[i] ) {
            pontosParticipanteA = pontosParticipanteA + 1;            
        } 
        
        if (alice[i] < bob[i] ){
            pontosParticipanteB = pontosParticipanteB + 1;
        }
        
    }

    if (pontosParticipanteA > pontosParticipanteB) {
        console.log("Alice ganhou")
    } else {
        console.log("Bob ganhou");
    }
    
}



encontrarganhador(alice, bob);