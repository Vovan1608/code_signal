"use strict";

/* 
Given array of integers, find the maximal possible sum of some of its k consecutive elements.
Example
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
*/

function arrayMaxConsecutiveSum(inputArray, k) {}

const inputArray = [2, 3, 5, 1, 6];
const k = 2;
const res = arrayMaxConsecutiveSum(inputArray, k);

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
