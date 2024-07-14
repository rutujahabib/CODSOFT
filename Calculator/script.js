document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    display.innerText = '0'; // Set initial value to "0"

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value) {
                appendValue(value);
            } else if (button.id === 'clear') {
                clearDisplay();
            } else if (button.id === 'equals') {
                calculate();
            }
        });
    });

    function clearDisplay() {
        display.innerText = '0';
    }

    function appendValue(value) {
        // Prevent multiple consecutive operators
        if (/[+\-*/]/.test(value) && /[+\-*/]$/.test(display.innerText)) {
            return;
        }

        // Prevent leading operator
        if (display.innerText === '0' && /[+\-*/]/.test(value)) {
            return;
        }

        // Prevent multiple leading zeros
        if (display.innerText === '0' && value === '0') {
            return;
        }

        // Replace initial zero with the new value if not an operator
        if (display.innerText === '0' && !/[+\-*/]/.test(value)) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    function calculate() {
        try {
            // Evaluate the expression if it's valid
            if (display.innerText !== '') {
                display.innerText = eval(display.innerText);
            }
        } catch (e) {
            display.innerText = 'Error';
        }
    }
});
