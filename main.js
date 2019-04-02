const table = document.getElementsByClassName("table")[0];

table.onclick = function(e) {
  if (e.target.tagName == "TH") {
    sortRows(e.target.cellIndex, e.target.getAttribute("data-type"));
  };
}

function sortRows(cellIndex, type) {
  const tbody = document.getElementsByTagName("tbody")[0];
  let rowsArray = [].slice.call(tbody.rows);
  let compare;
  // Choose desired compare function
  switch (type) {
    case "number":
      compare = function(rowA, rowB) {
        return rowA.cells[cellIndex].innerHTML - rowB.cells[cellIndex].innerHTML;
      };
      break;
    case "string":
      compare = function(rowA, rowB) {
        return rowA.cells[cellIndex].innerHTML.localeCompare(rowB.cells[cellIndex].innerHTML)
      };
      break;
    case "bool":
      compare = function(rowA, rowB) {
        return rowA.cells[cellIndex].classList.contains("is-alive-true") ? -1 : 1;
      }
  }
  let temp = rowsArray.slice();
  console.log(temp);
  // Sort by necessary compare function
  rowsArray.sort(compare);
  
  // check , did it sorted
  for (let i = 0; i < rowsArray.length; i++) {
    if (temp[i].cells[cellIndex].innerHTML != rowsArray[i].cells[cellIndex].innerHTML) {   
      console.log(temp[i].cells[cellIndex].innerHTML + " : " + rowsArray[i].cells[cellIndex].innerHTML);       
      break;
    }
    if (i == rowsArray.length - 1) {
      rowsArray.reverse();
    }
    
  }

  // Replace old table body
  table.removeChild(tbody);

  for (let i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }

  table.appendChild(tbody);
}