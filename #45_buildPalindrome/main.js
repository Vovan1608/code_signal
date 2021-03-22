"use strict";

/* 
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
Example
For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".
*/

function buildPalindrome(st) {
  var i = 0;
  var aux;
  while(st != [...st].reverse().join('')){
		aux = [...st];
		aux.splice(st.length-i, 0 ,st[i]);
		st = aux.join('');
		i++;
	}

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
