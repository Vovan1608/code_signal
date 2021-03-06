/* 
Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

For

image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.
*/

function boxBlur(image) {
  const res = [];
  let upSum = 0,
    centerSum = 0,
    downSum = 0;

  for (let i = 0; i < image.length; i++) {
    const lst = [];

    for (let j = 0; j < image[i].length; j++) {
      if (
        i != 0 &&
        i != image.length - 1 &&
        j != 0 &&
        j != image[i].length - 1
      ) {
        upSum = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
        centerSum = image[i][j] + image[i][j + 1] + image[i][j - 1];
        downSum = image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
        lst.push(Math.floor((upSum + centerSum + downSum) / 9));
      }
    }
    res.push(lst);
  }
  return res.filter((el) => el.length != 0);
}

const image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];
const res = boxBlur(image);
console.log(res);

const add = document.querySelector(".add");
const ins = document.createElement("div");
ins.innerText = res;
add.appendChild(ins);
