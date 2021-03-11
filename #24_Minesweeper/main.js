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
/**
 * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
 * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
 *
 * Aside from that, it's rather self-explanatory.
 */

const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

minesweeper = (matrix) =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];
const res = minesweeper(matrix);
console.log(res);

res.forEach((el) => document.writeln(`${el} </br>`));
