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
  var result = 0,
    num_digits = [];
  while (num) {
    num_digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (var index_num = 0; index_num < num_digits.length; index_num++) {
    var n = 0;
    for (var i = num_digits.length - 1; i >= 0; i--) {
      if (i !== index_num) {
        n = n * 10 + num_digits[i];
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
