"use strict";

/* 
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
Example
For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
*/

function digitsProduct(product) {
  if (product === 0) {
    return 10;
  }

  if (product === 1) {
    return 1;
  }

  const digits = [];

  for (let i = 9; i > 1; i--) {
    while (product % i === 0) {
      digits.unshift(i);
      product /= i;
    }
  }

  return product > 1 ? -1 : parseInt(digits.join(""));
}

// const product = 12; // -> 26 -> 12 = 2 * 6
const product = 450; // -> 2559 -> 450 = 2 * 5 * 5 * 9
// const product = 19; // -> -1
// const product = 0; // -> 10 -> 0 = 1 * 0
// const product = 1; // -> 1 -> 1 = 1 * 1
// const product = 243; // -> 399 -> 243 = 3 * 9 * 9

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
