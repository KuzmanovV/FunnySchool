import * as utils from "./moduls/util.js";
import row from "./moduls/rowMaker.js";

const eStartButton = document.querySelector(".start");

let seconds = 0;
let eTimer = document.querySelector(".timer p");
function incrementSeconds() {
  seconds += 1;
  eTimer.innerText = "You are solving for " + seconds + " seconds.";
}

eStartButton.disabled = false;
eStartButton.addEventListener("click", start);
function start(ev) {
  ev.preventDefault(ev);
  eStartButton.disabled = true;
  utils.sound("../audio/tap.mp3");
  utils.sound("../audio/Clock-ticking.mp3");

  setInterval(incrementSeconds, 1000);

  let rowsNumber = document.querySelector(".controlInput").value;
  let minNumber = Number(document.querySelector(".minNumInput").value);
  let maxNumber = Number(document.querySelector(".maxNumInput").value);

  for (let i = 0; i < rowsNumber; i++) {
    let oper = "+";
    if ((i + 1) % 2 == 0) {
      oper = "-";
    } else {
      oper = "+";
    }
    document.querySelector(".tasks").appendChild(row(oper));

    let eFirstNumber = document.querySelectorAll(".firstNumber")[i];
    let eSecondNumber = document.querySelectorAll(".secondNumber")[i];

    eFirstNumber.value = utils.getRandomInt(minNumber, maxNumber);
    eSecondNumber.value = utils.getRandomInt(minNumber, maxNumber);
  }
}

document.querySelector(".submit").addEventListener("click", submit);
function submit() {
  utils.sound("../audio/tap.mp3");
  let readyFlag = true;
  let checkedFlag = false;
  let rowsNumber = document.querySelector(".controlInput").value;

  for (let i = 0; i < rowsNumber; i++) {
    let firstNumber = Number(
      document.querySelectorAll(".firstNumber")[i].value
    );
    let secondNumber = Number(
      document.querySelectorAll(".secondNumber")[i].value
    );
    let result = Number(document.querySelectorAll(".result")[i].value);

    checkedFlag = true;

    if ((i + 1) % 2 != 0) {
      if (firstNumber + secondNumber != result) {
        readyFlag = false;
      }
    } else {
      if (firstNumber - secondNumber != result) {
        readyFlag = false;
      }
    }
  }

  if (readyFlag && checkedFlag) {
    eTimer.remove();
    scroll(0, 0);
    document
      .querySelector(".timer")
      .appendChild(utils.e("p", {}, `You MADE IT in ${seconds} seconds!!!`));
    document.querySelector(".timer p").style.setProperty("color", "green");
    document.querySelector(".timer p").style.setProperty("font-weight", "800");
    document.querySelector(".timer p").style.setProperty("font-size", "50px");

    document.querySelector(".mistake").remove();
    utils.sound("../audio/success.mp3");

    for (let i = 0; i < rowsNumber; i++) {
      document.querySelector(".task").remove();
    }
  } else {
    document.querySelector(".mistake").style.setProperty("display", "block");
    utils.sound("../audio/Wrong Clakson Sound Effect.mp3");
  }
}

let restarter = document
  .querySelector(".restart")
  .addEventListener("click", restart);
utils.sound("../audio/tap.mp3");
function restart() {
  location.reload();
}
