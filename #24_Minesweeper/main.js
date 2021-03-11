/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

For

matrix = [
	[true, false, false],
	[false, true, false],
	[false, false, false]
]
the output should be

minesweeper(matrix) = [
	[1, 2, 1],
	[2, 1, 1],
	[1, 1, 1]
]
*/

function minesweeper(matrix) {
  return matrix;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
const res = minesweeper(matrix);
console.log(res);

res.forEach((el) => document.writeln(`${el} </br>`));
