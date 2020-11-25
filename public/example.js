// @ts-check
(function () {
  /** @var {HTMLTableElement} table */
  const table = document.querySelector("#sorting-table");

  const sortingTable = new SortingTable(table);

  // "Add new Contact" button
  const form = document.querySelector("#form--add-contact");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Event`, e);
    form.querySelector("#name");
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;
    const isAliveCheckbox = document.querySelector("#isAlive");

    const isAlive = isAliveCheckbox.checked
      ? sortingTable.CHECK_MARK
      : sortingTable.X_MARK;

    let data = [name, age, city, country, isAlive];
    if (!isValid(data)) {
      console.error("[Main js] Data is not valid!");
      return;
    }
    // create array with user data
    sortingTable.createRow(data, function (td, value) {
      if (isAlive === value) {
        const aliveClass =
          isAlive === sortingTable.CHECK_MARK
            ? "text-success"
            : "text-danger";
        td.classList.add(aliveClass);
      }
    });

    form.reset();
  }

  function isValid(data) {
    const [name, age, city, country] = data;
    switch (true) {
      case !name:
        alert("Please, enter contact`s name");
        return false;
      case !age:
        alert("Please, enter contact`s age");
        return false;
      case !city:
        alert("Please, enter contact`s city");
        return false;
      case !country:
        alert("Please, enter contact`s country");
        return false;
      default:
        return true;
    }
  }
})();
