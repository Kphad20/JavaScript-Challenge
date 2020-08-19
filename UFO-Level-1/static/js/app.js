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

// Select the button and input form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

      // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter by date input
    var filteredData = tableData.filter(date => date.datetime === inputValue);

    // Clear table to show filtered table only
    d3.select("tbody").html("");

    // Clear input field after submitting
    d3.select("#datetime").node().value = "";

    // Loop through data and append filtered data as new table 
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    // Console.log the filtered data
    console.log(filteredData);
}
