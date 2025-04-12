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

function operate (numb1, op, numb2){
    switch (op) {
        case "+":
            return add(numb1, numb2);
        case "-":
            return substract(numb1, numb2);
        case "X":
            return multiply(numb1, numb2);
        case "/":
            return divide(numb1, numb2);
    }
};

let numb1 = 152;
let numb2 = 30;
let op = "+";


console.log(operate(numb1, op, numb2));