function soletrar(texto){
    console.log(texto.replace('-', '').tolocaleuppercase().split("").join("-"));

}
soletrar("digital-house");
soletrar("ctd");