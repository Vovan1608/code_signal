/* 
Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.

For a = [2, 3], the output should be absoluteValuesSumMinimization(a) = 2.

for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.
*/

function absoluteValuesSumMinimization(a) {
  // return a.reduce((acc, el) => {
  //   let accEl = a.reduce((cur, next) => {
  //     cur += Math.abs(acc - next);
  //     return cur;
  //   }, 0);

  //   let nextEl = a.reduce((cur, next) => {
  //     cur += Math.abs(el - next);
  //     return cur;
  //   }, 0);

  //   return accEl <= nextEl ? acc : el;
  // });

  return a[Math.ceil(a.length / 2) - 1];
}

// const a = [2, 4, 7];
// const a = [1, 1, 3, 4];
const a = [1, 2, 3, 4, 5];
const res = absoluteValuesSumMinimization(a);

const add = document.querySelector(".add");

const el = document.createElement("div");
el.innerText = res;
el.style = "background: #61dafb";

add.appendChild(el);
