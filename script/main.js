let inputNumber = document.querySelector("#inputNumber");
let display = document.querySelector("#display");

let Numbers = ""
function checkNumbers() {
        if (inputNumber.value%2 !=0) {
            display.innerHTML = "you entered an ODD number"
        }else if (inputNumber.value%2 === 0 && inputNumber.value%2 >0 ){
            display.innerHTML = "you entered an EVEN number"
        } else {
            display.innerHTML = "please type a number"

        }
    }