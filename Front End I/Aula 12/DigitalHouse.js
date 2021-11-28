let array = [];

function digitalHouse(num1, num2) {

    for (let index = 1; index <= 100; index++) {
        array.push(index);
        
    }

    for (let i = 0; i <= 100; i++) {

        recebe = i;
        if (i % num1 == 0) {
            array[i] = "Digital"
            
        } else if (i % num2 == 0) {
            array[i] = "House"

        }
            
    }

    console.log(array);

}

digitalHouse(2, 3);