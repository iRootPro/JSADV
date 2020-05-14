// TASK 2

// Вводные данные для от пользователя.
const timestamp = Math.round(Date.now() / 1000);
const claster = 3;
const type = 5;
const userId = 19999;

const eTimestamp = timestamp.toString(16);
let eClaster = claster.toString(16);
const eType = type.toString(16);
let eUserId = userId.toString(16);


if (eClaster.length < 2)
{
    eClaster = '0' + eClaster
} else if (eClaster < 0 || eClaster.length > 2) {
    console.log('Введен не верный КЛАСТЕР');
    return;
}

if (eType.length != 1)
{
    console.log('Введен не верны ТИП');
    return;
}

if (eUserId.length <= 6 && eUserId.length > 0)
{
    eUserId = '0'.repeat(6 - eUserId.length) + eUserId
}
else {
    console.log('Введен не верный USER ID');
    return;
}

console.log(`TimeStamp: ${eTimestamp}`)
console.log(`UserID: ${eUserId}`);
console.log(`CLASTER: ${eClaster}`)
console.log(`Type: ${type}`)


const encodeResult = `${eTimestamp}${eClaster}${eType}${eUserId}`;
console.log(encodeResult.toLocaleUpperCase())
