// TASK 2

/**
 * Функция получает текст и возвращает объект со свойствами word: слово, sum: число, 
 * где число это сумма кодов всех символов в слове
 * 
 * @param {string} text 
 * @returns {Array} Возвращает массив объектов вида [ { word: 'слово', sum: сумма }, { word: 'слово', sum: сумма }]
 */

function wordStat(text) {
    if (typeof text !== 'string') return 'Invalid data'
    const words = text.trim().split(' ')
    const stat = []
    for (let word of words) {
        letters = word.split('')
        let sum = letters.reduce((acc, letter) => acc += letter.charCodeAt(letter),0)
        stat.push({word, sum})
    }
    return stat
}

