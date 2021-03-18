/*
Find the leftmost digit that occurs in a given string.
Example
For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.
*/

function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}

const inputString = "var_1__Int";
const res = firstDigit(inputString);

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
