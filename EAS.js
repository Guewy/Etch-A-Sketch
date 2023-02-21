const gridContainer = document.getElementById('gridContainer');
const slider = document.querySelector(".slider");
const sliderValueText = document.getElementById("sliderValue");

/*Event Listeners for buttons*/
const blackB = document.getElementById("Black");
const rainbowB = document.getElementById("Rainbow");
const whiteB = document.getElementById("Eraser");
const reset = document.getElementById("Reset");

let gridSize = slider.value;
let gridItems = [];

function createGrid() {
  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      const div = document.createElement('div');
      div.classList.add('gridItems');
      gridContainer.appendChild(div);
      gridItems.push(div);
    }
  }
};

function sliderPosition(){
  sliderValueText.textContent = `Grid: ${slider.value} x ${slider.value}`;
  slider.oninput = function () {
    sliderValueText.textContent = `Grid: ${this.value} x ${this.value}`;
  }
}

function slideGrid() {
  slider.addEventListener('input', () => {
    gridSize = slider.value;
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    createGrid();
  });
};

function blackBrush(){
  blackB.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = 'black';
      });
    });
  })
}

function whiteBrush(){
  whiteB.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = 'white';
      });
    });
  })
}

function rainbowBrush(){
  rainbowB.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = getRandomColor();
      });
    });
  })
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function clearAll(){
  reset.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    gridSize = slider.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    createGrid();
  })
}



createGrid();
sliderPosition();
slideGrid()
blackBrush();
whiteBrush();
rainbowBrush();
clearAll();


//result.textContent = "computer wSins";

//result.textContent = 'Set over! Computer wins!\r\nPlay again?';

//Label the paragraphs
//let result = document.getElementById('info');

//Add a style for a linebreak
//result.setAttribute('style', 'white-space: pre;');

//document.getElementById('scissor-button').addEventListener('click',
  //() => game('Scissor'));