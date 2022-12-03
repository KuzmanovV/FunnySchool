import * as utils from './js/moduls/utils.js';
import { row, rowMixed1, rowMixed2, rowTriple } from './js/moduls/rowMaker.js';
import toggleMenu from './js/moduls/headerAnim.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { footerTemplate } from './js/moduls/renderFunctions.js';

toggleMenu();

let seconds = 0;
let eTimer = document.querySelector('.timer p');
function incrementSeconds() {
  seconds += 1;
  eTimer.innerText = 'You are solving for ' + seconds + ' seconds.';
}

const tickingSound = new Audio('../static/audio/Clock-ticking.mp3');
const eStartButton = document.querySelector('.start');
eStartButton.addEventListener('click', start);
function start(event) {
  event.preventDefault();
  document.querySelector('.complexityInput').setAttribute('disabled','');
  document.querySelector('.minNumInput').setAttribute('disabled','');
  document.querySelector('.maxNumInput').setAttribute('disabled','');
  document.querySelector('.controlInput').setAttribute('disabled','');
  document.querySelector('.joker').setAttribute('disabled','');
  eStartButton.style.setProperty('display', 'none');
  document.querySelector('.submit').style.setProperty('display', 'block');
  setInterval(incrementSeconds, 1000);
  {
    utils.sound('../static/audio/tap.mp3');
    tickingSound.volume = 0.05;
    tickingSound.play();
  }
  let rowsNumber = document.querySelector('.controlInput').value;
  for (let i = 0; i < rowsNumber; i++) {
    let oper = '+';
    if ((i + 1) % 2 == 0) {
      oper = '-';
    } else {
      oper = '+';
    }

    const tasksPlace = document.querySelector('.tasks');
    let complexityInput = document.querySelector('.complexityInput').value;
    let minNumber = Number(document.querySelector('.minNumInput').value);
    let maxNumber = Number(document.querySelector('.maxNumInput').value);
    let firstValue = utils.getRandomInt(minNumber, maxNumber);
    let secondValue = utils.getRandomInt(minNumber, maxNumber);
    if (
      (firstValue < secondValue && (i + 1) % 2 == 0) ||
      (firstValue > secondValue && i % 2 == 0)
    ) {
      [firstValue, secondValue] = [secondValue, firstValue];
    }

    if (complexityInput == 'normal') {
      tasksPlace.appendChild(row(oper));
      let eFirstNumber = document.querySelectorAll('.firstNumber')[i];
      let eSecondNumber = document.querySelectorAll('.secondNumber')[i];
      eFirstNumber.value = firstValue;
      eSecondNumber.value = secondValue;
    } else if (complexityInput == 'mixed') {
      if (i % 3 == 0) {
        tasksPlace.appendChild(rowMixed1(oper));
        let eSecondNumber = document.querySelectorAll('.secondNumber')[i];
        let eResult = document.querySelectorAll('.result')[i];
        eSecondNumber.value = firstValue;
        eResult.value = secondValue;
      } else if ((i - 1) % 3 == 0) {
        tasksPlace.appendChild(rowMixed2(oper));
        let eFirstNumber = document.querySelectorAll('.firstNumber')[i];
        let eResult = document.querySelectorAll('.result')[i];
        eFirstNumber.value = firstValue;
        eResult.value = secondValue;
      } else if ((i - 2) % 3 == 0) {
        tasksPlace.appendChild(row(oper));
        let eFirstNumber = document.querySelectorAll('.firstNumber')[i];
        let eSecondNumber = document.querySelectorAll('.secondNumber')[i];
        eFirstNumber.value = firstValue;
        eSecondNumber.value = secondValue;
      }
    } else if (complexityInput == 'triple') {
      tasksPlace.appendChild(rowTriple(oper));
      let zeroValue = utils.getRandomInt(minNumber, maxNumber);
      let eZeroNumber = document.querySelectorAll('.zeroNumber')[i];
      let eFirstNumber = document.querySelectorAll('.firstNumber')[i];
      let eSecondNumber = document.querySelectorAll('.secondNumber')[i];
      eZeroNumber.value = zeroValue;
      eFirstNumber.value = firstValue;
      eSecondNumber.value = secondValue;
    }

    if (i == 0) {
      if (complexityInput == 'mixed') {
        document.querySelector('.firstNumber').focus();
      } else {
        document.querySelector('.result').focus();
      }
    }
  }
}

document.querySelector('.submit').addEventListener('click', submit);
function submit() {
  utils.sound('../static/audio/tap.mp3');
  let correctFlag = true;
  let rowsNumber = document.querySelector('.controlInput').value;

  for (let i = 0; i < rowsNumber; i++) {
    let zeroNumber = 0;
    if (document.querySelectorAll('.zeroNumber')[i]) {
      zeroNumber = Number(
        document.querySelectorAll('.zeroNumber')[i].value
      );
    }
    let firstNumber = Number(
      document.querySelectorAll('.firstNumber')[i].value
    );
    let secondNumber = Number(
      document.querySelectorAll('.secondNumber')[i].value
    );
    let result = Number(document.querySelectorAll('.result')[i].value);

    if ((i + 1) % 2 != 0) {
      if (zeroNumber + firstNumber + secondNumber != result) {
        correctFlag = false;
      }
    } else {
      if (zeroNumber + firstNumber - secondNumber != result) {
        correctFlag = false;
      }
    }
  }
  if (correctFlag) {
    tickingSound.pause();
    utils.sound('../static/audio/success.mp3');
    eTimer.remove();
    document.querySelector('.mistake').remove();
    for (let i = 0; i < rowsNumber; i++) {
      document.querySelector('.task').remove();
    }
    scroll(0, 0);
    {
      document
        .querySelector('.timer')
        .appendChild(utils.el('p', {}, `You MADE IT in ${seconds} seconds!!!`));
      document.querySelector('.timer p').style.setProperty('color', 'green');
      document
        .querySelector('.timer p')
        .style.setProperty('font-weight', '800');
      document.querySelector('.timer p').style.setProperty('font-size', '50px');
    }
    {
      document.querySelectorAll('nav a').forEach((e) => {
        e.style.setProperty('color', 'rgb(0, 238, 255)');
      });
      document
        .querySelector('ul :nth-child(1) a')
        .setAttribute('href', './html/photos.html');
      document
        .querySelector('ul :nth-child(2) a')
        .setAttribute('href', './html/songs.html');
      document
        .querySelector('ul :nth-child(4) a')
        .setAttribute('href', './html/cartoons.html');
      document
        .querySelector('ul :nth-child(5) a')
        .setAttribute('href', './html/comics.html');
    }
    {
      localStorage.setItem(`seconds ${'1'}`, seconds);
    }
  } else {
    document.querySelector('.mistake').style.setProperty('display', 'block');
    utils.sound('../static/audio/zip.mp3');
  }
}

document.querySelector('.restart').addEventListener('click', restart);
utils.sound('../static/audio/tap.mp3');
function restart() {
  location.reload();
}

render(footerTemplate, document.body);
