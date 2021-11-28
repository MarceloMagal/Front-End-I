function soma(a=1, b=3)
{return a+b}

console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));

let numeros= [10, 8, 7, 99, 0, 1, 6];
numeros.sort(function(a,b){ return b-a;});
console.log(numeros);

console.log('===================');

var z=0;
for (var i = 20; i <50; i+=10) {
    z+=i;
    
}
console.log(z);