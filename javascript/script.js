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
  return color;
}

  //random = getRandomColor();
  //console.log(random);

function createGrid(numberOfRows) {
  //let color = random
  //console.log(color);

  var Container = document.getElementById("container");
  Container.innerHTML = '';

  let x = numberOfRows * numberOfRows;

  document.documentElement.style.setProperty("--columns-row", numberOfRows);
  for (i =  0; i < x ; i++) {
    var div = document.createElement("div");
    div.className = "grid";
    document.getElementById("container").appendChild(div);

    div.addEventListener("mouseover", function () {
      this.style.backgroundColor = getRandomColor();
    });
  }
}


createGrid(16);
