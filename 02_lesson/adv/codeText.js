// 3. Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем, для каждого слова подсчитывает количество вхождений и присваивает уникальный код.
// Словом считать последовательность символов между пробелами.
// Далее перекодирует текст, заменяя слова из словаря на код слова
// Уникальный код - случайное число (желательно - в 16ричной или 36ричной системе)
// Проверить что код действительно уникален для этого словаря
// Возвращает объект
// {
//   dictionary: [
//     {
//       word: слово
//       count: количество использований в тексте
//       code: уникальный код.
//     }
//   ],
//   encodedText: перекодированный текст
// }

// Пример:
// Исходный текст:
// Lorem ipsum ipsum dolor.
// Результат:
// {
//   dictionary: [
//     { word: 'Lorem', count: 1, code: '58' },
//     { word: 'ipsum', count: 2, code: 'rd' },
//     { word: 'dolor.', count: 1, code: 'g7' }
//   ],
//   encodedText: '58,rd,rd,g7'
// }

const inputText = 'Lorem ipsum ipsum dolor'

const uniqCode = () => {
    const random = Math.floor(Math.random() * 1000)
    return random.toString(36)
}

const encodeText = inputText => {
    let count = 0
    let code = ''
    const dictionary = []
    let encodedText = ''
    const words = inputText.split(' ')
    for (let word of words) {
        if (dictionary.length === 0) {
            code = uniqCode()
            dictionary.push({
                word,
                count: 1,
                code
            })
            encodedText += code + ','
            continue
        }

        for (let wordFromObj of dictionary) {
            if (word === wordFromObj.word)

            {
                wordFromObj.count++
                continue
            }
        }

        do {
            code = uniqCode()
            for (let codeFromObj of dictionary) {
                codeFromObj.code === uniqCode() ? isUniqCode = false : isUniqCode = true
            }
        }
        while (false)

        dictionary.push({
            word,
            count: 1,
            code: uniqCode()
        })
        encodedText += code + ','
    }
    return {
        dictionary,
        encodedText
    }
}

count = encodeText(inputText)
console.log(count)