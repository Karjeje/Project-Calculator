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

digits.forEach((button) => {
    button.addEventListener("click", function() {
        if (display.textContent.length < 12) {
            display.textContent += button.textContent;
            a = display.textContent;
            console.log("a:", a);
        }
    })
})

const operators = document.querySelectorAll(".operator");
operator = "";

operators.forEach((button) => {
    button.addEventListener("click", function() {
        operator = button.textContent;
        if (b !==result) {
        b = a;
        }
        a = "";
        display.textContent = "";
        console.log("b:", b);
    })
})

const equals = document.querySelector(".equals");
result = "neki"

equals.addEventListener("click", function() {
    x = Number(a);
    y = Number(b);
    result = Number(operate(x,y));
    console.log(result);
    display.textContent = result;
    b = result;
})

const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
    display.textContent = "";
    a, b = "";
})