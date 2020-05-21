// Unit test Task 1
describe("sumOfPositive", function () {

    it("Корректные входные данные: как положительные, так и отрицательные", function () {
        assert.deepEqual(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), {
            count: 5,
            sum: 357
        });
    });

    it("Корректные входные данные: с нулевыми значениями", function () {
        assert.deepEqual(sumOfPositive([-100, -50, 60, 0, 96, 40, 0, 18, -90, 75]), {
            count: 5,
            sum: 289
        });
    });

    it("Корректные входные данные: с нулевыми значениями", function () {
        assert.deepEqual(sumOfPositive([-12, 105, 0, 18, -48, 500, -800, -200, 0, 0, 0]), {
            count: 3,
            sum: 623
        });
    });

    it("Некорректные входные данные - пустой массив", function () {
        assert.deepEqual(sumOfPositive([]), 'Invalid data')
    });

    it("Некорректные входные данные - число", function () {
        assert.deepEqual(sumOfPositive(5), 'Invalid data')
    });

    it("Некорректные входные данные - строка", function () {
        assert.deepEqual(sumOfPositive('abc'), 'Invalid data')
    });

    it("Некорректные входные данные - пробелы", function () {
        assert.deepEqual(sumOfPositive([   ]), 'Invalid data')
    });

});