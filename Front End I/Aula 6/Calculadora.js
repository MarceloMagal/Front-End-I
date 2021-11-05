// comentário em linha 
/* comentário em bloco */

/**
 * 
 * @param {comentário em bloco para documentação} x 
 * @param {*} y 
 */
//exercício calculadora Aula 06

//criar função adicionar
function adicionar (x,y){
   var soma = x + y;
   console.log("Soma:",x,'+',y,'=',soma);
   return soma;
}
console.log ("------- Teste de Operações / Calculadora -------")
console.log(adicionar(3,5));


function subtrair (x,y){
    var subtr = x - y;
    console.log("Subtração:",x,'-',y,'=',subtr);
    return subtr;
 }
 console.log(subtrair(3,5));

 
 function multiplicar (x,y){
    var multi = x * y;
    console.log("Multiplicação:",x,'*',y,'=',multi);
    return multi;
 }
 console.log(multiplicar(3,5));


 function dividir (x,y){
    var divi = x / y;
    console.log("Divisão:",x,'/',y,'=',divi);
    return divi;
 }
 console.log(dividir(0,5));