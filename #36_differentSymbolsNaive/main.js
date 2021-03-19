/* 
Given a string, find the number of different characters in it.
Example
For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.
There are 3 different characters a, b and c.
*/

function differentSymbolsNaive(s) {}

const s = "cabca";
const res = differentSymbolsNaive(s);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black
`;

add.append(el);
