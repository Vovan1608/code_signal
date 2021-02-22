/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
  const arrSortOfHeights = a.filter((el) => el > 0).sort((a, b) => a - b);
  return a.map((el) => (el < 0 ? el : arrSortOfHeights.shift()));
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
const res = sortByHeight(a);
console.log(res);
