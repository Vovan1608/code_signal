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
  const elSize = picture[0].length + 2;
  let copyPicture = [...picture].map((el) => {
    return [].concat("*", el, "*").join("");
  });

  const modifyPicture = [
    repeatAsterisks(elSize),
    ...copyPicture,
    repeatAsterisks(elSize),
  ];

  return modifyPicture;
}

function repeatAsterisks(num) {
  return "*".repeat(num);
}

const picture = ["abc", "ded"];
const res = addBorder(picture);
console.log(res);
