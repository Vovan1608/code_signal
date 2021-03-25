"use strict";

/* 
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.
Return an array of names that will be given to the files.
Example
For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
*/

function fileNaming(names) {
  const used = {};
  return names.map((name) => {
    let newName = name;
    while (used[newName]) {
      newName = `${name}(${used[name]++})`;
    }
    used[newName] = 1;
    return newName;
  });
}

const names = ["doc", "doc", "image", "doc(1)", "doc"];

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
	border-radius: 5px;
`;

const el = document.createElement("div");
el.innerText = fileNaming(names);

add.append(el);
