// TASK 2
// Нормализация введенного времени в 24-часовой формат
// Привести заданное время в формат hh:mm где hh - час с ведущим нулем (01, 07, 12). Примеры входных данных и результата:
// “12: 07 am” - “00:07”
// “03.2 pm” - “15:02”
// “1-17 am” - “01:17”
// “34:67” - выдать ошибку


//const inputTime = prompt('Введите время', '').trim();
const inputTime = '  10,  7  am '.trim().toLocaleLowerCase();
const time = inputTime.match(/([0-9]+)/g);
const timePeriod = inputTime.match(/[amp]+/g);

let hour = parseInt(time[0]);
let min = parseInt(time[1]);

if (timePeriod === null) {
    if (hour >= 0 &&
        hour <= 24 &&
        min >= 0 &&
        min <= 59) {
        if (String(hour).length === 1) hour = '0' + hour
        if (String(min).length === 1) min = '0' + min
        console.log(`Время: ${hour}:${min}`)
    } else {
        console.log('Время указано не верно')
    }
} else {
    if (timePeriod[0] === 'pm' &&
        hour > 12 &&
        hour < 24 &&
        min >= 0 &&
        min <= 59) {
        if (String(min).length === 1) min = '0' + min
        console.log(`Время: ${hour}:${min}`)
    } else if (timePeriod[0] === 'am' &&
        hour <= 12 &&
        hour >= 0 &&
        min >= 0 &&
        min <= 59) {
        if (String(min).length === 1) min = '0' + min
        if (String(hour).length === 1) hour = '0' + hour
        console.log(`Время: ${hour}:${min}`)
    } else console.log('Не верно указано время')
}