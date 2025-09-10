function add(a, b) {
        return a + b;
      }

      function subtract(a, b) {
        return a - b;
      }

      function multiply(a, b) {
        return a * b;
      }

      function divide(a, b) {
        return a / b;
      }

      let a
      let b
      let operator

      function operate(a, b, operator) {
        if (operator === "plus") {
            add(a, b);
        }
        else if (operator === "minus") {
            subtract(a,b);
        }
        else if (operator === "multiplication") {
            multiply(a, b)
        }
        else if (operator === "division") {
            divide(a, b)
        }
      }