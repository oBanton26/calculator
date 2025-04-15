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



let numb1 = 0;
let numb2 = 0;
let op = "";

const display = document.querySelector(".display");
function setDisplay (content){
    let before = display.textContent;
    display.textContent = before + content;
};

// Setting display to clicked digit
const digitButtons = document.querySelectorAll(".digitContainer button");
const arrDigitRef = Array.from(digitButtons);
arrDigitRef.pop();
arrDigitRef.splice(-2,1);
for (let node of arrDigitRef){
    node.addEventListener("click", function(){
        setDisplay(this.textContent);
    });
};