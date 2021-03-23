"use strict";

/* 
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
For cell = "a1", the output should be
chessKnight(cell) = 2.
*/

function chessKnight(cell) {
  const [char, numStr] = [...cell];
  const charCode = char.charCodeAt();
  const CODE_OF_CHAR_A = "a".charCodeAt();
  const CODE_OF_CHAR_H = "h".charCodeAt();
  const num = Number(numStr);
  let count = 0;

  if (charCode + 1 <= CODE_OF_CHAR_H && num + 2 <= 8) {
    count++;
  }

  if (charCode + 1 <= CODE_OF_CHAR_H && num - 2 >= 1) {
    count++;
  }

  if (charCode - 1 >= CODE_OF_CHAR_A && num + 2 <= 8) {
    count++;
  }

  if (charCode - 1 >= CODE_OF_CHAR_A && num - 2 >= 1) {
    count++;
  }

  if (charCode + 2 <= CODE_OF_CHAR_H && num + 1 <= 8) {
    count++;
  }

  if (charCode + 2 <= CODE_OF_CHAR_H && num - 1 >= 1) {
    count++;
  }

  if (charCode - 2 >= CODE_OF_CHAR_A && num + 1 <= 8) {
    count++;
  }

  if (charCode - 2 >= CODE_OF_CHAR_A && num - 1 >= 1) {
    count++;
  }

  return count;
}

// const cell = "a1"; // -> 2
const cell = "c2"; // -> 6
// const cell = "d5"; // -> 8
const res = chessKnight(cell);

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid red;
`;

const el = document.createElement("div");
el.innerText = res;

add.append(el);
