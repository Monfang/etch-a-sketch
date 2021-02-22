//let btn = document.getElementById("start");
//numberOfRows = prompt("How many rows do you want?");
//  btn.addEventListener("click", createGrid);


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
