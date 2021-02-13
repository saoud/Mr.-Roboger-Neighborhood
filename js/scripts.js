//Buisness Logic
function roboRogers(number) {
    const array = [];
    let i = 0;

    while (i<=number) {
        array.push(i.toString());
        i ++;
    }

    let index = 0;

    for (index = 0; index < array.length; index++) {
        if (array[index].includes(1)){
            array[index] = "Beep!";
        } else if array[index].includes(2){
            array[index] = "Boop!"
        } else if array[index].includes(3){
            array[index] = "Won't you be my neighbor?";
        } else array[index] = array[index];
    }
}



//UI Logic