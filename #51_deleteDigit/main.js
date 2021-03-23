"use strict";

/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example
For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
*/

function deleteDigit(num) {
  let result = 0;
  const numDigits = [];

  while (num) {
    numDigits.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let index = 0; index < numDigits.length; index++) {
    let n = 0;
    for (let i = numDigits.length - 1; i >= 0; i--) {
      if (i !== index) {
        n = n * 10 + numDigits[i];
      }
    }
    result = Math.max(n, result);
  }

  return result;
}

// const n = 152; // -> 52
// const n = 1001; // -> 101
const n = 222250; // -> 22250
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
