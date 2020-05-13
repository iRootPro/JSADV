// TASK 4

let inputNum;
let summary = 0;
let count = 0;


do {
    inputNum = parseInt(prompt('Введите число. Если хотите закончить - просто нажмите ОК.', '').trim());
    if (isNaN(inputNum)) continue;
    summary += inputNum;
    count++;
    console.log(`Текущая сумма всех введенных чисел: ${summary}.`)
    console.log(`Текущее среднее арифмитическое: ${summary / count}.`);

} while (!inputNum == '') 

const avg = summary / count;
alert(`Сумма всех чисел: ${summary}.\nСреднее арифмитическое: ${avg}.`);
