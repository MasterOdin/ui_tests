function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lorem = new LoremIpsum();

const getButton = document.getElementById('get-button');
const placeButton = document.getElementById('place-button');
const returnButton = document.getElementById('return-button');
const createButton = document.getElementById('create-button');
const note = document.getElementById('note');
const noteTextarea = document.getElementById('note-textarea');
const colorDrawer = document.getElementById('color-drawer');
const inputDrawer = document.getElementById('input-drawer');
const cancelButton = document.getElementById('cancel');

const drawInput = false;

const colors = [
  'yellow',
  'orange',
  'green',
  'blue',
  'red',
  'purple'
];

createButton.addEventListener('click', () => {
  createButton.style.display = 'none';
  getButton.style.display = 'none';
  placeButton.style.display = 'block';
  note.style.display = 'block';
  colors.forEach((color) => note.classList.remove(color));
  note.classList.add('yellow');
  note.getElementsByTagName('textarea')[0].value = '';
  note.getElementsByTagName('textarea')[0].focus();
  colorDrawer.style.display = 'flex';
  inputDrawer.style.display = 'flex';
});

getButton.addEventListener('click', () => {
  createButton.style.display = 'none';
  getButton.style.display = 'none';
  placeButton.style.display = 'block';
  cancelButton.style.display = 'block';
  note.style.display = 'block';
  note.getElementsByTagName('textarea')[0].value = lorem.generate(getRandomInt(5, 20));
  note.classList.add(colors[getRandomInt(0, colors.length-1)]);
  colorDrawer.style.display = 'flex';
  inputDrawer.style.display = 'flex';

});

placeButton.addEventListener('click', () => {
  note.style.display = 'none';
  noteTextarea.setAttribute('disabled', 'true');
  for (let elem of document.getElementsByClassName('active')) {
    elem.classList.remove('active');
  }
  colors.forEach((color) => note.classList.remove(color));
  placeButton.style.display = 'none';
  getButton.style.display = 'block';
  createButton.style.display = 'block';
  colorDrawer.style.display = 'none';
  inputDrawer.style.display = 'none';
  cancelButton.style.display = 'none';
});

cancelButton.addEventListener('click', () => {
  placeButton.dispatchEvent(new MouseEvent('click'));
});

for (const elem of document.getElementsByClassName('color')) {
  const color = Array.from(elem.classList)[1];
  elem.addEventListener('click', () => {
    colors.forEach((color_inner) => note.classList.remove(color_inner));
    note.classList.add(color);
  });
}

document.addEventListener('mousedown', (event) => {
  const target = event.target;
  const textarea = note.getElementsByTagName('textarea')[0];
  if (textarea && target !== textarea && target.classList.contains('color')) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
});

note.getElementsByTagName('textarea')[0].addEventListener('focusout', (event) => {
  console.log
});

const pointerOn = document.getElementById('pointer-on');
const pointerOff = document.getElementById('pointer-off');

pointerOn.addEventListener('click', () => {
  pointerOn.style.display = 'none';
  pointerOff.style.display = 'block';
});

pointerOff.addEventListener('click', () => {
  pointerOff.style.display = 'none';
  pointerOn.style.display = 'block';
});

for (const elem of document.getElementsByClassName('input')) {
  elem.addEventListener('click', () => {
    if (elem.classList.contains('active') || elem.getAttribute('id') === 'trash') {
      return;
    }

    for (const elem of document.getElementsByClassName('active')) {
      elem.classList.remove('active');
    }
    elem.classList.add('active');
  });
}

document.getElementById('input-text').addEventListener('click', () => {
  noteTextarea.removeAttribute('disabled');
  noteTextarea.focus();
});

document.getElementById('input-brush').addEventListener('click', () => {
  noteTextarea.setAttribute('disabled', 'true');
});

document.getElementById('input-mic').addEventListener('click', () => {
  noteTextarea.setAttribute('disabled', 'true');
});

document.getElementById('trash').addEventListener('click', () => {
  noteTextarea.setAttribute('disabled', 'true');
  const event = new MouseEvent('click');
  placeButton.dispatchEvent(event);
  for (const elem of document.getElementsByClassName('active')) {
    elem.classList.remove('active');
  }
});

function setHeight(elem) {
  elem.style.height = Math.max(elem.clientHeight, elem.innerHeight || 0) + "px";
}

function setHeightOther(elem, other) {
  elem.style.height = Math.max(other.clientHeight, other.innerHeight || 0) + "px";
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // with the page loaded, we transition from the initial "relative" spacing to absolute values
    const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.body.style.width = screenWidth + "px";
    document.body.style.height = screenHeight + "px";

    const root = document.getElementById('root');
    root.style.width = screenWidth + "px";
    root.style.height = screenHeight + "px";

    const topDrawer = document.getElementById('top-drawer');
    setHeight(topDrawer);
    setHeight(colorDrawer);
    colorDrawer.style.top = (screenHeight * .06) + "px";
    setHeight(inputDrawer);
    inputDrawer.style.top = (screenHeight * .1) + "px";
    setHeight(createButton);
    createButton.style.display = 'none';
    note.style.display = 'block';
    setHeight(note);
    note.style.display = 'none';
    createButton.style.display = 'block';
    setHeightOther(placeButton, getButton);
    setHeightOther(returnButton, getButton);
    setHeight(getButton);

    setHeightOther(pointerOff, pointerOn);
    setHeight(pointerOn);

    setTimeout(() => {
      colorDrawer.style.display = 'none';
      inputDrawer.style.display = 'none';
      document.getElementById('loading').remove();
    }, 1500);
  }, 500);

});
