;(function () {
  const table = document.getElementsByClassName("table")[0];
  const tbody = table.getElementsByTagName("tbody")[0];

  table.onclick = function (e) {
    if (e.target.cellIndex !== undefined) {
      sortRows(e.target.cellIndex, e.target.getAttribute("data-type"));
    }
  };

  function sortRows(cellIndex, type) {
    let rowsArray = [].slice.call(tbody.rows);
    let compare;
    // Choose desired compare function
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
          return rowA.cells[cellIndex].classList.contains("is-alive-true")
            ? -1
            : 1;
        };
    }
    let temp = rowsArray.slice();
    // Sort by necessary compare function
    rowsArray.sort(compare);
    // check , did it sorted
    for (let i = 0; i < rowsArray.length; i++) {
      // Is all elements doesn`t change?
      if (
        temp[i].cells[cellIndex].innerHTML !=
        rowsArray[i].cells[cellIndex].innerHTML
      ) {
        break;
      }
      // if true --> reverse this array
      if (i == rowsArray.length - 1) {
        rowsArray.reverse();
        table.classList.add('srot');
      }
    }
    // Replace old table body
    table.removeChild(tbody);

    for (let i = 0; i < rowsArray.length; i++) {
      tbody.appendChild(rowsArray[i]);
    }

    table.appendChild(tbody);
  }

  // "Add new Contact" button
  const button = document.getElementsByClassName("add-contact")[0];

  button.onclick = function () {
    let name = document.getElementsByName("name")[0].value;
    let age = document.getElementsByName("age")[0].value;
    let city = document.getElementsByName("city")[0].value;
    let country = document.getElementsByName("country")[0].value;
    let isAlive = document.getElementsByName("isAliveCheckbox")[0];
    const CHECK_MARK = "&#10004;";
    const X_MARK = "&#10008;";

    if (isAlive.checked) {
      isAlive = CHECK_MARK;
    } else {
      isAlive = X_MARK;
    }

    // create array with user data
    let userData = [name, age, city, country, isAlive];

    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
      let td = document.createElement("td");
      if (userData[i] == isAlive) {
        if (isAlive == CHECK_MARK) {
          td.classList.add("is-alive-true");
        } else {
          td.classList.add("is-alive-false");
        }
      }
      td.innerHTML = userData[i];
      tr.appendChild(td);
    }

    // validation
    !name
      ? alert("Please, enter contact`s name")
      : !age
      ? alert("Please, enter contact`s age")
      : !city
      ? alert("Please, enter contact`s city")
      : !country
      ? alert("Please, enter contact`s country")
      : tbody.appendChild(tr);

    // refresh form
    refresh("name", "age", "city", "country");
  };

  function refresh() {
    for (let i = 0; i < arguments.length; i++) {
      document.getElementsByName(arguments[i])[0].value = "";
    }
    document.getElementsByName("isAliveCheckbox")[0].checked = false;
  }

})();
