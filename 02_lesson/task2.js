// TASK 2
// Написать функцию, которая принимает текст, и возвращает массив объектов со структурой
// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами

const arr = []
let sum = 0
const inputText = (text) => {
    const words = text.split(' ')
    for (let element of words) {
        for (let letter of element) {
            sum += letter.charCodeAt(letter)
        }
        arr.push({word: element, sum})
        sum = 0
    }
    return arr
}

console.log(inputText('Lorem ipsum dolor sit amet.'))