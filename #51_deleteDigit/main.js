"use strict";

/* 
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example
For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
*/

function deleteDigit(n) {}

const n = 152;
const res = deleteDigit(n);

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
