// TASK 3
// Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
// Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006

const americanDate = prompt('Введите даду в американском формате ММ/ЧЧ/ГГГГ').trim();
const date = americanDate.split('/');
let russianDate;
console.log(date);

const month = parseInt(date[0]);
const day = parseInt(date[1]);
const year = parseInt(date[2]);

if (!isNaN(month) && month <= 12 && month > 0 &&
    !isNaN(day) && day <= 31 && day > 0 &&
    !isNaN(year) && year.length === 4 && year > 0
    ) {
    russianDate = `${day}.${month}.${year}`;
    console.log(russianDate);
} else {
    console.log('Вы ввели не верный формат даты. Введите дату ввиде ММ/ЧЧ/ГГГГ, например 5/30/2006')
}