"use strict";

/* 
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.
Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.
Example
For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.
*/

function sumUpNumbers(inputString) {
  return inputString
    .match(/\d+/g)
    .reduce((cur, next) => Number(cur) + Number(next));
}

const inputString = "2 apples, 12 oranges"; // -> 14

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
`;

const el = document.createElement("div");
el.innerText = sumUpNumbers(inputString);

add.append(el);
