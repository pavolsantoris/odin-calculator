const display = document.getElementById('display');
const oneBtn = document.getElementById('number1');
const twoBtn = document.getElementById('number2');
const threeBtn = document.getElementById('number3');
const fourBtn = document.getElementById('number4');
const fiveBtn = document.getElementById('number5');
const sixBtn = document.getElementById('number6');
const sevenBtn = document.getElementById('number7');
const eightBtn = document.getElementById('number8');
const nineBtn = document.getElementById('number9');
const zeroBtn = document.getElementById('number0');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

function operate(a, b, operator) {
     switch (operator) {
          case '+' :
               return add(a, b);
          case '-' :
               return substract(a, b);
          case '*' :
               return multiply(a, b);
          case '/' :
               return divide(a, b);
     }
}

function add(a, b) {
     return a + b;
}

function substract(a, b) {
     return a - b;
}

function multiply(a, b) {
     return a * b;
}

function divide(a, b) {
     return a / b;
}

function print(key) {
     display.textContent += key;
}

oneBtn.addEventListener('click', print(oneBtn.textContent));
twoBtn.addEventListener('click', print(twoBtn.textContent));