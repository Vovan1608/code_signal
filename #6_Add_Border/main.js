/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
Example
For
picture = [
  "abc",
  "ded"
]
the output should be
addBorder(picture) = [
  "*****",
  "*abc*",
  "*ded*",
  "*****"
  ]
*/

function addBorder(picture) {
  return [
    (widthElem = "*".repeat(picture[0].length + 2)),
    ...picture.map((el) => `*${el}*`),
    widthElem,
  ];
}

const picture = ["abc", "ded"];
const res = addBorder(picture);
console.log(res);
