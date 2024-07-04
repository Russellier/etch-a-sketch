"use strict";

const gridSize = 50;
const container = document.querySelector('.container');


function createGrid(sizeOfGrid) {
  for (let i = 0; i < sizeOfGrid; i++) {

    const columns = document.createElement('div');
    columns.setAttribute('class', 'columns');
    container.appendChild(columns);

    for (let j = 0; j < sizeOfGrid; j++) {

      const rows = document.createElement('div');
      rows.setAttribute('class', 'rows');
      columns.appendChild(rows);
    }
  }
}

createGrid(gridSize);