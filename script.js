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
let numbDisplayed = 0;


const display = document.querySelector(".display");
function addDisplay (content){
    let before = display.textContent;
    display.textContent = before + content;
    numbDisplayed = Number(display.textContent);
};


// Setting display to clicked digit
const digitButtons = document.querySelectorAll(".digitContainer button");
const arrDigitRef = Array.from(digitButtons);
arrDigitRef.pop();
for (let node of arrDigitRef){
    node.addEventListener("click", function(){
        addDisplay(this.textContent);
    });
};


// Clear button
const clearButton = document.querySelector(".clearButton");
function clearDisplay() {
    display.textContent = "";
    numbDisplayed = 0;
};
clearButton.addEventListener("click", clearDisplay);


// Operator buttons clicked
const arrOpButtons = Array.from(document.querySelectorAll(".operatorContainer button"));
arrOpButtons.pop();
for (let operator of arrOpButtons){
    operator.addEventListener("click", function(){
        if (numb1 === 0){
            numb1 = numbDisplayed;
            clearDisplay();
        } else {
            numb2 = numbDisplayed;
            numbDisplayed = operate(numb1, op, numb2);
            display.textContent = `${numbDisplayed}`;
            numb1 = numbDisplayed;
            clearDisplay();
        };
        op = this.textContent;
    });
};


// Equal button clicked
const equalButton = document.querySelector(".equalButton");
equalButton.addEventListener("click", function(){
    numb2 = numbDisplayed;
    numbDisplayed = operate(numb1, op, numb2);
    display.textContent = `${numbDisplayed}`;
    numb1 = 0;
})