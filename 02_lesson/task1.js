// TASK 1
// Написать функцию, которая принимает массив чисел и возвращает сумму и 
// количество отрицательных элементов массива.

const inputArray = (...items) => {
    let count = 0
    let sum = 0
    arr = items.filter(item => item < 0)
    for (let a of arr) {
        sum += a
        count++
    }
    return {
        count,
        sum
    }
}

console.log(inputArray(1, 2, -3, 4, -5))