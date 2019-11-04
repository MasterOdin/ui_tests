let sensitivity = {
  coarse: 0,
  fine: 0
};
let sensitivityElem = document.getElementById('current-sensitivity');
let modeElem = document.getElementById('mode');
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

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  if (mode === 'coarse') {
    toggle.classList.add('yellow');
    toggle.classList.remove('orange');
  }
  else {
    toggle.classList.add('orange');
    toggle.classList.remove('yellow');
  }
  toggle.textContent = `Toggle ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
  mode = mode === 'coarse' ? 'fine' : 'coarse';
  modeElem.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
  sensitivityElem.textContent = sensitivity[mode];
});
