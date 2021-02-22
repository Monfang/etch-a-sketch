
function changeGrid() {
  let promptSize = prompt("How many rows do you want?");

    if ((promptSize > 64) || (promptSize < 1) || !(typeof(promptSize) === 'number')) {
      alert("Please choose a number from 1 to 64");
      return;
          }
  //console.log(promptSize);
  createGrid(promptSize);

}


  function createGrid(numberOfRows) {
    var Container = document.getElementById("container");
    Container.innerHTML = '';

    //let numberOfRows = prompt("How many rows do you want?");
    //let i = 0;
    let x = numberOfRows * numberOfRows;

    document.documentElement.style.setProperty("--columns-row", numberOfRows);
    for (i =  0; i < x ; i++) {
      var div = document.createElement("div");
      div.className = "grid";
      document.getElementById("container").appendChild(div);

      div.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "black";
    });
  }
}

createGrid(16);
