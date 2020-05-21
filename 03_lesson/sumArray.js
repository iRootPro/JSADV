// TASK 1

/**
 * Функция получает на вход массив. Возвращает объект, содержащий
 * количество положительных элементов и их сумму.
 * 
 * 
 * @param {Array} numbers 
 * @returns {Object} объект вида { count: number, sum: number}
 */

const sumOfPositive = (numbers) => {
    if(!Array.isArray(numbers)) return 'Invalid data'
    if (numbers.length === 0)
        return 'Invalid data'


    const positiveArr = numbers.filter(number => number > 0)
    const sum = positiveArr.reduce((acc, number) => acc += number)
    return {
        count: positiveArr.length,
        sum
    }

}


console.log(sumOfPositive([-12, 105, 0, 18, -48, 500, -800, -200, 0, 0, 0]))
console.log(sumOfPositive([     ]))