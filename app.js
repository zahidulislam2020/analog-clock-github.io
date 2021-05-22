const secondHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hr");

secondHand.style.transform = `rotateZ(270deg)`;
minHand.style.transform = `rotateZ(270deg)`;
hourHand.style.transform = `rotateZ(270deg)`;

let getSec = new Date().getSeconds();
let degofSecHand = getSec * 6;

function myFunc() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let newSec = sec < 10 ? "0" + sec : sec;
  let newMin = min < 10 ? "0" + min : min;

  document.title = `Current Time: ${hour}:${newMin}:${newSec}`;

  degofSecHand += 6;

  secondHand.style.transform = `rotateZ(${(degofSecHand % 360) - 90}deg)`;
  minHand.style.transform = `rotateZ(${((min * 6) % 360) + (sec / 10) - 90}deg)`;
  hourHand.style.transform = `rotateZ(${((hour * 30) % 360) + (min / 2.3) - 90}deg)`;
}

setInterval(myFunc, 1000);
