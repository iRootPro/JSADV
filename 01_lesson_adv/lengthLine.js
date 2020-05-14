// TASK 3: Расставить символы конца строки так, чтобы строка была не длиннее 80 символов

const maxLength = 80;
const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let resultText = '';
let newLine = '';
const words = testText.split(' ');
for (let i = 0; i < words.length; i++)
{
    if (newLine.length < maxLength) {
        newLine += ' ' + words[i]
    } else {
        resultText += newLine + '\n';
        newLine = words[i]
    }
}
console.log(resultText);