function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    if (b === 0){
        return "ERROR";
    };
    return Math.round(a/b*1000000)/1000000;
};

let numb1 = 152;
let numb2 = 30;

console.log("Addition: "+ add(numb1, numb2));
console.log("Substraction: "+ substract(numb1, numb2));
console.log("Multiplication: "+ multiply(numb1, numb2));
console.log("Division: "+ divide(numb1, numb2));