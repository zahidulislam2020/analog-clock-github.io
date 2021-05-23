const secondHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hr");

const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')
const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

secondHand.style.transform = `rotateZ(270deg)`;
minHand.style.transform = `rotateZ(270deg)`;
hourHand.style.transform = `rotateZ(270deg)`;

let getSec = new Date().getSeconds();
let degofSecHand = getSec * 6;

function timer() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let myDate = date.getDate()
  let day = date.getDay();

  let newSec = sec < 10 ? "0" + sec : sec;
  let newMin = min < 10 ? "0" + min : min;
  let newDate = myDate < 10 ? '0' + myDate : myDate

  dateEl.innerHTML = newDate
  dayEl.innerHTML = dayArray[day]
  document.title = `Current Time: ${hour}:${newMin}:${newSec}`;

  degofSecHand += 6;

  secondHand.style.transform = `rotateZ(${(degofSecHand % 360) - 90}deg)`;
  minHand.style.transform = `rotateZ(${((min * 6) % 360) + sec / 10 - 90}deg)`;
  hourHand.style.transform = `rotateZ(${
    ((hour * 30) % 360) + min / 2.3 - 90
  }deg)`;
}

setInterval(timer, 1000);

window.onload = function () {
  const myAudio = document.getElementById("myAudio");
  myAudio.pause();
  (function () {
    let silentBtn = document.querySelector(".play-pause");
    silentBtn.addEventListener("click", silentHandler);
    myAudio.volume = 0.3;
    let isPlay = false;

    function silentHandler() {
      if (!isPlay) {
        myAudio.play();
        myAudio.addEventListener("ended", myFunc);
        silentBtn.innerHTML = "ON";
        silentBtn.style.color = 'green'
        isPlay = true;
      } else {
        myAudio.pause();
        myAudio.removeEventListener("ended", myFunc);
        silentBtn.innerHTML = "OFF";
        silentBtn.style.color = 'maroon'
        isPlay = false;
      }
    }

    function myFunc() {
      myAudio.play();
      console.log("hi");
    }
  })();
};
