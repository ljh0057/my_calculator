const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

let firstOperand = null;
let secondOperand = null;
let operator = null;
let resetInput = false;
let currentInput = '0';

function newDisplay() {
    display.textContent = currentInput;
}

function calculate(first, operator, second) {
    const num1 = Number(first);
    const num2 = parseFloat(second);
    switch (operator) {
        case '+':
            return num1 + num2; 
            break;
        case '-': 
            return num1 - num2;
            break; 
        case '*':
            return num1 * num2;
            break; 
        case '/':
            return num2 !== 0 ? num1 / num2 : 'error';
            break; 
        default:
            return 'error';
    }
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
    const value = button.textContent;
    console.log(value);
        
        if (button.classList.contains('number')) {
            if (currentInput === '0' || resetInput) {
                currentInput = value;
                resetInput = false;
            }else {
                currentInput += value;
            }
            newDisplay();
        }
        if (button.classList.contains('operator')) {
            if (value === '=') {
                if(firstOperand !== null && operator !== null) {
                    const result = calculate(firstOperand, operator, currentInput);
                    currentInput = result.toString();
                    resetInput = true;
                    display.textContent = currentInput
                    firstOperand = null;
                    operator = null;
                }   
            }else {
                firstOperand = currentInput;
                operator = value;
                resetInput = true;
            }   
        }
    });
});