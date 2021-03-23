"use strict";

/* 
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
For cell = "a1", the output should be
chessKnight(cell) = 2.
*/

function chessKnight(cell) {}

const cell = "a1"; // -> 2
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
