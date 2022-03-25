const display = document.getElementById('display');
const memory = document.getElementById('memory');
const numberBtns = document.querySelectorAll('.numbers');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');
const backBtn = document.getElementById('back');

let operator = '';
let a = '';
let b = '';

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
     return ((a == 0 || b == 0) ? 'XXX' : a / b);
}

function print(key) {
     display.textContent += key;
}

function controlDecimal() {
     for (i = 0; i < 5; i++) {
          let lastChar = display.textContent.charAt(display.textContent.length - 1);
          if (lastChar === '0' || lastChar === '.') {
               display.textContent = display.textContent.substring(0, display.textContent.length - 1);
          } else {
               return;
          }
     };
}

numberBtns.forEach(numberBtn => numberBtn.addEventListener('click', function(e) {print(this.textContent);}));

operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', function(e) {
     if (a === '' && display.textContent === '') {
          return;
     } else if (a === '') {
          a = parseFloat(display.textContent);
          operator = this.textContent;
          memory.textContent = a + ' ' + operator;
          display.textContent = '';
     } else {
          b = parseFloat(display.textContent);
          display.textContent = '';
          a = operate(a, b, operator);
          b = '';
          operator = this.textContent;
          memory.textContent = a + ' ' + operator;
     }
}));

decimalBtn.addEventListener('click', function(e) {
     const isDecimal = display.textContent.includes('.');
     if (isDecimal === false) {
          display.textContent += '.'
     }
})

equalBtn.addEventListener('click', function() {
     b = parseFloat(display.textContent);
     memory.textContent += display.textContent;
     display.textContent = operate(a, b, operator).toFixed(4);
     controlDecimal();
     b = '';
     a = '';
});

clearBtn.addEventListener('click', function() {
     display.textContent = '';
     memory.textContent = '';
     a = '';
     b = '';
});

// button removing last character in display

backBtn.addEventListener('click', function () {
     display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

// keyboard input inspired by Anastazy6's solution

window.onkeydown = function(e) {
     let button;
     let keyPress = e.key;
     let isNumber = false;
     switch (keyPress) {
          case '1':
               button = document.getElementById('1');
               isNumber = true;
               break;
          case '2':
               button = document.getElementById('2');
               isNumber = true;
               break;
          case '3':
               button = document.getElementById('3');
               isNumber = true;
               break;
          case '4':
               button = document.getElementById('4');
               isNumber = true;
               break;
          case '5':
               button = document.getElementById('5');
               isNumber = true;
               break;
          case '6':
               button = document.getElementById('6');
               isNumber = true;
               break;
          case '7':
               button = document.getElementById('7');
               isNumber = true;
               break;
          case '8': 
               button = document.getElementById('8');
               isNumber = true;
               break;
          case '9':
               button = document.getElementById('9');
               isNumber = true;
               break;
          case '0':
               button = document.getElementById('0');
               isNumber = true;
               break;
          case '*':
               button = document.getElementById('multiply');
               break;
          case 'x':
               button = document.getElementById('multiply');
               break;
          case '/':
               button = document.getElementById('divide');
               break;
          case '+':
               button = document.getElementById('plus');
               break;
          case '-':
               button = document.getElementById('minus');
               break;
          case 'Enter':
               button = document.getElementById('equals');
               break;
          case '=':
               button = document.getElementById('equals');
               break;
          case 'Escape':
               button = document.getElementById('clear');
               break;
          case 'Backspace':
               button = document.getElementById('back');
               break;
          case '.':
               button = document.getElementById('decimal');
               break;
          case ',':
               button = document.getElementById('decimal');
               break;               
     }
     if (display.textContent.length === 15 && isNumber === true) {
          return;
     }         
     button !== undefined ? button.click() : console.log('This button does nothing.');
}

