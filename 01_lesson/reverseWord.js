// TASK 6

const inputWord = prompt('Введите любое слово:', '').trim();
let reverseWord = '';

console.log(reverseWord)

for (let i = 1; i <= inputWord.length; i++)
{
    reverseWord += inputWord[inputWord.length - i];
}

console.log(reverseWord)
