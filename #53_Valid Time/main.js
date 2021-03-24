"use strict";

/* 
Check if the given string is a correct time representation of the 24-hour clock.
Example
For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
*/

function validTime(time) {}

const time = "13:58"; // -> true
// const time = "25:51"; // -> false

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 3px solid #000;
`;

const el = document.createElement("div");
el.innerText = validTime(time);

add.append(el);
