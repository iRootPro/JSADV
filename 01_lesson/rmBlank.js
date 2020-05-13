const inputText = prompt('Введите любой текст:').trim();
let resultText = '';
let countBlank = 0;
for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === ' ' && countBlank === 0) {
        resultText += inputText[i];
        countBlank++;
        continue;
    }

    if (inputText[i] === ' ' && countBlank > 0) {
        continue;
    }

    if (inputText[i] != ' ') {
        countBlank = 0;
        resultText += inputText[i];
    }
}
console.log(resultText);