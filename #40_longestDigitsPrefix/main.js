/* 
Given a string, output its longest prefix which contains only digits.
Example
For inputString = "123aa1", the output should be
longestDigitsPrefix(inputString) = "123".
*/

function longestDigitsPrefix(inputString) {}

const inputString = "123aa1"; // -> "123"
// const inputString = "0123456789"; // -> "0123456789"
// const inputString =  "12abc34"; // -> "12"
// const inputString = "  3) always check for whitespaces"; // -> ""
// const inputString = "the output is 42"; // -> ""
// const inputString = "aaaaaaa"; // -> ""
const res = longestDigitsPrefix(inputString);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black;
`;

add.append(el);
