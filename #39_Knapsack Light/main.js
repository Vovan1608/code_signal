/* 
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

Example
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 16.
You're strong enough to take both of the items with you.

For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 7.
You can't take both items, but you can take any of them.
*/

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW < weight1 && maxW < weight2) {
    return 0;
  }

  if (maxW >= weight1 + weight2) {
    return value1 + value2;
  }

  if (maxW >= weight1 && maxW >= weight2) {
    return value1 > value2 ? value1 : value2;
  }
  return maxW >= weight1 ? value1 : value2;

  // return Math.max(
  // 	maxW >= weight1 && value1,
  // 	maxW >= weight2 && value2,
  // 	maxW >= weight1 + weight2 && value1 + value2
  // );
}

const res1 = knapsackLight(10, 5, 6, 4, 8); // 10
const res2 = knapsackLight(10, 5, 6, 4, 9); // 16
const res3 = knapsackLight(5, 3, 7, 4, 6); // 7
const res = [res1, res2, res3];

const add = document.querySelector("#add");
add.style = `
	background: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black
`;

for (let i = 0; i < res.length; i++) {
  const el = document.createElement("div");
  el.innerText = res[i];
  add.append(el);
}
