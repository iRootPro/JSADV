//TASK 5

// ВВодные данные
const searchWord = 'Java';
const replaceWord = 'JS';
const targetWord = 'overloading';

let inputText = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++';

const sentences = inputText.split('.');

for (let i = 0; i < sentences.length; i++)
{
    if (sentences[i].search(targetWord) != -1)
    {
        sentences[i] = sentences[i].replace(searchWord, replaceWord);
    }
}

const resultText = sentences.join('.');
console.log(`Введенное предложение:\n${inputText}`)
console.log(`После замены:\n${resultText}`);