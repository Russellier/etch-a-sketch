"use strict";

const container = document.querySelector('.container');
const penSize = document.querySelector('.pen-size');
const penType = document.querySelector('.pen-type');
const penColor = document.querySelector('.pen-color');
let gridSize = 40;
let isMouseDown = false;

function drawGrid(sizeOfGrid) {
  container.innerHTML = ""; // Erase all contents of .container

  for (let i = 0; i < sizeOfGrid; i++) {

    const columns = document.createElement('div');
    columns.setAttribute('class', 'columns');
    container.appendChild(columns);

    for (let j = 0; j < sizeOfGrid; j++) {

      const rows = document.createElement('div');
      rows.setAttribute('class', 'rows');
      columns.appendChild(rows);
      
      addListeners(rows);
    }
  }
}

function pencilOrMarker() {
  if (penType.value === 'pencil') {
    let opacity = Number(pixel.style.opacity);
    if (opacity < 1) {
      opacity += 0.1;
    }
    pixel.style.opacity = opacity;
  } else {
    pixel.style.opacity = 1;
  }
}

function randomColor() {
  // use 220 as ceiling to avoid light colors
  let r = Math.floor(Math.random() * 220);
  let g = Math.floor(Math.random() * 220);
  let b = Math.floor(Math.random() * 220);

  return `rgb(${r}, ${g}, ${b})`;
}

function addListeners(pixel) {
  pixel.addEventListener('mousedown', () => {
    isMouseDown = true;
  });

  pixel.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  pixel.addEventListener('mouseover', (e) => {
    if (isMouseDown) {
      pixel.style.backgroundColor = penColor.value;
      pencilOrMarker;
      // pixel.style.backgroundColor = randomColor();
    }
  });

}

penSize.addEventListener('click', () => {
  gridSize = 120 - (penSize.value * 20);
  drawGrid(gridSize);
});

drawGrid(gridSize);


// Allow user to select pen color
// Allow user to 'erase'