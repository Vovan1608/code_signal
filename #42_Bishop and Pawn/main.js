"use strict";

/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
The bishop has no restrictions in distance for each move, but is limited to diagonal movement.

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false
*/

function bishopAndPawn(bishop, pawn) {}

const bishop = "a1";
const pawn = "c3";
const res = bishopAndPawn(bishop, pawn);

const add = document.querySelector("#add");

const elem = document.createElement("div");
elem.innerText = res;
elem.style = `
	background-color: #61dafb;
	text-align: center;
	font-size: 36px;
	border: 1px solid black;
`;

add.append(elem);
