/* 
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
Given an integer, find its digit degree.
Example
For n = 5, the output should be
digitDegree(n) = 0;
For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
*/

function digitDegree(n) {
  let digitDegree = 0;

  while (n >= 10) {
    n = [...String(n)].reduce((sum, next) => Number(sum) + Number(next));
    digitDegree++;
  }

  return digitDegree;
}

const n = 9;
const res = digitDegree(n);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background-color: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black;
`;

add.append(el);
