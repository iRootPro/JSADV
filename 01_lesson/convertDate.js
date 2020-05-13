// TASK 3
// Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
// Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006

const americanDate = prompt('Введите даду в американском формате ММ/ЧЧ/ГГГГ').trim();
const date = americanDate.split('/');
let russianDate;
console.log(date);

month = parseInt(date[0]);
day = parseInt(date[1]);
year = parseInt(date[2]);

if (!isNaN(month) && month <= 12 && !isNaN(day) && day <= 31 && !isNaN(year)) {
    russianDate = `${day}.${month}.${year}`;
} else {
    console.log('Вы ввели не верный формат даты. Введите дату ввиде ММ/ЧЧ/ГГГГ, например 5/30/2006')
}