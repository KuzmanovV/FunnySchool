let seconds = 0;
let eTimer = document.querySelector(".timer p");

function incrementSeconds() {
  seconds += 1;
  eTimer.innerText = "You are solving for " + seconds + " seconds.";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function e(type, attr, ...content) {
  const element = document.createElement(type);
  for (let prop in attr) {
    element[prop] = attr[prop];
  }
  for (let item of content) {
    if (typeof item == "string" || typeof item == "number") {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }
  return element;
}

const eStartButton = document.querySelector(".start");
eStartButton.disabled = false;

function tap() {
  const tap = new Audio("../audio/light-switch-81967.mp3");
  tap.play();
}

(function success() {
  const tap = new Audio("../audio/success-1-6297.mp3");
  tap.play();
})();

document.querySelector(".restart").addEventListener("click", restart);
function restart() {
  location.reload();
}

eStartButton.addEventListener("click", start);
function start(ev) {
  ev.preventDefault();
  
  const ticking = new Audio("../audio/Clock-ticking-Turning-4-www.FesliyanStudios.com.mp3");
  ticking.play();
tap();
  
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

    const row = e(
      "div",
      { className: "task" },
      e("input", {
        className: "firstNumber taskField",
        type: "number",
        name: "firstNumber",
        disabled: "disabled",
      }),
      e("input", {
        className: "action taskField",
        type: "text",
        name: "action",
        value: oper,
        disabled: "disabled",
      }),
      e("input", {
        className: "secondNumber taskField",
        type: "number",
        name: "secondNumber",
        disabled: "disabled",
      }),
      e("input", {
        className: "equal taskField",
        type: "text",
        name: "equal",
        value: "=",
        disabled: "disabled",
      }),
      e("input", {
        className: "result taskField",
        type: "number",
        name: "result",
      })
    );

    document.querySelector(".tasks").appendChild(row);

    let eFirstNumber = document.querySelectorAll(".firstNumber")[i];
    let eSecondNumber = document.querySelectorAll(".secondNumber")[i];

    eFirstNumber.value = getRandomInt(minNumber, maxNumber);
    eSecondNumber.value = getRandomInt(minNumber, maxNumber);
  }

  eStartButton.disabled = true;
}

document.querySelector(".submit").addEventListener("click", submit);
function submit() {
  tap();
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
      .appendChild(e("p", {}, `You MADE IT in ${seconds} seconds!!!`));
    document.querySelector(".timer p").style.setProperty("color", "green");
    document.querySelector(".timer p").style.setProperty("font-weight", "800");
    document.querySelector(".timer p").style.setProperty("font-size", "50px");
    const audio = new Audio("../audio/success-1-6297.mp3");
    audio.play();
    document.querySelector(".mistake").remove();
    success();

    for (let i = 0; i < rowsNumber; i++) {
      document.querySelector(".task").remove();
    }
  } else {
    document.querySelector(".mistake").style.setProperty("display", "block");
    const tap = new Audio("../audio/Wrong Clakson Sound Effect.mp3");
    tap.play();
  }
}
