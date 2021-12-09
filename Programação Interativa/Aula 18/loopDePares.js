function loopdepares(x) {
    for (let i = 0; i <= 100; i++) {
        if (i % x === 0) {
            console.log('O número ' + i + ' é par');
        } else {
            console.log(i);
        }
    }

}

//loopdepares(2);


let  loopderes2 = (i, num1) => {
    let resto = i % num1;
    if (resto === 0) {
        console.log(resto);    
    }
}

//loopderes2(3,3);

let print = m => console.log(m);
//print('Oi. JS é um saco');


let soma = (n1, n2) => n1 + n2;
//console.log(soma(1,3));


//setTimeout ( function () {
 //   console.log("Ola");
//}, 5000)

//let minhaCallback = () => console.log('Ola mundo');
//setTimeout(minhaCallback, 1000)

function iniciais(nome, sobre) {
    return nome[1-3] + sobre[0];
}
function bomDia(nome, sobre, callback) {
    return 'Ola, ' + callback(nome, sobre);
};

console.log(bomDia('Amanda', 'Ferreira', iniciais));