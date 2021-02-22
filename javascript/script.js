function changeGrid() {
  let promptSize = prompt("How many rows do you want?");

    if ((promptSize > 64) || (promptSize < 1) || !(typeof(promptSize) === 'number')) {
      alert("Please choose a number from 1 to 64");
      return;
          }
  //console.log(promptSize);
  createGrid(promptSize);
}

let random = '';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
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

    div.addEventListener("mouseenter", function () {
    this.style.backgroundColor = getRandomColor();
    });
  }
}

getRandomColor();
createGrid(16);

console.log(random);
