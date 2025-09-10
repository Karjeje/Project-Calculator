function add(a, b) {
        return a + b;
      }

function subtract(a, b) {
        return b - a;
      }

function multiply(a, b) {
        return a * b;
      }

function divide(a, b) {
        return b / a;
      }

let a
let b
let operator

function operate(a, b) {
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a,b);
    }
    else if (operator === "x") {
        return multiply(a, b)
    }
    else if (operator === "÷") {
        return divide(a, b)
    }
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

a = "";
b= "";
let result = null;
let shouldResetDisplay = false;

digits.forEach((button) => {
    button.addEventListener("click", function() {
        if (display.textContent.length <= 12) {
            if (shouldResetDisplay) {
                display.textContent = button.textContent;
                shouldResetDisplay = false; 
            }
            else {
                display.textContent += button.textContent;
            }
            a = display.textContent;
            console.log("a:", a);
        }
    })
})

const operators = document.querySelectorAll(".operator");
operator = "";

operators.forEach((button) => {
    button.addEventListener("click", function() {
        if (a === "" && result != null) {
            b = result;
        }
        else if (b === "") {
            b = a;
        }
        // else if (a !== "" && result !== null) {
        //     b = a;
        // }
        else if ( a !== "" && b !== "") {
            b = operate(Number(a), Number(b));
            display.textContent = b;
        }
        shouldResetDisplay = true;
        operator = button.textContent;
        a = "";
        console.log("b:", b, "operator:", operator);
    })
})

const equals = document.querySelector(".equals");

equals.addEventListener("click", function() {
    if ( a !== "" && b !== "") {
        result = operate(Number(a), Number(b));
        result = Number(result.toFixed(10));
        display.textContent = result;
        a = ""
        b = result;
        operator = ""
        shouldResetDisplay = true;
    }
})

const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
    display.textContent = "";
    a = "";
    b = "";
    operator = "";

})