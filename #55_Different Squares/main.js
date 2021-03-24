"use strict";

/* 
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

 -1 2
	2 2
 -2 1
	2 2
 -2 2
	2 2
 -2 2
	1 2
 -2 2
	2 3
 -2 3
	2 1
*/

function differentSquares(matrix) {}

const matrix = [
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1],
];

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	border: 2px solid #000;
	border-radius: 5px;
	text-align: center;
`;

const el = document.createElement("div");
el.innerText = differentSquares(matrix);

add.append(el);
