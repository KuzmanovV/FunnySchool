const today = new Date();

let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);

const time = h + ':' + m + ':' + s;

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.time').innerHTML = h + ':' + m + ':' + s;
  setTimeout(clock, 1000);
}

export { clock, today, time };
