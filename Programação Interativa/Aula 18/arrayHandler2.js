function arrayHandler(array1, array2) {
    if(array1.length==array2.length){
        for(i=0; i<=array1.length; i++){
            console.log("Eu sou " + array1[i] + " e eu sou " + array2[i])
        }  
    } else {
        console.log("Tamanho de parâmetros é diferente")
    } 
}

//arrayHandler([1,2,3], ["o","l","á"]);
arrayHandler([1,2,3,4], ["o","l","á"]); // tamanho de parâmetros é diferente
