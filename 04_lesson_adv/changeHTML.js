//TASK 1

/**
 * Функция изменяет содержимое тэгов с атрибутами data-field на содержание из переданного объекта. 
 * Если значение data-field не содержится в объекте, то содержание оставляем неизменным.
 * 
 * @param {string} html 
 * @param {object} repObj 
 * @returns {html} 
 */

function changeContent(html, repObj) {
    const childs = html.children
    for (let item of childs) {
        if (!item.dataset.field) continue
        if (item.dataset.field in repObj) item.textContent = repObj[item.dataset.field]
        else throw new Error('Не валидные данные')
    }
    return html
}

// const repObj = { title: "Hello world", description: "The first program",}
// const html = document.getElementById('item1')
// changeContent(html, repObj)