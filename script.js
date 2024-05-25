// const display = document.getElementById('display');
// const operadores = ['*', '/', '+', '-'];
// console.log(operadores.includes('*'));

// function appendCharacter(char) {
//     if(display.innerText == '0' && char != '.') {
//         display.innerText = char
//     } else {
//         if(!(char == '.' && display.innerText[display.innerText.length - 1] == '.')) {
//            display.innerText += char 
//         }
//         }
// }

// function clearDisplay() {
//     display.innerText = '0';
// }

// function calculateResult() {
//     display.innerText = eval(display.innerText);
// }

const display = document.getElementById('display')

function appendCharacter(char) {
    const operatorsAndPoint = ['+','-', '*', '/', '.']
    const lastChar = display.innerText.slice(-1)

    if (display.innerText == '0') {
        if (!operatorsAndPoint.includes(char)) {
            display.innerText = char;
        }
    } else {
        if (!(operatorsAndPoint.includes(char) && operatorsAndPoint.includes(lastChar))) {
            display.innerText += char;
        }
    }
}
function clearDisplay(){
    display.innerText = '0'
}

function calculateResult(){
    try{
        display.innerText = eval(display.innerHTML)
    } catch{
        display.innerText = Error
    }
}