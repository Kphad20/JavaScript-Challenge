// From data.js
var tableData = data;

// Console.log the data
console.log(tableData);

// Reference the table body
var tbody = d3.select("tbody");

// Loop through data and append table rows and corresponding table data values to each UFO report object
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Filter each row so table shows any rows that have at least one column that contains the value in the input field.
// Filter by events of input elements by passing the event and specific index.
function filterTable(event, index) {
  var filter = event.target.value.toLowerCase();
  var rows = document.querySelector("#ufo-table tbody").rows;
  // Loop through rows to perform filters
  for (var i = 0; i < rows.length; i++) {
    var dateCol = rows[i].cells[0].textContent.toLowerCase();
    var cityCol = rows[i].cells[1].textContent.toLowerCase();
    var stateCol = rows[i].cells[2].textContent.toLowerCase();
    var countryCol = rows[i].cells[3].textContent.toLowerCase();
    var shapeCol = rows[i].cells[4].textContent.toLowerCase();
    // Check for multiple conditions to display row, otherwise display nothing
    if ((dateCol.indexOf(filter) > -1 && index == 0) || (cityCol.indexOf(filter) > -1 && index == 1) || (stateCol.indexOf(filter) > -1 && index == 2) || (
      countryCol.indexOf(filter) > -1 && index == 3) || (shapeCol.indexOf(filter) > -1 && index == 4)) {rows[i].style.display = "";
    } 
    else {
      rows[i].style.display = "none";
    }      
  }
};

// Add event listener, "keyup", and loop through filters to check for input keys
document.querySelectorAll("input.form-control").forEach(function(el,idx){
  el.addEventListener("keyup", function(e){
    filterTable(e, idx);
  }, false);
});

// Clear search fields with Reset button using "onclick=perfromReset()" event handler
// Use document.getElementById() method to return an element whose id property matches
function performReset() {
  document.getElementById("datetime").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("shape").value = "";
  filterTable(event, 0);
};
