let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);

        }
        else if (buttonText == 'sin') {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.sin(x);
            screenValue = screen.value;
        }
        else if (buttonText == "cos") {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.cos(x);
            screenValue = screen.value;
        }
        else if (buttonText == "tan") {
            var x = eval(screen.value);
            x = x * Math.PI / 180;
            screen.value = Math.tan(x);
            screenValue = screen.value;
        }
        else if (buttonText == "√") {
            var x = eval(screen.value);
            screen.value = Math.sqrt(x);
            screenValue = screen.value;
        }
        else if (buttonText == "x²") {
            var x = eval(screen.value);
            screen.value = (x * x);
            screenValue = screen.value;
        }
        else if (buttonText == "!") {

            var x = eval(screen.value);
            if (x >= 21) {
                screen.value = 'error';
                screenValue = screen.value;
            }
            else {
                var y = 1;
                for (var i = 1; i <= x; i++) {
                    y = y * i;
                }
                screen.value = y;
                screenValue = screen.value;
            }

        }
        else if (buttonText == "log") {
            var x = eval(screen.value);

            screen.value = Math.log10(x);
            screenValue = screen.value;
        }

        else if (buttonText == "ln") {
            var x = eval(screen.value);
            if (x == 0) {
                screen.value = "-infinity";
                screenValue = screen.value;
            }
            else {
                screen.value = Math.log(x);
                screenValue = screen.value;
            }
        }


        else if (buttonText == "π") {
            var x = eval(screen.value);
            screen.value = 22 / 7;
            screenValue = screen.value;
        }
        else if (buttonText == "exp") {
            var x = eval(screen.value);
            screen.value = Math.exp(x);

            screenValue = screen.value;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}