"use strict";

/* 
Determine if the given character is a digit or not.
Example
For symbol = '0', the output should be
isDigit(symbol) = true;
For symbol = '-', the output should be
isDigit(symbol) = false.
*/

function isDigit(symbol) {
  return !isNaN(symbol);
}

// const symbol = "0";
const symbol = "-";
const res = isDigit(symbol);

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black;
`;

const el = document.createElement("div");
el.innerText = res;

add.append(el);
