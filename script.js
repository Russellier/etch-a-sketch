"use strict";

const gridSize = 100;
const container = document.querySelector('.container');
let isMouseDown = false;

function drawGrid(sizeOfGrid) {
  for (let i = 0; i < sizeOfGrid; i++) {

    const columns = document.createElement('div');
    columns.setAttribute('class', 'columns');
    container.appendChild(columns);

    for (let j = 0; j < sizeOfGrid; j++) {

      const rows = document.createElement('div');
      rows.setAttribute('class', 'rows');
      columns.appendChild(rows);
      
      changeColor(rows);
    }
  }
}

function changeColor(pixel) {
  pixel.addEventListener('mousedown', () => {
    isMouseDown = true;
  });
  pixel.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  pixel.addEventListener('mousemove', () => {
    if (isMouseDown) {
      pixel.style.backgroundColor = 'black';
    }
  });
}

drawGrid(gridSize);