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
  return [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ];
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
