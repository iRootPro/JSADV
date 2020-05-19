// TASK 1
// Написать функцию, которая принимает массив чисел и возвращает сумму и 
// количество отрицательных элементов массива.

const inputArray = (...items) => {
    let total = 0
    let sum = 0
    arr = items.filter(item => item < 0)
    total = arr.reduce((sum, element) => sum += element)
    return {
        count: arr.length,
        sum: total
    }
}

console.log(inputArray(1, 2, -3, 4, -5))