/* 
Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.

Example

For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
#	Day	Night
1	100	90
2	190	180
3	280	270
4	370	360
5	460	450
6	550	540
7	640	630
8	730	720
9	820	810
10	910	900
The plant first reaches a height of 910 on day 10.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 1;

  if (upSpeed > desiredHeight) {
    return days;
  }

  const difference = upSpeed - downSpeed;

  for (let i = upSpeed; i <= desiredHeight || i > desiredHeight; ) {
    i += difference;
    days++;
    if (i === desiredHeight) {
      break;
    }
    if (i > desiredHeight) {
      break;
    }
  }

  return days;
}

const upSpeed = 100;
const downSpeed = 10;
const desiredHeight = 910;
const res = growingPlant(upSpeed, downSpeed, desiredHeight);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black
`;

add.append(el);
