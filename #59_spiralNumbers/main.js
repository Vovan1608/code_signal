"use strict";

/*
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.
Example
For n = 3, the output should be
spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
*/

function spiralNumbers(n) {
  const matrix = [...Array(n)].map((_) => []);
  let x = 0;
  let y = 0;
  let dir = 2;
  let size = n;
  let c = 0;
  for (let i = 1; i <= n * n; i++) {
    matrix[y][x] = i;

    if (++c === size) {
      dir = (dir + 1) % 4;
      size -= dir % 2;
      c = 0;
    }

    if (dir % 2 == 0) {
      x += dir > 1 ? 1 : -1;
    } else {
      y += dir > 1 ? 1 : -1;
    }
  }

  return matrix;
}

const n = 3;

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
	border-radius: 7px;
`;

const res = spiralNumbers(n);

for (let i = 0; i < res.length; i++) {
  const el = document.createElement("div");
  el.innerText = res[i];
  add.append(el);
}
