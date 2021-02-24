/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
Example
For
picture = ["abc",
        "ded"]
the output should be
addBorder(picture) = ["*****",
                    "*abc*",
                    "*ded*",
                    "*****"]
*/

function addBorder(picture) {
  const widthElem = "*".repeat(picture[0].length + 2);
  return [widthElem, ...picture.map((el) => `*${el}*`), widthElem];
}

const picture = ["abc", "ded"];
const res = addBorder(picture);
console.log(res);
