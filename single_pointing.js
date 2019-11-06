const content = document.getElementById('content');
const leftBar = document.getElementById('left-bar');
const rightBar = document.getElementById('right-bar');
const start = document.getElementById('start');

content.addEventListener('click', (event) => {
  const elem = document.createElement('div');
  elem.classList.add('plus');
  elem.style.top = (event.clientY - 24) + 'px';
  elem.style.left = (event.clientX - 11) + 'px';
  elem.textContent = "+";
  content.appendChild(elem);
  setTimeout(() => {
    elem.remove();
  }, 500);
});

function finishTrial() {
  start.style.display = 'block';
  experimentStarted = false;
}

let experimentStarted = false;
let clicks = 0;

let leftBarTimeout;
leftBar.addEventListener('click', () => {
  if (!experimentStarted) {
    leftBar.classList.add('active');
    if (leftBarTimeout) {
      console.log(leftBarTimeout);
      clearTimeout(leftBarTimeout);
      leftBarTimeout = null;
    }
    leftBarTimeout = setTimeout(() => {
      leftBarTimeout = null;
      leftBar.classList.remove('active');
    }, 500);
  }
  else {
    if (leftBar.classList.contains('active')) {
      leftBar.classList.remove('active');
      clicks++;
      if (clicks >= 7) {
        finishTrial();
        return;
      }
      rightBar.classList.add('active');
    }
  }
});

let rightBarTimeout;
rightBar.addEventListener('click', () => {
  if (!experimentStarted) {
    rightBar.classList.add('active');
    if (rightBarTimeout) {
      clearTimeout(rightBarTimeout);
    }
    rightBarTimeout= setTimeout(() => {
      rightBar.classList.remove('active');
    }, 500);
  }
  else {
    if (rightBar.classList.contains('active')) {
      rightBar.classList.remove('active');
      clicks++;
      if (clicks >= 7) {
        finishTrial();
        return;
      }
      leftBar.classList.add('active');
    }
  }
});

start.addEventListener('click', () => {
  if (leftBarTimeout) {
    clearTimeout(leftBarTimeout);
  }
  leftBar.classList.add('active');
  experimentStarted = true;
  clicks = 0;
  start.style.display = 'none';
});
