"use strict";

/* 
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
For cell = "a1", the output should be
chessKnight(cell) = 2.
*/

function chessKnight(cell) {
  const [char, num] = [...cell];
  let count = 0;
  if (char.charCodeAt() - 2 >= "a".charCodeAt()) {
    count++;
  }
  if (char.charCodeAt() - 1 >= "a".charCodeAt()) {
    count++;
  }
  if (char.charCodeAt() + 2 <= "h".charCodeAt()) {
    count++;
  }
  if (char.charCodeAt() - 2 <= "h".charCodeAt()) {
    count++;
  }
  if (num - 2 > 0) {
    count++;
  }
  if (num - 1 > 0) {
    count++;
  }
  if (num + 2 <= 8) {
    count++;
  }
  if (num + 1 <= 8) {
    count++;
  }
  return count;
}

const cell = "a1"; // -> 2
// const cell = "c2"; // -> 6
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
