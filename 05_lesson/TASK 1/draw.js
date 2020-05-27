let colorBrush = "red";
const table = document.getElementById("holst");
const btn = document.getElementById("btnColor");
const divPalette = document.getElementById("palette");
const tableColor = document.getElementById("tableColor");
btn.addEventListener("click", showPalette);
table.addEventListener("click", drawColorCell);
tableColor.addEventListener("click", changeColor);

// Создает поле для рисования
createSquare(10);

//Функция изменяет цвет кисти
function changeColor() {
  if (event.target.tagName === "TD") colorBrush = event.target.dataset.color;
}

// Функция меняет цвет ячейки
function drawColorCell() {
  if (event.target.tagName === "TD")
    event.target.style.backgroundColor = colorBrush;
}

//Функция показывает палитру цветов для выбора
function showPalette() {
  if (divPalette.style.visibility === "visible")
    divPalette.style.visibility = "hidden";
  else divPalette.style.visibility = "visible";
}

/**
 * Функция генерирует поле для рисования. Принимает один параметр - количество ячеек.
 * Например, 5 - получится квадрат 5х5
 *
 * @param {number} side
 */

function createSquare(side = 5) {
  for (let i = 0; i < side; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < side; j++) {
      const td = document.createElement("td");
      tr.append(td);
    }
    table.append(tr);
  }
}
