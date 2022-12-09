import * as utils from './modules/utils.js';
import { row, rowMixed1, rowMixed2, rowTriple } from './modules/rowMaker.js';
import toggleMenu from './modules/headerAnim.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { footerTemplate } from './modules/renderFunctions.js';
import { today, time } from './modules/clock.js';

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
  document.querySelector('.complexityInput').setAttribute('disabled', '');
  document.querySelector('.minNumInput').setAttribute('disabled', '');
  document.querySelector('.maxNumInput').setAttribute('disabled', '');
  document.querySelector('.controlInput').setAttribute('disabled', '');
  document.querySelector('.hint50').setAttribute('disabled', '');
  document.querySelector('.hint100').setAttribute('disabled', '');
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
  let hintFlag = 0;

  for (let i = 0; i < rowsNumber; i++) {
    let zeroNumber = 0;
    if (document.querySelectorAll('.zeroNumber')[i]) {
      zeroNumber = Number(document.querySelectorAll('.zeroNumber')[i].value);
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
        hintFlag = i;
      }
    } else {
      if (zeroNumber + firstNumber - secondNumber != result) {
        correctFlag = false;
        hintFlag = i;
      }
    }
  }

  const complexityInput = document.querySelector('.complexityInput').value;
  const minNumberInput = document.querySelector('.minNumInput').value;
  const maxNumberInput = document.querySelector('.maxNumInput').value;
  const inputRowsNumber = document.querySelector('.controlInput').value;
  const hint50 = document.querySelector('.hint50').checked;
  const hint100 = document.querySelector('.hint100').checked;
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
        .querySelector('ul :nth-child(5) a')
        .setAttribute('href', './html/cartoons.html');
      document
        .querySelector('ul :nth-child(6) a')
        .setAttribute('href', './html/comics.html');
    }

    // if (
    //   minNumberInput == 0 &&
    //   maxNumberInput == 10 &&
    //   inputRowsNumber == 6 &&
    //   hint50 != true &&
    //   hint100 != true
    // ) {
      let newRecord = {
        date: today.toLocaleDateString('en-GB'),
        time: time,
        record: seconds,
      };
      if (complexityInput == 'normal') {
        let recordsArrNormal = JSON.parse(localStorage.recordsArrNormal);
        recordsArrNormal.push(newRecord);
        localStorage.removeItem(recordsArrNormal);
        localStorage.recordsArrNormal = JSON.stringify(recordsArrNormal);
      } else if (complexityInput == 'mixed') {
        let recordsArrMixed = JSON.parse(localStorage.recordsArrMixed);
        recordsArrMixed.push(newRecord);
        localStorage.removeItem(recordsArrMixed);
        localStorage.recordsArrMixed = JSON.stringify(recordsArrMixed);
      } else if (complexityInput == 'triple') {
        let recordsArrTriple = JSON.parse(localStorage.recordsArrTriple);
        recordsArrTriple.push(newRecord);
        localStorage.removeItem(recordsArrTriple);
        localStorage.recordsArrTriple = JSON.stringify(recordsArrTriple);
      }
    // }
  } else {
    document.querySelector('.mistake').style.setProperty('display', 'block');
    utils.sound('../static/audio/zip.mp3');

    if (hint100) {
      for (let i = 0; i < rowsNumber; i++) {
        document.querySelectorAll('.task')[i].classList.remove('wrongTask');
      }
      document.querySelectorAll('.task')[hintFlag].classList.add('wrongTask');
    } else if (hint50) {
      for (let i = 0; i < rowsNumber; i++) {
        document.querySelectorAll('.task')[i].classList.remove('correctTask');
      }
      if (hintFlag % 2 == 0) {
        for (let i = 1; i < rowsNumber; i += 2) {
          document.querySelectorAll('.task')[i].classList.add('correctTask');
        }
      } else {
        for (let i = 0; i < rowsNumber; i += 2) {
          document.querySelectorAll('.task')[i].classList.add('correctTask');
        }
      }
    }
  }
}

document.querySelector('.restart').addEventListener('click', restart);
utils.sound('../static/audio/tap.mp3');
function restart() {
  location.reload();
}

render(footerTemplate, document.body);
