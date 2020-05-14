// TASK 5

const inputText = prompt('Введите произвольный текст:', '').trim().toLocaleLowerCase();
let countVowels = 0;
let countConsonants = 0;
for (let i = 0; i < inputText.length; i++ ) 
{
    switch(inputText[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            countVowels++;
            break;

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':    
        case 'k':
        case 'l':
        case 'm':
        case 'n': 
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'z':
            countConsonants++;
            break;
    }
};

alert(`Количество гласных: ${countVowels}\nКоличество согласных: ${countConsonants}`)