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
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((el) => `*${el}*`),
    "*".repeat(width),
  ];
}

const picture = ["abc", "ded"];
const res = addBorder(picture);
console.log(res);
