

function squareDivGrid(dimension){
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("container");
  gridContainer.setAttribute("style",`grid-template-columns: repeat(${dimension}, auto)`);  
  document.querySelector('body').append(gridContainer);
  const size = 800/dimension;
  for (let i = 0; i < dimension; i++){
    for (let j = 0; j < dimension; j++){
      let temp = document.createElement('div');
      temp.classList.add(`cell`,`${i}-${j}`);
      temp.setAttribute("style", `width: ${size}px; height: ${size}px;`);
      gridContainer.append(temp);
    }
  }  
}
let gridSize = parseInt(prompt("enter grid size."));
if(gridSize > 80){
  gridSize = 80;
}
squareDivGrid(gridSize);



