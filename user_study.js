let sensitivity = {
  coarse: 0,
  fine: 0
};
let sensitivityElem = document.getElementById('current-sensitivity');
let mode = 'coarse';

document.getElementById('plus').addEventListener('click', () => {
  sensitivity[mode]++
  sensitivity[mode] = Math.min(9, sensitivity[mode]);
  sensitivityElem.textContent = sensitivity[mode];
});

document.getElementById('minus').addEventListener('click', () => {
  sensitivity[mode]--;
  sensitivity[mode] = Math.max(-9, sensitivity[mode]);
  sensitivityElem.textContent = sensitivity[mode];
});


const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click', () => {
  start.style.display = 'none';
  stop.style.display = 'block';
});

stop.addEventListener('click', () => {
  stop.style.display = 'none';
  start.style.display = 'block';
});

const fineElem = document.getElementById('mode-fine');
const coarseElem = document.getElementById('mode-coarse');

fineElem.addEventListener('click', () => {
  if (mode === 'fine') {
    return;
  }
  mode = 'fine';
  coarseElem.classList.remove('orange');
  fineElem.classList.add('orange');

  sensitivityElem.textContent = sensitivity[mode];
});

coarseElem.addEventListener('click', () => {
  if (mode === 'coarse') {
    return;
  }
  mode = 'coarse';
  fineElem.classList.remove('orange');
  coarseElem.classList.add('orange');

  sensitivityElem.textContent = sensitivity[mode];
});
