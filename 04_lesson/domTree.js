// TASK 1
// Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами

const htmlCode = document.children

console.log(htmlCode[0].tagName)

// Способ перебора 1.
const layer = htmlCode[0].children
let count = 0

function getChild(layer) {
    Array.from(layer).forEach(child => {
        if (child.children) {
            console.log(`${'->'.padStart(count*5, '-')} ${child.tagName}`)
            count++
            getChild(child.children)
        }
        count--
    })
}
getChild(layer)


// Способ перебора 2
function getChild2(layer) {
    for (let child of layer) {
        if (child.children) {
            console.log(`${'->'.padStart(count*5, '-')} ${child.tagName}`)
            count++
            getChild(child.children)
        }
        count--
    }
}

getChild2(layer)

