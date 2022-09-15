// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

let tableBody= document.querySelector("tbody");
// BUILD TABLE
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let dataTr= `
      <tr>
        <td><img src="./Resources/images/champion_images/${dataRow.name}.jpg"/></td>
        <td>${dataRow.name}</td>
        <td>${dataRow.key}</td>
        <td>${dataRow.title}</td>
        <td>${dataRow.tags}</td>
        <td>${dataRow.partype}</td>
        <td>${dataRow.hp}</td>
        <td>${dataRow.hpperlevel}</td>
        <td>${dataRow.mp}</td>
        <td>${dataRow.mpperlevel}</td>
        <td>${dataRow.movespeed}</td>
        <td>${dataRow.armor}</td>
        <td>${dataRow.armorperlevel}</td>
        <td>${dataRow.spellblock}</td>
        <td>${dataRow.spellblockperlevel}</td>
        <td>${dataRow.attackrange}</td>
        <td>${dataRow.hpregen}</td>
        <td>${dataRow.hpregenperlevel}</td>
        <td>${dataRow.mpregen}</td>
        <td>${dataRow.mpregenperlevel}</td>
        <td>${dataRow.crit}</td>
        <td>${dataRow.critperlevel}</td>
        <td>${dataRow.attackdamage}</td>
        <td>${dataRow.attackdamageperlevel}</td>
        <td>${dataRow.attackspeedperlevel}</td>
        <td>${dataRow.attackspeed}</td>
        <td>${dataRow.avgscore}</td>
      </tr>
    `
      //   let row = tbody.append("tr");
      //   // Loop through each field in the dataRow and add
      //   // each value as a table cell (td)
      //   Object.values(dataRow).forEach((val) => {
      //     let cell = row.append("td");
      //     cell.text(val);
      //   });
      // });

      tableBody.insertAdjacentHTML("beforeend", dataTr);  
  });
}

// let tableRows= document.querySelector("tr");
// tr.forEach(rowCell=> {
//   let rc= `<td>Image</td>`
//   rowCell.insertAdjacentHTML("afterbegin", rc);
// });

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let inputElement = d3.select(this);
    console.log(inputElement);

    // 4b. Save the value that was changed as a variable.
    let elementValue = inputElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = inputElement.attr("id");
    console.log(filterID);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterID] = elementValue;
    }
    else {
        delete filters[filterID];
    }
    console.log(filters);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(); 
}
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData; 
  console.log(filteredData) 


  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });    

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  const table = th.closest('table');
  const tbody = table.querySelector('tbody');
  Array.from(tbody.querySelectorAll('tr'))
    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    .forEach(tr => tbody.appendChild(tr) );
})))


