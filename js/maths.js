import * as utils from './moduls/utils.js';
import row from './moduls/rowMaker.js';

let seconds = 0;
let eTimer = document.querySelector('.timer p');
function incrementSeconds() {
  seconds += 1;
  eTimer.innerText = 'You are solving for ' + seconds + ' seconds.';
}
function sound(audioFile) {
  const audio = new Audio(audioFile);
  audio.play();
  audio.volume = 0.01;
}

const tickingSound = new Audio('../static/audio/Clock-ticking.mp3');
const eStartButton = document.querySelector('.start');
eStartButton.disabled = false;
eStartButton.addEventListener('click', start);
function start() {
  eStartButton.disabled = true;
  setInterval(incrementSeconds, 1000);
  {
    sound('../static/audio/tap.mp3');
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
    document.querySelector('.tasks').appendChild(row(oper));

    let eFirstNumber = document.querySelectorAll('.firstNumber')[i];
    let eSecondNumber = document.querySelectorAll('.secondNumber')[i];

    let minNumber = Number(document.querySelector('.minNumInput').value);
    let maxNumber = Number(document.querySelector('.maxNumInput').value);
    eFirstNumber.value = utils.getRandomInt(minNumber, maxNumber);
    eSecondNumber.value = utils.getRandomInt(minNumber, maxNumber);
    if(i==0){
      document.querySelector('.result').focus();
    }
  }
}

document.querySelector('.submit').addEventListener('click', submit);
function submit() {
  sound('../static/audio/tap.mp3');
  let correctFlag = true;
  let rowsNumber = document.querySelector('.controlInput').value;

  for (let i = 0; i < rowsNumber; i++) {
    let firstNumber = Number(
      document.querySelectorAll('.firstNumber')[i].value
    );
    let secondNumber = Number(
      document.querySelectorAll('.secondNumber')[i].value
    );
    let result = Number(document.querySelectorAll('.result')[i].value);

    if ((i + 1) % 2 != 0) {
      if (firstNumber + secondNumber != result) {
        correctFlag = false;
      }
    } else {
      if (firstNumber - secondNumber != result) {
        correctFlag = false;
      }
    }
  }
  if (correctFlag) {
    tickingSound.pause();
    sound('../static/audio/success.mp3');
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
        .setAttribute('href', './html/404.html');
      document
        .querySelector('ul :nth-child(2) a')
        .setAttribute('href', './html/songs.html');
      document
        .querySelector('ul :nth-child(4) a')
        .setAttribute('href', './html/films.html');
      document
        .querySelector('ul :nth-child(5) a')
        .setAttribute('href', './html/404.html');
    }
  } else {
    document.querySelector('.mistake').style.setProperty('display', 'block');
    sound('../static/audio/WrongClakson.mp3');
  }
}

document.querySelector('.restart').addEventListener('click', restart);
sound('../static/audio/tap.mp3');
function restart() {
  location.reload();
}