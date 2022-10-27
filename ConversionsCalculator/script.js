let numberUser = document.getElementById("num");

const binaryInput = document.querySelector('.binary')
const octalInput = document.querySelector('.octal')
const decimalInput = document.querySelector('.decimal')
const hexadecimalInput = document.querySelector('.hexadecimal')

function binary() {

    let currentNumber = parseInt(numberUser.value, 2);
    
    binaryInput.value = currentNumber.toString(2);

    octalInput.value = currentNumber.toString(8);

    decimalInput.value = currentNumber.toString(10);

    hexadecimalInput.value = currentNumber.toString(16);
}

function octal() {
    // Hexadecimal a decimal
    let currentNumber = parseInt(numberUser.value, 8);
    
    binaryInput.value = currentNumber.toString(2);

    octalInput.value = currentNumber.toString(8);

    decimalInput.value = currentNumber.toString(10);

    hexadecimalInput.value = currentNumber.toString(16);
}

function decimal() {
    let currentNumber = Number(numberUser.value);
    
    // binario a binario
    binaryInput.value = currentNumber.toString(2);
    
    // binario a octal
    octalInput.value = currentNumber.toString(8);

    //binario a decimal
    decimalInput.value = currentNumber.toString(10);
    
    // Numero a hexadecimal
    hexadecimalInput.value = currentNumber.toString(16);
}

function hexadecimal() {
    // Hexadecimal a decimal
    let currentNumber = parseInt(numberUser.value, 16);
    
    binaryInput.value = currentNumber.toString(2);

    octalInput.value = currentNumber.toString(8);

    decimalInput.value = currentNumber.toString(10);

    hexadecimalInput.value = currentNumber.toString(16);
}


