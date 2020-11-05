/**
 * Main function for sorting functionality
 *
 * @param {HTMLTableElement} table
 *  A table to add sorting functionality to
 */
function SortingTable(table) {
  this.CHECK_MARK = "&#10004;";
  this.X_MARK = "&#10008;";
  this.boolClass = "text-success";
  this.tbody = table.getElementsByTagName("tbody")[0];
  this.thead = table.getElementsByTagName("thead")[0];

  this.handleHeadClick = function (e) {
    if (e.target.cellIndex !== undefined) {
      this.sortRows(e.target.cellIndex, e.target.getAttribute("data-type"));
    }
  };

  this.sortRows = function (cellIndex, type) {
    const originalRows = [].slice.call(this.tbody.rows);
    let compare;
    switch (type) {
      case "number":
        compare = function (rowA, rowB) {
          return (
            rowA.cells[cellIndex].innerHTML - rowB.cells[cellIndex].innerHTML
          );
        };
        break;
      case "string":
        compare = function (rowA, rowB) {
          return rowA.cells[cellIndex].innerHTML.localeCompare(
            rowB.cells[cellIndex].innerHTML
          );
        };
        break;
      case "bool":
        compare = function (rowA, rowB) {
          return rowA.cells[cellIndex].classList.contains(this.boolClass)
            ? -1
            : 1;
        };
      default:
        console.error("[SortingTable] Unknown data-type " + type + ".");
    }
    const sortedRows = originalRows.slice();
    sortedRows.sort(compare);
    // Sort by necessary compare function
    for (let i = 0; i < originalRows.length; i++) {
      if (
        originalRows[i].cells[cellIndex].innerHTML !=
        sortedRows[i].cells[cellIndex].innerHTML
      ) {
        break;
      }
      // table was sorted, so we should reverse an order on last row
      if (i === sortedRows.length - 1) {
        sortedRows.reverse();
      }
    }
    // Replace old table body
    table.removeChild(this.tbody);
    for (let i = 0; i < sortedRows.length; i++) {
      this.tbody.appendChild(sortedRows[i]);
    }
    table.appendChild(this.tbody);
  };

  this.createRow = function (data, callback) {
    const tr = document.createElement("tr");
    for (let i = 0; i < data.length; i++) {
      const td = document.createElement("td");
      td.innerHTML = data[i];
      if (typeof callback === "function") {
        callback(td, data[i]);
      }
      tr.appendChild(td);
    }
    this.tbody.appendChild(tr);
  };

  this.thead.addEventListener("click", this.handleHeadClick.bind(this));
}
