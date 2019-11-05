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
const colorDrawer = document.getElementById('color-drawer');

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
  colorDrawer.style.display = 'flex';
});

getButton.addEventListener('click', () => {
  createButton.style.display = 'none';
  getButton.style.display = 'none';
  placeButton.style.display = 'block';
  note.style.display = 'block';
  note.getElementsByTagName('textarea')[0].value = lorem.generate(getRandomInt(5, 20));
  note.classList.add(colors[getRandomInt(0, colors.length-1)]);
  colorDrawer.style.display = 'flex';
});

placeButton.addEventListener('click', () => {
  note.style.display = 'none';
  colors.forEach((color) => note.classList.remove(color));
  placeButton.style.display = 'none';
  getButton.style.display = 'block';
  createButton.style.display = 'block';
  colorDrawer.style.display = 'none';
});

for (const elem of document.getElementsByClassName('color')) {
  const color = Array.from(elem.classList)[1];
  elem.addEventListener('click', () => {
    colors.forEach((color_inner) => note.classList.remove(color_inner));
    note.classList.add(color);
  });
}

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
