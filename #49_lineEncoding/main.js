"use strict";

/* 
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".
*/

function lineEncoding(s) {
  const arr = [...s];
  let count = 1;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        newArr.push(count, arr[i]);
        count = 1;
        continue;
      }
      newArr.push(arr[i]);
    }
  }

  return newArr.join("");
}

// const s = "aabbbc"; // -> "2a3bc"
const s = "abbcabb"; // -> "a2bca2b"
const res = lineEncoding(s);

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid red;
`;

const el = document.createElement("div");
el.innerText = res;

add.append(el);
