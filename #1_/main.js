// function mutateTheArray(n, a) {
//   let newArr = [];
//   newArr.length = n;

//   for (let i = 0; i < n; i++) {
//     a[i - 1] = a[i - 1] || 0;
//     a[i + 1] = a[i + 1] || 0;

//     newArr[i] = a[i - 1] + a[i] + a[i + 1];
//   }

//   return newArr;
//   // return a.forEach((el, i) => {
//   //   a[i - 1] = a[i - 1] || 0;
//   //   a[i + 1] = a[i + 1] || 0;

//   //   el = a[i - 1] + a[i] + a[i + 1];
//   // });
// }

// const res = mutateTheArray(5, [4, 0, 1, -2, 3]);
// console.log(res); // [ 4, 5, -1, 2, 1 ]

function binaryPatternMatching(pattern, s) {
  let match = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const temp = s
    .split("")
    .map((el) => {
      return vowels.includes(el) ? 0 : 1;
    })
    .join("");

  for (let i = 0; i < temp.length; i++) {
    let subStr = [temp[i], temp[i + 1], temp[i + 2]].join("");
    if (subStr === pattern) {
      match++;
    }
  }
  return match;
}

const res = binaryPatternMatching("010", "amazing");
console.log(res);
