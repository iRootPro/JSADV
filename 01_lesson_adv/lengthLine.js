// TASK 3: Расставить символы конца строки так, чтобы строка была не длиннее 80 символов

const maxLength = 80;
const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let resultText = '';
let newLine = '';
const words = testText.split(' ');
const end = words.length - 1;
for (let i = 0; i < words.length; i++) {
    if (newLine.length + words[i].length < maxLength) {
        newLine += words[i] + ' '
        console.log(i + ' ' + (words.length - 1))
    } else {
        resultText += newLine + '\n';
        newLine = words[i]
    }
    if (i === end) {
        console.log('конец')
        resultText += newLine
    }
}
console.log(resultText);