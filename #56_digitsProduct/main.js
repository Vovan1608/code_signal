"use strict";

/* 
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
Example
For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
*/

function digitsProduct(product) {}

const product = 12;

const add = document.querySelector("#add");
add.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 2px solid #000;
	border-radius: 5px;
`;

const el = document.createElement("div");
el.innerText = digitsProduct(product);

add.append(el);
