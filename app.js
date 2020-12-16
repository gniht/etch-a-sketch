

function squareDivGrid(dimension){
  const gridContainer = document.createElement("div");
  gridContainer.id = "container";
  document.querySelector('body').append(gridContainer);
  for (let i = 0; i < dimension; i++){
    for (let j = 0; j < dimension; j++){
      let temp = document.createElement('div');
      temp.classList.add(`row${i}`, `column${j}`);
      //temp.innerText = `${i},${j}`;
      gridContainer.append(temp);
    }
  }  
}

squareDivGrid(16);



