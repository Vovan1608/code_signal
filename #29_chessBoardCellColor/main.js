/*
Given two cells on the standard chess board, determine whether they have the same color or not.
Example
For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
 */

function chessBoardCellColor(cell1, cell2) {
  return getCell(cell1) === getCell(cell2);
}

function getCell(cell) {
  const blackFiguresEven = ["A", "C", "E", "G"];

  const blackFiguresOdd = ["B", "D", "F", "H"];

  const [letter, number] = [...cell];

  return (blackFiguresEven.includes(letter) && number % 2 !== 0) ||
    (blackFiguresOdd.includes(letter) && number % 2 === 0)
    ? "black"
    : "white";
}

const cell1 = "A1";
const cell2 = "C3";
const res = chessBoardCellColor(cell1, cell2);

const add = document.querySelector(".add");
const elem = document.createElement("div");
elem.innerText = res;
elem.style = "background: #61dafb";

add.appendChild(elem);
