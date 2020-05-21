// Unit test TASK 2
describe("wordStat", function () {

    it("Корректные входные данные: текст", function () {
        const text = 'Lorem ipsum dolor sit amet.'
        assert.deepEqual(wordStat(text), [{
                word: 'Lorem',
                sum: 511
            },
            {
                word: 'ipsum',
                sum: 558
            },
            {
                word: 'dolor',
                sum: 544
            },
            {
                word: 'sit',
                sum: 336
            },
            {
                word: 'amet.',
                sum: 469
            }
        ]);
    });
    it("Корректные входные данные: текст", function () {
        const text = 'С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения систем массового участия.'
        assert.deepEqual(wordStat(text), [{
                word: 'С',
                sum: 1057
            },
            {
                word: 'другой',
                sum: 6497
            },
            {
                word: 'стороны',
                sum: 7623
            },
            {
                word: 'постоянный',
                sum: 10891
            },
            {
                word: 'количественный',
                sum: 15183
            },
            {
                word: 'рост',
                sum: 4353
            },
            {
                word: 'и',
                sum: 1080
            },
            {
                word: 'сфера',
                sum: 5418
            },
            {
                word: 'нашей',
                sum: 5411
            },
            {
                word: 'активности',
                sum: 10828
            },
            {
                word: 'требуют',
                sum: 7611
            },
            {
                word: 'определения',
                sum: 11919
            },
            {
                word: 'и',
                sum: 1080
            },
            {
                word: 'уточнения',
                sum: 9792
            },
            {
                word: 'систем',
                sum: 6509
            },
            {
                word: 'массового',
                sum: 9741
            },
            {
                word: 'участия.',
                sum: 7666
            }
        ]);
    });

    it("Корректные данные: пустая строка", function () {
        const text = ''
        assert.deepEqual(wordStat(text), [{
            word: '',
            sum: 0
        }]);
    });

    it("Корректные данные: пробелы", function () {
        const text = '         '
        assert.deepEqual(wordStat(text), [{
            word: '',
            sum: 0
        }]);
    });

    it("Корректные данные: текст с спец символами", function () {
        const text = 'hello % world * \\'
        assert.deepEqual(wordStat(text), [{
                word: 'hello',
                sum: 532
            },
            {
                word: '%',
                sum: 37
            },
            {
                word: 'world',
                sum: 552
            },
            {
                word: '*',
                sum: 42
            },
            {
                word: '\\',
                sum: 92
            }
        ]);
    });

    it("Корректные входные данные: одно слово", function () {
        const text = 'hello'
        assert.deepEqual(wordStat(text), [{
            word: 'hello',
            sum: 532
        }]);
    });

    it("Некорректные входные данные: число", function () {
        const text = 5
        assert.deepEqual(wordStat(text), 'Invalid data')
    });

    it("Некорректные входные данные: массив", function () {
        const text = [10, 2]
        assert.deepEqual(wordStat(text), 'Invalid data')
    });

    it("Некорректные входные данные: объект", function () {
        const text = { word: 'hello', count: 15 }
        assert.deepEqual(wordStat(text), 'Invalid data')
    });

});