const cursor = document.getElementById('cursor');
const cursorContainer = document.getElementById('cursor-container');
document.getElementById('overlay').addEventListener('mousemove', (event) => {
  cursor.style.top = (event.clientY + 65) + "px";
  cursor.style.left = (event.clientX - 10) + "px";

  cursorContainer.style.top = (event.clientY - 5) + "px";
  cursorContainer.style.left = (event.clientX - 85) + "px";

  if (hidden) {
    moved = true;
  }
});

let hidden = null;
let moved = false;
document.getElementById('overlay').addEventListener('click', (event) => {
  console.log(event);
  if (!hidden) {
    for (let elem of document.elementsFromPoint(event.clientX, event.clientY)) {
      if (elem.classList.contains('note')) {
        hidden = elem;
        moved = false;
        hidden.classList.add('selected');
        cursorContainer.style.display = 'block';
        cursorContainer.classList.add(hidden.classList[1]);
        cursorContainer.style.top = hidden.style.top;
        cursorContainer.style.left = hidden.style.left;
        return;
      }
    }
  }
  event.stopPropagation();
  event.preventDefault();

  if (moved) {
    hidden.style.top = (event.clientY - 5) + "px";
    hidden.style.left = (event.clientX - 85) + "px";
  }
  hidden.classList.remove('selected');
  cursorContainer.style.display = 'none';
  cursorContainer.classList.remove(hidden.classList[1]);
  hidden.parentNode.appendChild(hidden);
  hidden = null;
});
