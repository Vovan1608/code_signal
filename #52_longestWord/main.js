"use strict";

/* 
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
Example
For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady"
*/

function longestWord(text) {
  return text
    .match(/[a-zA-Z]+/g)
    .reduce((cur, next) => (cur.length > next.length ? cur : next));
}

const text = "Ready, steady, go!";

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
`;

const el = document.createElement("div");
el.innerText = longestWord(text);

add.append(el);
