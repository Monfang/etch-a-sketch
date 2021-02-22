let brushColor = 'black';

function changeGrid() {
  let promptSize = prompt("How many rows do you want?");
  
   if ((promptSize <= 64) && (promptSize >= 1)) {
    createGrid(promptSize);  
    return;
   } 
    alert("Please choose a number from 1 to 64");
   }


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  brushColor = color;
  return color;
}


function createGrid(numberOfRows) {
  var Container = document.getElementById("container");
  Container.innerHTML = '';

  let x = numberOfRows * numberOfRows;

  document.documentElement.style.setProperty("--columns-row", numberOfRows);
  for (i =  0; i < x ; i++) {
    var div = document.createElement("div");
    div.className = "grid";
    document.getElementById("container").appendChild(div);

    div.addEventListener("mouseover", function () {
      if (brushColor === 'black') {
        this.style.backgroundColor = brushColor;
      } else { 
        this.style.backgroundColor = (getRandomColor());
      }
      
    });
  }
}


createGrid(16);