/* 
Given array of integers, remove each kth element from it.
Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
*/

function extractEachKth(inputArray, k) {
  return inputArray.splice(inputArray.findIndex(k), 1);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

const res = extractEachKth(inputArray, k);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `	background: #61dafb; 
   	font-size: 36px; 
   	text-align: center; 
   	border: 1px solid black
`;
