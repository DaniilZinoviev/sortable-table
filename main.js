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
      }
      break;
    case "string":
      compare = function(rowA, rowB) {
        return rowA.cells[cellIndex].innerHTML.localeCompare(rowB.cells[cellIndex].innerHTML)
      }
  }
  // Sort by necessary compare function
  rowsArray.sort(compare);

  // Replace old table body
  table.removeChild(tbody);

  for (let i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }

  table.appendChild(tbody);
}