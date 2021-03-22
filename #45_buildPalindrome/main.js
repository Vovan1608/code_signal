"use strict";

/* 
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
Example
For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".
*/

function buildPalindrome(st) {
  return st;
}

const st = "abcdc";
const res = buildPalindrome(st);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background-color: #61dafb;
	text-align: center;
	font-size: 36px;
	border: 1px solid black;
`;

add.append(el);
