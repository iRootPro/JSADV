// TASK 2

// Вводные данные для от пользователя.
const timestamp = Math.round(Date.now() / 1000);
const claster = 25;
const type = 5;
const userId = 16389367;

const eTimestamp = timestamp.toString(16);
const eClaster = claster.toString(16);
const eType = type.toString(16)
const eUserId = userId.toString(16);

const encodeResult = `${eTimestamp}${eClaster}${eType}${eUserId}`;
console.log(encodeResult.toLocaleUpperCase())



