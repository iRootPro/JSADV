// Вычисление площади правильного треугольника. Сторону задает пользователь.
const side = prompt('Введите длину стороны правильного треугольника');
const square = side ** 2 * Math.sqrt(3) / 4;
console.log(square);